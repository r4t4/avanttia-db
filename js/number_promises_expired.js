/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('number_promises_expired', {
    customer_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    nppv: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'number_promises_expired',
    timestamps: false,
    version: false
  });
};
