/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {customers_pending_balanceInstance, customers_pending_balanceAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<customers_pending_balanceInstance, customers_pending_balanceAttribute>('customers_pending_balance', {
    customer_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    total_pending_balance: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    receivables_count: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    expired: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'customers_pending_balance',
    timestamps: false,
    version: false
  });
};
