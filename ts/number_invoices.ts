/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {number_invoicesInstance, number_invoicesAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<number_invoicesInstance, number_invoicesAttribute>('number_invoices', {
    customer_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    tf: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mtf: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'number_invoices',
    timestamps: false,
    version: false
  });
};
