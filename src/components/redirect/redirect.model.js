import mongoose from "mongoose";

const { Schema } = mongoose;

const urlShortenerchema = new Schema({
  shortUrl: { type: String },
  destinationUrl: { type: String },
  status: { type: String },
  createdAt: { type: Date },
});

export const urlShortener = mongoose.model(
  "urlShortener",
  urlShortenerchema,
  "urlShortener"
);
