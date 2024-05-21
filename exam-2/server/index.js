const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const DB = process.env.DB_URL;
const PORT = process.env.PORT;

mongoose.connect(DB).then(
  () => {
    console.log("connected");
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`);
    });
  },
  (err) => {
    console.log(err);
  }
);

const { Schema } = mongoose;

const offerSchema = new Schema({
  title: {
    type: String,
    requrd: true,
  },
  price: {
    type: Number,
    requrd: true,
  },
  description: {
    type: String,
    requrd: true,
  },
  image: {
    type: String,
    requrd: true,
  },
});
const Offers = mongoose.model("Offers", offerSchema);

app.get("/offers", async (req, res) => {
  try {
    const offers = await Offers.find({});
    if (offers.length > 0) {
      res.status(200).send({
        data: offers,
        error: null,
        message: "posted",
      });
    } else {
      res.send({
        data: null,
        message: "data is empty",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

app.get("/offers/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const offer = await Offers.findById(id);
    if (offer !== undefined) {
      res.status(200).send({
        data: offer,
        error: null,
        message: "posted",
      });
    } else {
      res.send({
        data: null,
        message: "data is empty",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

app.delete("/offers/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedOffer = await Offers.findByIdAndDelete(id);
    res.status(200).send({
      response: deletedOffer,
      message: "deleted",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

app.post("/offers", async (req, res) => {
  try {
    const newOffer = new Offers({ ...req.body });
    await newOffer.save();
    res.status(200).send({
      data: newOffer,
      message: "posted",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

app.put("/offers/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Offers.replaceOne({ _id: id }, { ...req.body });
    const updated = await Offers.findById(id);
    res.status(200).send({
      data: updated,
      message: "updated",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

app.patch("/offers/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Offers.findByIdAndUpdate(id, { ...req.body });
    const updated = await Offers.findById(id);
    res.status(200).send({
      data: updated,
      message: "updated",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});
