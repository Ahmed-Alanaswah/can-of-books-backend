"use strict";
const { response } = require("express");
const { AuthorModel } = require("../models/Author.model");
// const { booksModel } = require("../models/Book.model");
let authersController = (req, res) => {
	AuthorModel.find().then((data) => {
		res.json(data);
	});
};

// let getAutherController = (req, res) => {
// 	let autherId = req.query.id;
// 	AuthorModel.findOne({ _id: autherId }).then((data) => {
// 		res.json(data);
// 	});
// };

// get books

const getauthorsCotnroller = (req, res) => {
	AuthorModel.find({}).then((data) => {
		res.status(200).json(data);
	});
};

// post method
let autherscreateController = async (req, res) => {
	let { author, title, description, email } = req.body;
	// let newBook = booksModel(Books);
	// newBook.save();

	let newAuthor = AuthorModel({
		author: author,
		title: title,
		description: description,
		email: email,
	});

	newAuthor.save();
	let authorsList = await AuthorModel.find({});
	res.status(201).json(authorsList);
};

// handle deleting
const deleteBookController = (req, res) => {
	let id = req.params.id;

	AuthorModel.findByIdAndDelete(id, async (err, data) => {
		if (err) {
			res.status(500).send("an error occured");
		} else {
			let authorList = await AuthorModel.find({});
			res.json(authorList);
		}
	});
};

// update data

const updateAuthorController = async (req, res) => {
	let AuthorId = req.params.id;
	let updatedData = req.body;
	AuthorModel.findOne({ _id: AuthorId }).then((Author) => {
		Author.author = updatedData.author;
		Author.title = updatedData.title;
		Author.description = updatedData.description;
		Author.email = updatedData.email;

		Author.save();
	});
	let updateAuthorList = await AuthorModel.find({});
	res.status(200).send(updateAuthorList);
};

module.exports = {
	authersController,
	// getAutherController,
	autherscreateController,
	deleteBookController,
	getauthorsCotnroller,
	updateAuthorController,
};
