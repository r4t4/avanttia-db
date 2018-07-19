/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_forma_pago', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    c_forma_pago: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bancarizado: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    numero_de_operacion: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    rfc_emisor_cta_ordenante: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cta_ordenante: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    patron_cta_ordenante: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    rfc_emisor_cta_beneficiario: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cta_beneficiario: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    patron_cta_beneficiario: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tipo_cadena_pago: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nombre_banco_emisor_cta_ordenante_caso_extranjero: {
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
    tableName: 'c_forma_pago',
    timestamps: false,
    version: false
  });
};
