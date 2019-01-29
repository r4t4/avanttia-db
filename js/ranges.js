/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ranges', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    company_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'companies',
        key: 'id'
      }
    },
    minimum: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    maximum: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    label: {
      type: DataTypes.STRING(255),
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
    tableName: 'ranges',
    timestamps: false,
    version: false
  });
};
