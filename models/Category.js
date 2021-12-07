const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
    // define columns
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
    //table config options
  {
    //pass in the imported sequalize connection
    sequelize,
    //do not automatically create createdAt/updatedAt timestamp fields
    timestamps: false,
    // don't pluralize name of database table
    freezeTableName: true,
    //use underscores instead of camel-casing
    underscored: true,
    //model name is undercase in the database
    modelName: 'category',
  }
);

module.exports = Category;


