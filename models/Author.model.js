"use strict";
const mongoose = require("mongoose");
const { bookSchema } = require("./Book.model");
//title
//description
//status
//email

const autherSchema = new mongoose.Schema({
	name: String,
	books: [bookSchema],
});

const AuthorModel = mongoose.model("author", autherSchema);

let seedAuthor = () => {
	let booksList = [
		{
			title: "mastery",
			description: "lorem ipsum............",
			status: "avialable",
		},
		{
			title: "humans",
			description: "lorem ipsum............",
			status: "avilable",
		},
		{
			title: "arts",
			description: "lorem ipsum............",
			status: "available",
		},
	];

	let newAuther = new AuthorModel({
		name: "Robert greence",
		books: booksList,
	});
	newAuther.save();
};

module.exports = {
	seedAuthor,
	AuthorModel,
};
