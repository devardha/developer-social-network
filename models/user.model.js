import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String },
    username: { type: String, required: true },
    email: { type: String },
    password: { type: String },
    avatar: { type: String },
    followers: { type: Array },
    following: { type: Array },
    createdAt: { type: Date, default: Date.now },
    status: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Status' }],
    social_login: {
        github: { type: String },
        google: { type: String },
    },
});

const user = mongoose.model('User', userSchema);

export default user;
