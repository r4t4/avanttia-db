/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('longest_invoice_years', {
    customer_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    fla: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'longest_invoice_years',
    timestamps: false,
    version: false
  });
};
