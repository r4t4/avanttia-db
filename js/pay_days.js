/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pay_days', {
    company_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    payDays: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.0000'
    }
  }, {
    tableName: 'pay_days',
    timestamps: false,
    version: false
  });
};
