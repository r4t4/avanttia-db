/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {c_impuestoInstance, c_impuestoAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<c_impuestoInstance, c_impuestoAttribute>('c_impuesto', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    c_impuesto: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    retencion: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    traslado: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    local_o_federal: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    entidad_en_la_que_aplica: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'c_impuesto',
    timestamps: false,
    version: false
  });
};
