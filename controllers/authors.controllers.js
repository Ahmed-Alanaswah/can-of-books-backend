"use strict";
const { AuthorModel } = require("../models/Author.model");
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

module.exports = {
	authersController,
	getAutherController,
};
