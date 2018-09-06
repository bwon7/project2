module.exports = function(sequelize, DataTypes) {
  
    // 'Recipes' in the define method, will be the name
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
        allowNull: false,
        len: [1]
      },
      ingredients: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      instructions: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }

    });
    //Just in case --> Adds a DropTable If Exists
    /* sequelize.sync({
      force: true
    }); */
  
    return Recipes;
};