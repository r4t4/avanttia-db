/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_regimen_fiscal', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    c_regimen_fiscal: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    aplica_fisicas: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    aplica_morales: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    fecha_inicio_vigencia: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: '2017-01-01'
    },
    fecha_fin_vigencia: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'c_regimen_fiscal',
    timestamps: false,
    version: false
  });
};
