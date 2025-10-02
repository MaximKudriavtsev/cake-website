import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageSrc: String,
    price: Number,
    type: String,
});

export default mongoose.models.Product || mongoose.model('Product', productSchema);