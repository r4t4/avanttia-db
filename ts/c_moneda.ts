/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {c_monedaInstance, c_monedaAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<c_monedaInstance, c_monedaAttribute>('c_moneda', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    c_moneda: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    decimales: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    porcentaje_variacion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fecha_inicio_vigencia: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: '2017-08-14'
    },
    fecha_fin_vigencia: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'c_moneda',
    timestamps: false,
    version: false
  });
};
