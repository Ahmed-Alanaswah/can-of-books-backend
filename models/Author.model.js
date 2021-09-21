"use strict";
const mongoose = require("mongoose");
const { bookSchema } = require("./Book.model");
//title
//description
//status
//email

const autherSchema = new mongoose.Schema({
	author: String,
	Books: bookSchema,
});

const AuthorModel = mongoose.model("author", autherSchema);

let seedAuthor = () => {
	let newAuther = new AuthorModel({
		name: "Robert greence",
		books: booksList,
	});
	newAuther.save();
	console.log(newAuther);
};

module.exports = {
	seedAuthor,
	AuthorModel,
};
