/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {average_monthly_paymentInstance, average_monthly_paymentAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<average_monthly_paymentInstance, average_monthly_paymentAttribute>('average_monthly_payment', {
    customer_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ppm: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'average_monthly_payment',
    timestamps: false,
    version: false
  });
};
