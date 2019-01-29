/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('number_invoices', {
    customer_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    tf: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mtf: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'number_invoices',
    timestamps: false,
    version: false
  });
};
