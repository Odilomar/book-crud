const { Router } = require("express");
const booksRouter = require("./book");

const router = Router();

router.use("/books", booksRouter);

module.exports = router;
