const typeDefs = `
type User {
    _id: ID!
    firstName: String
    lastName: String
    email: String
    gender: String
    dob: String
    inbox: [Message]
    outbox: [Message]
    interests: [String]
    favorited: [ID]
  }

  type Message {
    messageId: ID!
    text: String
    userId: ID
    read: Boolean
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]!
  }

  type Mutation {
  addUser(firstName: String!, lastName: String!, email: String!, password: String!, gender: String!, dob: String!): Auth
  login(email: String!, password: String!): Auth

  addInterest(userID: ID!, interest: String!): User
  saveMatch(matchID: ID!): User 
  removeMatch(matchID : ID!): User
  }
`;

module.exports = typeDefs;
