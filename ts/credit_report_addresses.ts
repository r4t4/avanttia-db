/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {credit_report_addressesInstance, credit_report_addressesAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<credit_report_addressesInstance, credit_report_addressesAttribute>('credit_report_addresses', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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
    credit_report_customer_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'credit_report_customers',
        key: 'id'
      }
    },
    address_1: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    address_2: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    suburb: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    zip_code: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    municipality: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    county: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(11),
      allowNull: false
    }
  }, {
    tableName: 'credit_report_addresses',
    timestamps: false,
    version: false
  });
};
