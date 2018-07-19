/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_sync_log_payments', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_sync_log_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'user_sync_log',
        key: 'id'
      }
    },
    payment_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'payments',
        key: 'id'
      }
    },
    sync_operation: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    sync_operation_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sync_operation_error: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    sync_operation_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sync_operation_result: {
      type: DataTypes.INTEGER(4),
      allowNull: true
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
    tableName: 'user_sync_log_payments',
    timestamps: false,
    version: false
  });
};
