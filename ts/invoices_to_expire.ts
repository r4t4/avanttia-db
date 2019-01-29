/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {invoices_to_expireInstance, invoices_to_expireAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<invoices_to_expireInstance, invoices_to_expireAttribute>('invoices_to_expire', {
    customer_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    nfpv: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    tfpv: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mfpv: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'invoices_to_expire',
    timestamps: false,
    version: false
  });
};
