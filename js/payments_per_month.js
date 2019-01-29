/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payments_per_month', {
    customer_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    pm: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mmp: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'payments_per_month',
    timestamps: false,
    version: false
  });
};
