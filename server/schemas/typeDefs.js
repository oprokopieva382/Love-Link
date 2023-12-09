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
    interests: [String]
    matches: [ID]
  }

  type Message {
    text: String
    userId: ID
    read: Boolean
  }

  input MessageInput {
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
  addUser(firstName: String!, lastName: String!, email: String!, 
    password: String!, gender: String!, lookingFor: String!): Auth
  login(email: String!, password: String!): Auth

  addInterest(interest: String!): User
  addImage(imageURL: String!): User

  addMessage(message: MessageInput!, targetID: ID!): User

  saveMatch(matchID: ID!): User 
  removeMatch(matchID : ID!): User
  }
`;

module.exports = typeDefs;
