import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    commentBody: { type: String },
    commentedBy: { type: String },
    commentedAt: { type: Date, default: Date.now },
});

const comment = mongoose.model('Comment', commentSchema);

export default comment;
