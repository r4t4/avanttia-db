/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {c_tipo_relacionInstance, c_tipo_relacionAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<c_tipo_relacionInstance, c_tipo_relacionAttribute>('c_tipo_relacion', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    c_tipo_relacion: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    fecha_inicio_vigencia: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: '2017-01-01'
    },
    fecha_fin_vigencia: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'c_tipo_relacion',
    timestamps: false,
    version: false
  });
};
