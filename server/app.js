
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { db } = require('../database/index.js');
const {
  getBizInfo, getPhotoInfo, getPhotos, getDishPhotos, getUserInfo,
} = require('../database/seeder/helper.js');

const app = express();
app.use(cors());
app.use(express.static(`${__dirname}/../client/dist`));
app.use('/bizs/:bId', express.static(`${__dirname}/../client/dist`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/biz/:bId', async (req, res) => {
  try {
    const result = await getBizInfo(JSON.parse(req.params.bId));
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
});
// Get photo detail by requesting pId
app.get('/biz_photo/:bId/:pId', async (req, res) => {
  try {
    const result = await getPhotoInfo(JSON.parse(req.params.pId), JSON.parse(req.params.bId));
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get user info by requesting uId
app.get('/users/:uId', async (req, res) => {
  try {
    const result = await getUserInfo(JSON.parse(req.params.uId));
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get 20 photos by requesting pId (Modified for user ids test)
app.get('/biz_photos/:bId/:pId', async (req, res) => {
  try {
    const result = await getPhotos(JSON.parse(req.params.pId), JSON.parse(req.params.bId));
    // get uIds array
    const userIds = [];
    result.forEach((item) => {
      userIds.push(item.uId);
    });
    const final = [];
    final.push(result);
    final.push(userIds);
    res.status(200).send(final); // [[result], [userIds]]
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get first photo and total photo counts by requesting dish menu
app.get('/biz_dishes/:bId/:dishes', async (req, res) => {
  try {
    const result = await getDishPhotos(JSON.parse(req.params.dishes), JSON.parse(req.params.bId));
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
});


module.exports = app;
