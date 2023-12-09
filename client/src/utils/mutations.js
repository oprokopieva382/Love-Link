import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $email: String!
    $password: String!
    $gender: String!
    $lookingFor: String!
    $lastName: String!
  ) {
    addUser(
      firstName: $firstName
      email: $email
      password: $password
      gender: $gender
      lookingFor: $lookingFor
      lastName: $lastName
    ) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

export const ADD_INTEREST = gql`
mutation addInterest($interest: String!) {
  addInterest(interest: $interest) {
    _id
    firstName
    lastName
    interests
  }
}
`

export const REMOVE_INTEREST = gql`
mutation removeInterest($interest: String!) {
  removeInterest(interest: $interest) {
    _id
    firstName
    lastName
    interests
  }
}
`

export const ADD_IMAGE = gql`
mutation addImage($imageUrl: String!) {
  addImage(imageURL: $imageUrl) {
    _id
    firstName
    lastName
    image
  }
}
`

export const ADD_MESSAGE = gql`
mutation addMessage($message: String!, $targetId: ID!) {
  addMessage(message: $message, targetID: $targetId) {
    _id
    firstName
    lastName
    outbox {
      text
      userId
      read
    }
  }
}
`

export const SAVE_MATCH = gql`
  mutation saveMatch($matchId: ID!) {
    saveMatch(matchID: $matchId) {
      _id
      firstName
      lastName
    }
  }
`;

export const REMOVE_MATCH = gql`
mutation removeMatch($matchId: ID!) {
  removeMatch(matchID: $matchId) {
    _id
    firstName
    lastName
  }
}
`