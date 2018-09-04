module.exports = function(sequelize, DataTypes) {
  
    // 'Post' in the define method, will be the name
    // of the table created in the db
    var Recipes = sequelize.define("Recipes", {
  
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      recipeName: {
        type: DataTypes.STRING,
        allowNull: true,
        len: [1]
      },
      ingredients: {
        type: DataTypes.TEXT,
        allowNull: true,
        len: [1]
      },
      instructions: {
        type: DataTypes.TEXT,
        allowNull: true,
        len: [1]
      }


    });
  
    return Recipes;
};