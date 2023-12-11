

const typeDefs = `
type User {
    _id: ID!
    firstName: String
    lastName: String
    email: String
    password: String
    gender: String
    lookingFor: String
    about: String
    dob: String
    image: String
    inbox: [Message]
    outbox: [Message]
    hobbies: [String]
    interests: [String]
    matches: [ID]
  }

  type Message {
    text: String
    userId: ID
    read: Boolean
    createdAt: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    user(userID: ID!): User
    users: [User]!
  }

  type Mutation {
  addUser(firstName: String!, lastName: String!, email: String!, 
  password: String!, gender: String!, lookingFor: String!): Auth
  login(email: String!, password: String!): Auth

  addDOB(dob: String!): User
  addAbout(about: String!): User
  addInterest(interests: [String!]!): User
  addHobbies(hobbies: [String!]!): User
  removeInterest(interests: String!): User
  removeHobby(hobbies: String!): User

  addImage(imageURL: String!): User

  addMessage(message: String!, targetID: ID!): User

  saveMatch(matchID: ID!): User 
  removeMatch(matchID : ID!): User
  }
`;

module.exports = typeDefs;
