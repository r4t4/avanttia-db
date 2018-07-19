/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_codigo_postal', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    c_codigo_postal: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    c_estado: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    c_municipio: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    c_localidad: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'c_codigo_postal',
    timestamps: false,
    version: false
  });
};
