/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recovery_goals', {
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
    period_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'periods',
        key: 'id'
      }
    },
    recovery_total: {
      type: "DOUBLE",
      allowNull: false
    },
    recovery_expired: {
      type: "DOUBLE",
      allowNull: false
    },
    recovery_expired_last: {
      type: "DOUBLE",
      allowNull: false
    },
    recovery_current: {
      type: "DOUBLE",
      allowNull: false
    },
    recovery_goal: {
      type: "DOUBLE",
      allowNull: false
    },
    data: {
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
    tableName: 'recovery_goals',
    timestamps: false,
    version: false
  });
};
