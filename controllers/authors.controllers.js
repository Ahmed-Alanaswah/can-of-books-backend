"use strict";
const { response } = require("express");
const { AuthorModel } = require("../models/Author.model");
const { booksModel } = require("../models/Book.model");
let authersController = (req, res) => {
	AuthorModel.find().then((data) => {
		res.json(data);
	});
};

let getAutherController = (req, res) => {
	let autherId = req.query.id;
	AuthorModel.findOne({ _id: autherId }).then((data) => {
		res.json(data);
	});
};
// post method
let autherscreateController = (req, res) => {
	let { author, Books } = req.body;
	let newBook = booksModel(Books);
	newBook.save();

	let newAuthor = AuthorModel({
		author: author,
		Books: newBook,
	});

	newAuthor.save();
	res.json(newAuthor);
};

// handle deleting
const deleteBookController = (req, res) => {
	let id = req.params.id;

	AuthorModel.findByIdAndDelete(id, (err, data) => {
		if (err) {
			res.status(500).send("an error occured");
		} else {
			AuthorModel.find({}).then((authors) => res.json(authors));
		}
	});
};

module.exports = {
	authersController,
	getAutherController,
	autherscreateController,
	deleteBookController,
};
