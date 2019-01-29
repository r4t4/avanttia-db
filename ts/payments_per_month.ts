/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {payments_per_monthInstance, payments_per_monthAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<payments_per_monthInstance, payments_per_monthAttribute>('payments_per_month', {
    customer_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    pm: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mmp: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'payments_per_month',
    timestamps: false,
    version: false
  });
};
