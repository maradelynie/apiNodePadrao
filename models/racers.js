const { DataTypes } = require('sequelize');
module.exports = (app) => {
  const Racers = app.db.define('Racers', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  });
  return Racers;
};
