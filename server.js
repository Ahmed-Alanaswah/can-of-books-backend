"use strict";

const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");

require("dotenv").config();
app.use(cors());

const PORT = process.env.PORT;
const MONGO_SERVER = process.env.MONGO_SERVER;
const {
	authersController,
	getAutherController,
} = require("./controllers/authors.controllers");
// const seedBook = require("./models/Book.model");
const { seedAuthor } = require("./models/Author.model");
mongoose.connect(`${MONGO_SERVER}/Bookstore`, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.get("/seed-data", (req, res) => {
	seedAuthor();

	res.json({
		messege: "Auther Objectncreated succefully",
	});
});

app.get("/get-data", authersController);
app.get("/get-author", getAutherController);

app.listen(PORT, () => {
	console.log(`Listening to port ${PORT}`);
});
