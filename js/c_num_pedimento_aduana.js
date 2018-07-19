/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_num_pedimento_aduana', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    c_aduana: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    patente: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ejercicio: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    cantidad: {
      type: DataTypes.INTEGER(11),
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
    tableName: 'c_num_pedimento_aduana',
    timestamps: false,
    version: false
  });
};
