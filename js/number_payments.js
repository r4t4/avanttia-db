/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('number_payments', {
    customer_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    tp: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mtp: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'number_payments',
    timestamps: false,
    version: false
  });
};
