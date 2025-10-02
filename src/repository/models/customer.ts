import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    createdTimestamp: String,
});

export default mongoose.models.Customer || mongoose.model('Customer', customerSchema);