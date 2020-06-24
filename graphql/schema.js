import { GraphQLObjectType, GraphQLID, GraphQLSchema, GraphQLList, GraphQLString } from 'graphql';
// Import Mongoose Schema
import User from '../models/user.model';

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        email: { type: GraphQLString },
        avatar: { type: GraphQLString },
        followers: { type: GraphQLList(GraphQLString) },
        following: { type: GraphQLList(GraphQLString) },
        status: { type: GraphQLList(GraphQLString) },
    }),
});

const StatusType = new GraphQLObjectType({
    name: 'Status',
    fields: () => ({
        user: { type: GraphQLString },
        content: { type: GraphQLString },
    }),
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return User.findById(args.id);
            },
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return User.find();
            },
        },
    },
});

export default new GraphQLSchema({
    query: RootQuery,
});
