/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {invoices_expiredInstance, invoices_expiredAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<invoices_expiredInstance, invoices_expiredAttribute>('invoices_expired', {
    customer_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    nfv: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    tfv: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mfv: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'invoices_expired',
    timestamps: false,
    version: false
  });
};
