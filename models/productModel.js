const productSchema = mongoose.Schema({
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  name: {
    type: String,
    trim: true,
    required: [true, "A product must have a name"],
    maxlength: [40, 'A product name must have less or equal then 40 characters'],
    minlength: [3, 'A product name must have more or equal then 10 characters']
  },
  image: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: [true, "A product must have a brand"],
  },
  category: {
    type: String,
    required: [true, "A product must belong to a category"],
  },
  description: {
    type: String,
    required: [true, "A product must have a description"],
  },
  reviews: [reviewSchema],
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  numReviews: {
    type: Number,
    required: true,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0,
  },
}, {
  timestamps: true,
})