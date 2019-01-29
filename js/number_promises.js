/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('number_promises', {
    customer_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    tpp: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'number_promises',
    timestamps: false,
    version: false
  });
};
