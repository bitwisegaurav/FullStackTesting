const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

var corsOptions = {
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200
}

var corsOptionsAll = {
    origin: process.env.CORS_ORIGIN_ALL,
    optionsSuccessStatus: 200
}

mongoose.connect(`${process.env.MONGODB_URL}/fullstacklearning`);

const dataSchema = new mongoose.Schema({
  name: String,
});

const Data = mongoose.model('Data', dataSchema);

app.get('/', cors(corsOptions), async (req, res) => {
  try {
    const jsonData = {
        name: "Gaurav Mishra",
        github: "@bitwisegaurav",
        email: "gauravmishra2401@gmail.com",
        username: "bitwisegaurav"
    };
    res.status(200).json(jsonData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/health', cors(corsOptionsAll), (req, res) => {
  res.status(200).send('Server is working!');
});

app.post('/store', cors(corsOptions), async (req, res) => {
  try {
    const { name } = req.body;
    const newData = new Data({ name });
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
