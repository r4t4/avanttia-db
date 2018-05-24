/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {receivables_notificationsInstance, receivables_notificationsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<receivables_notificationsInstance, receivables_notificationsAttribute>('receivables_notifications', {
    company_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    rel_fac_edo: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'receivables_notifications',
    timestamps: false,
    version: false
  });
};
