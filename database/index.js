const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017';// localhost';
// const mongoDBURI = process.env.MONGOLAB_URI || url;
const run = async () => {
  await mongoose.connect(url,
    {
      dbName: 'Yelp',
      useNewUrlParser: true,
    });
  // console.log('mongoDB connected');
};
run().catch(err => console.log(err));

const db = mongoose.connection;

const bizSchema = mongoose.Schema({
  bId: Number,
  bizname: String,
  reviewCount: Number,
  rating: Number,
  price: String,
  category: [String],
  location: Object,
  phone: String,
  url: String,
  photos: [Number],
});

const Biz = mongoose.model('Biz', bizSchema);

const photoSchema = mongoose.Schema({
  pId: Number,
  imgUrl: String,
  uId: Number,
  bId: Number,
  text: String,
  tag: String,
});
const Photo = mongoose.model('Photo', photoSchema);

const userSchema = mongoose.Schema({
  uId: Number,
  userav: String,
  username: String,
});
const User = mongoose.model('User', userSchema);
module.exports = {
  Biz,
  Photo,
  User,
  db,
};
