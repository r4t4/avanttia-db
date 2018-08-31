/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {conflict_documentsInstance, conflict_documentsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<conflict_documentsInstance, conflict_documentsAttribute>('conflict_documents', {
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
    certificate_number: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    document_type: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    document_data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    document_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    folio: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    series: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    currency: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    customer_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    customer_rfc: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    customer_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'conflict_documents',
    timestamps: false,
    version: false
  });
};
