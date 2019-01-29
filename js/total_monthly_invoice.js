/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('total_monthly_invoice', {
    customer_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    mtmf: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mmf: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'total_monthly_invoice',
    timestamps: false,
    version: false
  });
};
