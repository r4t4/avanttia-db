/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {pay_daysInstance, pay_daysAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<pay_daysInstance, pay_daysAttribute>('pay_days', {
    company_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    payDays: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.0000'
    }
  }, {
    tableName: 'pay_days',
    timestamps: false,
    version: false
  });
};
