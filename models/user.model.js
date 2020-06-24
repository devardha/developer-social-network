import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String },
    followers: { type: Array },
    following: { type: Array },
    createdAt: { type: Date, default: Date.now },
    status: { type: Array },
});

const user = mongoose.model('User', userSchema);

export default user;
