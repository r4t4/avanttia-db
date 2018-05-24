/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customers_pending_balance', {
    customer_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    total_pending_balance: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    receivables_count: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    expired: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'customers_pending_balance',
    timestamps: false,
    version: false
  });
};
