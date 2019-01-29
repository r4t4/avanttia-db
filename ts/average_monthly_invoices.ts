/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {average_monthly_invoicesInstance, average_monthly_invoicesAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<average_monthly_invoicesInstance, average_monthly_invoicesAttribute>('average_monthly_invoices', {
    customer_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    pfm: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'average_monthly_invoices',
    timestamps: false,
    version: false
  });
};
