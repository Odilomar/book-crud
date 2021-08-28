const { Router } = require("express");

const getBook = require("./get-book");
const getBooks = require("./get-books");
const postBook = require("./post-book");
const putBook = require("./put-book");
const deleteBook = require("./delete-book");

const router = Router();

router.get("/:id", getBook);
router.get("/", getBooks);
router.post("/", postBook);
router.put("/:id", putBook);
router.delete("/:id", deleteBook);

module.exports = router;
