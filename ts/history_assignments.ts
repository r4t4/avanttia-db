/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {history_assignmentsInstance, history_assignmentsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<history_assignmentsInstance, history_assignmentsAttribute>('history_assignments', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    customer_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'customers',
        key: 'id'
      }
    },
    assignment: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    }
  }, {
    tableName: 'history_assignments',
    timestamps: false,
    version: false
  });
};
