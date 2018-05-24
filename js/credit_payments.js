/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('credit_payments', {
    company_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    rel_cred_pago: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'credit_payments',
    timestamps: false,
    version: false
  });
};
