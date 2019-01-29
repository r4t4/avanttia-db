/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('formulas', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    formula: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ranges: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    kpis: {
      type: DataTypes.TEXT,
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
    tableName: 'formulas',
    timestamps: false,
    version: false
  });
};
