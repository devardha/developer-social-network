import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        username: String!
        email: String!
        password: String!
        avatar: String
        followers: String
        following: String
        createdAt: String
        status: [String]
    }

    type Query {
        users: [User]
        user(id: ID!): User!
    }
`;

export default typeDefs;
