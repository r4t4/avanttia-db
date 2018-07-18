/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('company_intercom_data', {
    company_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    sinresgistro_bit: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    clientes_sasignar: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    edo_cuenta: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    plantillas: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    prom_pago: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    reglas: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    cred_prom: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.0000'
    },
    pago_prom: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.0000'
    },
    rel_fac_edo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.0000'
    },
    pagos_aplicados: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    rel_cred_pago: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.0000'
    }
  }, {
    tableName: 'company_intercom_data',
    timestamps: false,
    version: false
  });
};
