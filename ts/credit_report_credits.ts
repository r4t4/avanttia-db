/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {credit_report_creditsInstance, credit_report_creditsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<credit_report_creditsInstance, credit_report_creditsAttribute>('credit_report_credits', {
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
    credit_report_company_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'credit_report_companies',
        key: 'id'
      }
    },
    credit_experiences: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    contract_number: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    old_contract_number: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    opening_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    term_months: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    credit_type: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    initial_balance: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    currency: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    number_of_payments: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    frecuency_of_payments: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    payment_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    last_payment_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    restructuring_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    payment_to_close: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    settlement_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    release_of_debt: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    payment_in_king: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    brokenness_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    observation_key: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    especial: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    first_non_compliance_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    outstanding_balance: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    maximum_credit: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    due_days: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    balance: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'credit_report_credits',
    timestamps: false,
    version: false
  });
};
