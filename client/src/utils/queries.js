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
