'use strict';
module.exports = (sequelize, DataTypes) => {
  const menus = sequelize.define('menus', {
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    image: DataTypes.STRING,
    status: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {});
  menus.associate = function (models) {
    // associations can be defined here
    // menus.belongsTo(models.categories, {
    //   foreignKey: 'categoryId',
    //   as: 'category_id'
    // })
    menus.belongsTo(models.categories)
    menus.hasMany(models.orders)
    menus.hasMany(models.orders, {
      foreignKey: 'menuId'
    })

  };
  return menus;
};