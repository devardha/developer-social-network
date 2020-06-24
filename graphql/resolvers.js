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
};

export default resolvers;
