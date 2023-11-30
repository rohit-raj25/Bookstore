import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  publicationYear: Number,
  ISBN: String,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
