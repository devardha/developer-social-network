import mongoose from 'mongoose';

const statusSchema = new mongoose.Schema({
    content: { type: String, required: true },
    datePublished: { type: Date, default: Date.now },
    postedBy: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    likedBy: { type: Array },
    comments: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Comment' },
});

const status = mongoose.model('Status', statusSchema);

export default status;
