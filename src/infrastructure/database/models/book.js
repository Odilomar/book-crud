"use strict";

const { Model } = require("sequelize");
const config = require("../config");

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {}
  }
  Book.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      author: DataTypes.STRING,
      releaseDate: DataTypes.DATE,
      edition: DataTypes.INTEGER,
      pages: DataTypes.INTEGER,
    },
    {
      sequelize,
      freezeTableName: true,
      modelName: config.tables.book,
      paranoid: true,
    }
  );
  return Book;
};
