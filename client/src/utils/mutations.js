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

export const ADD_DOB = gql`
  mutation addDOB($dob: String!) {
    addDOB(dob: $dob) {
      _id
      firstName
      lastName
      dob
    }
  }
`;

export const ADD_INTEREST = gql`
mutation addInterest($interests: [String!]!) {
  addInterest(interests: $interests) {
    _id
    firstName
    lastName
    interests
  }
}
`
export const ADD_HOBBIES = gql`
  mutation addHobbies($hobbies: [String!]!) {
    addHobbies(hobbies: $hobbies) {
      _id
      firstName
      lastName
      hobbies
    }
  }
`;

export const ADD_ABOUT = gql`
  mutation addAbout($about: String!) {
    addAbout(about: $about) {
      _id
      firstName
      lastName
      about
    }
  }
`;

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