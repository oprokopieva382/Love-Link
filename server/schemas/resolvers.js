const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (_, args, context) => {
      if (context.user) {
        // console.log('in here to get a user -- have context')
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v-password")
          .populate("inbox", "outbox");

        console.log(userData);
        return userData;
      }
      throw AuthenticationError;
    },

    user: async (_, { userID }, context) => {
        const userData = await User.findOne({ _id: userID })
          .select("-__v-password")
          .populate("inbox", "outbox");

          return userData;
    },

    users: async () => {
      return User.find();
    },
  },

  Mutation: {
    addUser: async (_, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },

    addDOB: async (_, { dob }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $set: { dob },
          },
          { new: true }
        );
      }
      throw AuthenticationError;
    },

    addInterest: async (_, { interests }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: { interests: { $each: interests } },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }

      throw AuthenticationError;
    },

    addHobbies: async (_, { hobbies }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: { hobbies: { $each: hobbies } },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }

      throw AuthenticationError;
    },

    addAbout: async (_, { about }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $set: { about: about },
          },
          { new: true, runValidators: true }
        );
      }
      throw AuthenticationError;
    },

    removeInterest: async (_, { interest }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $pull: { interests: { interest } },
          },
          {
            new: true,
          }
        );
      }
      throw AuthenticationError;
    },

    addImage: async (_, { imageURL }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $set: {
              image: imageURL,
            },
          },
          {
            new: true,
          }
        );
      }

      throw AuthenticationError;
    },

    addMessage: async (_, { message, targetID }, context) => {
      if (context.user) {
        const me = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: {
              outbox: {
                text: message,
                userId: targetID,
                read: false,
              },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );

        const them = await User.findOneAndUpdate(
          { _id: targetID },
          {
            $addToSet: {
              inbox: {
                text: message,
                userId: context.user._id,
                read: false,
              },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
        return [me, them];
      }
      throw AuthenticationError;
    },

    saveMatch: async (_, { matchID }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: { matches: matchID },
          },
          {
            new: true,
          }
        );

        return updatedUser;
      }

      throw AuthenticationError;
    },

    removeMatch: async (_, { matchID }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $pull: { matches: { matchID } },
          },
          { new: true }
        );

        return updatedUser;
      }

      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;