import User from '../models/user.model';
import { AuthenticationError } from 'apollo-server-express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const resolvers = {
    Query: {
        users: (parent, args, context) => {
            const posts = User.find({});
            return posts;
        },
        user: (parent, { id }, context) => {
            return User.findById(id);
        },
        me: async (parent, args, { req, res }) => {
            const token = req.cookies['_UTId'];
            const decode = jwt.verify(token, process.env.SECRET);

            const user = await User.findById(decode.id);

            return user;
        },
    },
    Mutation: {
        register: async (parent, args, { res }) => {
            // Check existing user
            const user = await User.findOne({ username: args.username });

            if (user) {
                return new AuthenticationError('User has already exist!');
            }

            const saltRounds = 12;
            const hashedPassword = bcrypt.hashSync(args.password, saltRounds);

            const newUser = await User.create({
                username: args.username,
                email: args.email,
                password: hashedPassword,
            });

            const token = jwt.sign({ id: newUser._id }, process.env.SECRET, {
                expiresIn: 86400,
            });

            const cookieOptions = {
                httpOnly: true,
                // secure: true,
            };

            res.cookie('_UTId', token, cookieOptions);

            return token;
        },
        login: async (parent, args, { res }) => {
            // Check existing user
            const user = await User.findOne({ username: args.username });

            if (!user) {
                return new AuthenticationError('User not found');
            }

            const isValid = bcrypt.compare(args.password, user.password);

            if (!isValid) {
                throw new AuthenticationError('Email or password invalid');
            }

            const token = jwt.sign({ id: user._id }, process.env.SECRET, {
                expiresIn: 86400,
            });

            const cookieOptions = {
                httpOnly: true,
                // secure: true,
            };

            res.cookie('_UTId', token, cookieOptions);

            return token;
        },
    },
};

export default resolvers;
