/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {credit_report_customersInstance, credit_report_customersAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<credit_report_customersInstance, credit_report_customersAttribute>('credit_report_customers', {
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
    company_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'companies',
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
    prefix_title: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    name_1: {
      type: DataTypes.STRING(26),
      allowNull: false
    },
    name_2: {
      type: DataTypes.STRING(26),
      allowNull: false
    },
    surname_1: {
      type: DataTypes.STRING(26),
      allowNull: false
    },
    surname_2: {
      type: DataTypes.STRING(26),
      allowNull: false
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    nationality: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    marital_status: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    sex: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    death_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    death_indicator: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    tableName: 'credit_report_customers',
    timestamps: false,
    version: false
  });
};
