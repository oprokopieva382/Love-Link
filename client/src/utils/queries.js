import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me {
    me {
      _id
      firstName
      lastName
      email
      password
      gender
      lookingFor
      about
      dob
      image
      gallery {
        name
        imageUrl
      }
      inbox {
        text
        userId
        read
        createdAt
      }
      outbox {
        text
        userId
        read
        createdAt
      }
      interests
      hobbies
      matches
    }
  }
`;

export const GET_USER = gql`
  query user($userId: ID!) {
    user(userID: $userId) {
      _id
      firstName
      lastName
      email
      password
      gender
      lookingFor
      about
      dob
      image
      inbox {
        text
        userId
        read
        createdAt
      }
      outbox {
        text
        userId
        read
        createdAt
      }
      interests
      hobbies
      matches
    }
  }
`;

export const GET_USERS = gql`
  query users {
    users {
      _id
      firstName
      lastName
      email
      password
      gender
      lookingFor
      about
      dob
      image
      inbox {
        text
        userId
        read
      }
      outbox {
        text
        userId
        read
      }
      interests
    }
  }
`;
