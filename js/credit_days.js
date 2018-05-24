/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('credit_days', {
    company_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    creditDays: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.0000'
    }
  }, {
    tableName: 'credit_days',
    timestamps: false,
    version: false
  });
};
