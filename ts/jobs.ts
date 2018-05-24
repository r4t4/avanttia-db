/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {jobsInstance, jobsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<jobsInstance, jobsAttribute>('jobs', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    queue: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    payload: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    attempts: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    reserved: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    reserved_at: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    available_at: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    created_at: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'jobs',
    timestamps: false,
    version: false
  });
};
