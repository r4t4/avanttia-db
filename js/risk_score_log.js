/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('risk_score_log', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    customer_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: 'customers',
        key: 'id'
      }
    },
    risk_score: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    calculation_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    }
  }, {
    tableName: 'risk_score_log',
    timestamps: false,
    version: false
  });
};
