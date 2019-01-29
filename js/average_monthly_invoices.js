/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('average_monthly_invoices', {
    customer_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    pfm: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'average_monthly_invoices',
    timestamps: false,
    version: false
  });
};
