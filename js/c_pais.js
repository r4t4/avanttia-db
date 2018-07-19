/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_pais', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    c_pais: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    formato_codigo_postal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    formato_registro_identidad_tributaria: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    validacion_registro_identidad_tributaria: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    agrupaciones: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'c_pais',
    timestamps: false,
    version: false
  });
};
