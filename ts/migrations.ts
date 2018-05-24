/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {migrationsInstance, migrationsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<migrationsInstance, migrationsAttribute>('migrations', {
    migration: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    batch: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'migrations',
    timestamps: false,
    version: false
  });
};
