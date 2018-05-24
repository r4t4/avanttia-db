/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {credit_paymentsInstance, credit_paymentsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<credit_paymentsInstance, credit_paymentsAttribute>('credit_payments', {
    company_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    rel_cred_pago: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'credit_payments',
    timestamps: false,
    version: false
  });
};
