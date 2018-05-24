/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('receivables_notifications', {
    company_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    rel_fac_edo: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'receivables_notifications',
    timestamps: false,
    version: false
  });
};
