/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_tasa_o_cuota', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rango_fijo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    c_tasa_o_cuota_valor_minimo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    c_tasa_o_cuota_valor_maximo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    impuesto: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    factor: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    traslado: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    retencion: {
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
    tableName: 'c_tasa_o_cuota',
    timestamps: false,
    version: false
  });
};
