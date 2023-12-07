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
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!, gender: String!): Auth
  saveMatch(matchID: ID!): User 
  removeMatch(matchID : ID!): User
  }
`;

module.exports = typeDefs;
