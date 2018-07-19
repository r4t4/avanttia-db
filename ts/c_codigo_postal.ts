/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {c_codigo_postalInstance, c_codigo_postalAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<c_codigo_postalInstance, c_codigo_postalAttribute>('c_codigo_postal', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    c_codigo_postal: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    c_estado: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    c_municipio: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    c_localidad: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'c_codigo_postal',
    timestamps: false,
    version: false
  });
};
