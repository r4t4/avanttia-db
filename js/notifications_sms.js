/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notifications_sms', {
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
    customer_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'customers',
        key: 'id'
      }
    },
    sender: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    receiver: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_response: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    date_open: {
      type: DataTypes.DATE,
      allowNull: true
    },
    responses: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    message: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_response: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_parent: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(11),
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
    tableName: 'notifications_sms',
    timestamps: false,
    version: false
  });
};
