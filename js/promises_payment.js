/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promises_payment', {
    company_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    payment_promises: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'promises_payment',
    timestamps: false,
    version: false
  });
};
