/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('invoices_expired', {
    customer_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    nfv: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    tfv: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mfv: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'invoices_expired',
    timestamps: false,
    version: false
  });
};
