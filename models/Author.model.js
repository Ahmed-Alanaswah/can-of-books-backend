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
	let booksList = [
		{
			title: "mastery",
			description:
				"It is a long established of n their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
			status: "avialable",
		},
		{
			title: "humans",
			description:
				"It is a long established of n their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
			status: "avilable",
		},
		{
			title: "arts",
			description:
				"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Th sometimes by accident, sometimes on purpose (injected humour and the like).",
			status: "available",
		},
	];

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
