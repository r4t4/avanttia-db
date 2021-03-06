/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {webservices_logInstance, webservices_logAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<webservices_logInstance, webservices_logAttribute>('webservices_log', {
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
    service: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    method: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    raw_request: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    raw_respose: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    message: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type: {
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
    tableName: 'webservices_log',
    timestamps: false,
    version: false
  });
};
