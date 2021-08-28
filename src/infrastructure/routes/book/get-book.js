const { bookRepository } = require("../../database/repositories");

module.exports = async function getBook(request, response, next) {
  const book = await bookRepository.findOne({ title: "livro" });
  return response.json({ message: "getBook", book });
};
