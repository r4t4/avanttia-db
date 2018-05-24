/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {licence_renewalsInstance, licence_renewalsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<licence_renewalsInstance, licence_renewalsAttribute>('licence_renewals', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    licence_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'licences',
        key: 'id'
      }
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
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    code: {
      type: DataTypes.STRING(255),
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
    administrators: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    agents: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    multiCompany: {
      type: DataTypes.INTEGER(1),
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
    tableName: 'licence_renewals',
    timestamps: false,
    version: false
  });
};
