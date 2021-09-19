"use strict";
const mongoose = require("mongoose");

//title
//description
//status
//email

const bookSchema = new mongoose.Schema({
	tilte: String,
	description: String,
	Status: String,
});

const booksModel = mongoose.model("book", bookSchema);

// let seedBook = () => {
// 	let newBook = new bookModel({
// 		tilte: "48 laws of power",
// 		description:
// 			" a book authered by rob geene and it talks about political stuff",
// 		Status: "history",
// 		Email: "test@mail.com",
// 	});

// 	newBook.save();
// };

module.exports = { bookSchema };
