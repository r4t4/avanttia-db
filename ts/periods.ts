/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {periodsInstance, periodsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<periodsInstance, periodsAttribute>('periods', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    company_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'companies',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    open: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    last_update: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    start: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    end: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    data_status: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    without_allocate: {
      type: "DOUBLE",
      allowNull: false
    },
    recovery_total: {
      type: "DOUBLE",
      allowNull: false
    },
    recovery_expired: {
      type: "DOUBLE",
      allowNull: false
    },
    recovery_expired_last: {
      type: "DOUBLE",
      allowNull: false
    },
    recovery_current: {
      type: "DOUBLE",
      allowNull: false
    },
    recovery_goal: {
      type: "DOUBLE",
      allowNull: false
    },
    recovery_portfolio: {
      type: "DOUBLE",
      allowNull: false
    },
    previous: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    next: {
      type: DataTypes.INTEGER(11),
      allowNull: true
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
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'periods',
    timestamps: false,
    version: false
  });
};
