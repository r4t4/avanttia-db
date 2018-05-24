/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {payment_formatsInstance, payment_formatsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<payment_formatsInstance, payment_formatsAttribute>('payment_formats', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    clave: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    banker: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    operation_number: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    rfc_account_issuer: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    account_issuer: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    pattern_issuer: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    rfc_issuer: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    account_beneficiary: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    pattern_beneficiary: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    type_payment: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    bank_issuer: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    effective_date: {
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
    }
  }, {
    tableName: 'payment_formats',
    timestamps: false,
    version: false
  });
};
