import { gql } from '@apollo/client'

export const SIGN_UP = gql`
  mutation SIGN_UP($username: String!, $email: String!, $password: String!) {
    signup(username: $username, email: $email, password: $password) {
      id
      username
      email
      roles
      createdAt
    }
  }
`

export const SIGN_OUT = gql`
  mutation {
    signout {
      message
    }
  }
`
