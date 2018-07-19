/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {c_clave_prod_servInstance, c_clave_prod_servAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<c_clave_prod_servInstance, c_clave_prod_servAttribute>('c_clave_prod_serv', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    c_clave_prod_serv: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    incluir_iva_traslado: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    incluir_ieps_traslado: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    complemento_que_debe_incluir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    palabras_similares: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fecha_inicio_vigencia: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: '2018-02-08'
    },
    fecha_fin_vigencia: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'c_clave_prod_serv',
    timestamps: false,
    version: false
  });
};
