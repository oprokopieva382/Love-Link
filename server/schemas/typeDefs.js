const typeDefs = `
type User {
    _id: ID!
    username: String
    email: String
    gender: String

    interests: [String]
    favorited: [ID]
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
  addUser(username: String!, email: String!, password: String!, gender: String!): Auth
  login(email: String!, password: String!): Auth

  addInterest(userID: ID!, interest: String!): User
  saveMatch(matchID: ID!): User 
  removeMatch(matchID : ID!): User
  }
`;

module.exports = typeDefs;
