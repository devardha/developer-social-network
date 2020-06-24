import mongoose from 'mongoose';

const statusSchema = new mongoose.Schema({
    content: { type: String, required: true },
    datePublished: { type: Date, default: Date.now },
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'user' },
});

const status = mongoose.model('Status', statusSchema);

export default status;
