module.exports = {
  user: {
    name: { type: String, required: true },
    password: { type: String, required: true },
  },
  commodity: {
    name: { type: String },
    price: { type: Number },
    imgSrc: { type: String },
  },
  cart: {
    uId: { type: String },
    cId: { type: String },
    cName: { type: String },
    cPrice: { type: String },
    cImgSrc: { type: String },
    cQuantity: { type: Number },
    cStatus: { type: Boolean, default: false }
  }
}