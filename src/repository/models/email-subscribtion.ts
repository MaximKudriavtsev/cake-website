import mongoose from 'mongoose';

const emailSubscribtionSchema = new mongoose.Schema({
    email: String,
    timestamp: String,
    isSubscribed: Boolean,
});

export default mongoose.models.EmailSubscribtion || mongoose.model('EmailSubscribtion', emailSubscribtionSchema);