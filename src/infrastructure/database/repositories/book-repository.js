const { book } = require("../models");

module.exports = class BookRepository {
  findOne(args) {
    return book.findOne({ where: { ...args } });
  }
  findAll(args) {
    return book.find({ where: { ...args } });
  }
  create(args) {
    return book.create({ ...args });
  }
  async update(id, args) {
    const data = await this.findOne({ id });
    if (!data) throw new Error("Object don´t exists!");
    Object.assign(data, args);
    return book.update(data);
  }
  async delete(id) {
    const data = await this.findOne({ id });
    if (!data) throw new Error("Object don´t exists!");
    return book.destroy({ where: { id } });
  }
};
