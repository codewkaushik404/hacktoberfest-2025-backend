import mongoose from 'mongoose';

const usageTipsSchema = new mongoose.Schema({
  when: { type: String },
  blend: { type: String },
  pairWith: { type: String }
}, { _id: false });

const productSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String },
  flavors: { type: [String] },
  sale: { type: Number, default: 0 },
  sizes: { type: [String] },
  new: { type: Boolean, default: false },
  goals: { type: [String] },
  description: { type: String },
  shortDescription: { type: String },
  longDescription: { type: String },
  usageTips: { type: usageTipsSchema },
  quality: { type: [String] },
  image: { type: String }
},
{
  timestamps: true,
  versionKey: false,
});

const Product = mongoose.model('Product', productSchema);

export default Product;