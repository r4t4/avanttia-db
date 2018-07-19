/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_tipo_factor', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    c_tipo_factor: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'c_tipo_factor',
    timestamps: false,
    version: false
  });
};
