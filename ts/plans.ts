/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {plansInstance, plansAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<plansInstance, plansAttribute>('plans', {
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
    price: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    validity: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    invoices: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sms: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    accounts: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rfc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sic: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date_limit: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    user_limit: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    times_used: {
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
    },
    distributor_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: 'distributors',
        key: 'id'
      }
    },
    activation_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    administrators: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    agents: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    active: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'plans'
  });
};
