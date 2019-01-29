/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {number_promises_accomplishedInstance, number_promises_accomplishedAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<number_promises_accomplishedInstance, number_promises_accomplishedAttribute>('number_promises_accomplished', {
    customer_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    nppc: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'number_promises_accomplished',
    timestamps: false,
    version: false
  });
};
