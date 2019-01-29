/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {longest_invoice_yearsInstance, longest_invoice_yearsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<longest_invoice_yearsInstance, longest_invoice_yearsAttribute>('longest_invoice_years', {
    customer_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    fla: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'longest_invoice_years',
    timestamps: false,
    version: false
  });
};
