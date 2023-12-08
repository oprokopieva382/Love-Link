import { gql } from "@apollo/client";

export const ADD_USER = gql`
mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!, $gender: String!, $lookingFor: String!, $dob: String!) {
  addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, gender: $gender, lookingFor: $lookingFor, dob: $dob) {
    token
    user {
      _id
      firstName
      lastName
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

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
