"use strict";

const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
// const Router = require("./routes");
require("dotenv").config();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;
const MONGO_SERVER = process.env.MONGO_SERVER;
const {
	authersController,
	getAutherController,
	autherscreateController,
	deleteBookController,
	getauthorsCotnroller,
	updateAuthorController,
} = require("./controllers/authors.controllers");
// const seedBook = require("./models/Book.model");
const { seedAuthor } = require("./models/Author.model");
// mongoose.connect(`${MONGO_SERVER}/Bookstore`, {
// 	useNewUrlParser: true,
// 	useFindAndModify: false,
// 	useUnifiedTopology: true,
// });

mongoose.connect(
	`mongodb+srv://Aa1791994:Aa1791994@cluster0.lgegl.mongodb.net/Books?retryWrites=true&w=majority`,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
	console.log("Connected successfully");
});

app.get("/get-data", authersController);
// app.get("/get-author", getAutherController);

app.get("/", getauthorsCotnroller);

app.post("/create-book", autherscreateController);
app.delete("/delete-book/:id", deleteBookController);
app.put("/update-book/:id", updateAuthorController);

app.listen(PORT, () => {
	console.log(`Listening to port ${PORT}`);
});

//
// app.get("/seed-data", (req, res) => {
// 	seedAuthor();

// 	res.json({
// 		messege: "Auther Objectncreated succefully",
// 	});
// });
