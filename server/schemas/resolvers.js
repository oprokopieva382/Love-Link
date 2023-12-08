const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (_, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v-password"
        ).populate('messages');

        return userData;
      }
      throw AuthenticationError;
    },
    users: async () => {
      return User.find();
    }
  },

  Mutation: {
    addUser: async (_, { firstName, lastName, email, password, gender, dob }) => {
      const user = await User.create({ firstName, lastName, email, password, gender, dob });
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

    addInterest: async (_, { userID, interest }, context) => {
      // TODO: comment these back in when front end is up
      // if (context.user) {
        return User.findOneAndUpdate(
          { _id: userID },
          {
            $addToSet: { interests: interest },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      // }

      // throw AuthenticationError;
    },

    saveMatch: async (_, { matchID }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: { favorited: matchID },
          },
          {
            new: true,
            runValidators: true,
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
               { $pull: { savedBooks: { matchID } } },
               { new: true }
             );

              return updatedUser;
            }

            throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
