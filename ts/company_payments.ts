/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {company_paymentsInstance, company_paymentsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<company_paymentsInstance, company_paymentsAttribute>('company_payments', {
    company_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    payments_applied: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'company_payments',
    timestamps: false,
    version: false
  });
};
