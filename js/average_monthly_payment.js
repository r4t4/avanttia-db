/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('average_monthly_payment', {
    customer_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ppm: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'average_monthly_payment',
    timestamps: false,
    version: false
  });
};
