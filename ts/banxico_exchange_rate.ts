/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {banxico_exchange_rateInstance, banxico_exchange_rateAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<banxico_exchange_rateInstance, banxico_exchange_rateAttribute>('banxico_exchange_rate', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    currency_code: {
      type: DataTypes.ENUM('CAD','EUR','GBP','JPY','USD','USD_FIX'),
      allowNull: false
    },
    query_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    exchange_rate: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'banxico_exchange_rate',
    timestamps: false,
    version: false
  });
};
