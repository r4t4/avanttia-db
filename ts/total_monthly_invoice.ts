/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {total_monthly_invoiceInstance, total_monthly_invoiceAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<total_monthly_invoiceInstance, total_monthly_invoiceAttribute>('total_monthly_invoice', {
    customer_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    mtmf: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mmf: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'total_monthly_invoice',
    timestamps: false,
    version: false
  });
};
