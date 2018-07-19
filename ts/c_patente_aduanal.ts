/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {c_patente_aduanalInstance, c_patente_aduanalAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<c_patente_aduanalInstance, c_patente_aduanalAttribute>('c_patente_aduanal', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    c_patente_aduanal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fecha_inicio_vigencia_patente: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: '2017-01-01'
    },
    fecha_fin_vigencia_patente: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'c_patente_aduanal',
    timestamps: false,
    version: false
  });
};
