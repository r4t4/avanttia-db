/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {sync_logInstance, sync_logAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<sync_logInstance, sync_logAttribute>('sync_log', {
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
    user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    customers: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    invoices: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    credit_notes: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    date_import: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    date_started: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_finished: {
      type: DataTypes.DATE,
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
    tableName: 'sync_log'
  });
};
