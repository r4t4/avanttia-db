/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {sat_sync_webhook_logInstance, sat_sync_webhook_logAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<sat_sync_webhook_logInstance, sat_sync_webhook_logAttribute>('sat_sync_webhook_log', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    uuid: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    emisor: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    receptor: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    efecto: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    estado: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    monto: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    fecha_emision: {
      type: DataTypes.DATE,
      allowNull: false
    },
    fecha_cancelacion: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sincronizado: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    efecto_string: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    estado_string: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    processed: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'sat_sync_webhook_log',
    timestamps: false,
    version: false
  });
};
