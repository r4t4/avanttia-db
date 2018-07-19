/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_patente_aduanal', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    c_patente_aduanal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fecha_inicio_vigencia_patente: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: '2017-01-01'
    },
    fecha_fin_vigencia_patente: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'c_patente_aduanal',
    timestamps: false,
    version: false
  });
};
