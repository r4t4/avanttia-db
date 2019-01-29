/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('licences', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    plan_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: 'plans',
        key: 'id'
      }
    },
    distributor_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'distributors',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    licence_type: {
      type: DataTypes.ENUM('Lite','Business','Corporate','Distribuidor'),
      allowNull: false,
      defaultValue: 'Lite'
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    invoices: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    sms: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    accounts: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    rfc: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    sic: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    activation: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    expiration: {
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
    },
    administrators: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    agents: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    disabled: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    multiCompany: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'licences',
    timestamps: false,
    version: false
  });
};
