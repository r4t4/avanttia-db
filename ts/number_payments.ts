/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {number_paymentsInstance, number_paymentsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<number_paymentsInstance, number_paymentsAttribute>('number_payments', {
    customer_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    tp: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mtp: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'number_payments',
    timestamps: false,
    version: false
  });
};
