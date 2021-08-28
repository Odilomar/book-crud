const { Router } = require("express");

const getBook = require("./get-book");
const getBooks = require("./get-books");
const postBook = require("./post-book");
const putBook = require("./put-book");
const deleteBook = require("./delete-book");

const router = Router();

router.use("/:id", getBook);
router.use("/", getBooks);
router.use("/", postBook);
router.use("/:id", putBook);
router.use("/:id", deleteBook);

module.exports = router;
