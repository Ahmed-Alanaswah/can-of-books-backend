"use strict";
const mongoose = require("mongoose");
const { bookSchema } = require("./Book.model");
//title
//description
//status
//email

const autherSchema = new mongoose.Schema({
	author: String,
	title: String,
	description: String,
	email: String,
});

const AuthorModel = mongoose.model("author", autherSchema);

let seedAuthor = () => {
	let newAuther = new AuthorModel({
		author: "Robert greence",
		title: "action",
		description: "hello world this is my job",
		email: "available",
	});
	newAuther.save();
	console.log(newAuther);
};

module.exports = {
	seedAuthor,
	AuthorModel,
};
