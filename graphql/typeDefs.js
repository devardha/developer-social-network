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
    type Me {
        id: ID!
        username: String!
    }

    type Query {
        users: [User]
        user(id: ID!): User!
        me: User!
    }

    type Mutation {
        register(username: String, email: String, password: String): String
        login(username: String, password: String): String
    }
`;

export default typeDefs;
