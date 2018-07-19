/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_impuesto', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    c_impuesto: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    retencion: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    traslado: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    local_o_federal: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    entidad_en_la_que_aplica: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'c_impuesto',
    timestamps: false,
    version: false
  });
};
