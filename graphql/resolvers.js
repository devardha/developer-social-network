import User from '../models/user.model';

const resolvers = {
    Query: {
        users: (parent, args, { models }) => {
            const posts = User.find({});
            return posts;
        },
        user: (parent, { id }, context) => {
            return User.findById(id);
        },
    },
    Mutation: {
        login: async (parent, { email, password }, context) => {
            const { user } = await User.findOne({ email, password });
            return { user };
        },
    },
};

export default resolvers;
