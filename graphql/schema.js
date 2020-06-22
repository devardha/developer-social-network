import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema } from 'graphql';

// Import Mongoose Schema
import User from '../models/user.model';

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
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
    },
});

export default new GraphQLSchema({
    query: RootQuery,
});
