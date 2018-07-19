/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {c_tipo_factorInstance, c_tipo_factorAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<c_tipo_factorInstance, c_tipo_factorAttribute>('c_tipo_factor', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    c_tipo_factor: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'c_tipo_factor',
    timestamps: false,
    version: false
  });
};
