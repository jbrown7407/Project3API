const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  description: { type: String, default: "Best Product ever!" },
  cart: { type: String, required: true },
  //cart array
  //recommendations: based on previous purchases
  // 0auth needed and stripe needed
});
