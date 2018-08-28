module.exports = function(sequelize, DataTypes) {
  
    // 'Post' in the define method, will be the name
    // of the table created in the db
    var Recipes = sequelize.define("Recipes", {
  
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
    });
  
    return Recipes;
};