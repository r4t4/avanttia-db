/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('extensions', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    receivable_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: 'receivables',
        key: 'id'
      }
    },
    collection_policies_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    previous: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    current: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    comment: {
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
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'extensions',
    timestamps: false,
    version: false
  });
};
