/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {credit_notesInstance, credit_notesAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<credit_notesInstance, credit_notesAttribute>('credit_notes', {
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
    customer_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'customers',
        key: 'id'
      }
    },
    uuid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    document_id_contpaqi: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    folio: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    serie: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    creation_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    pending: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    currency: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    exchange_rate: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    has_file_xml: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    has_file_pdf: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    reason_id: {
      type: DataTypes.INTEGER(11),
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
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'credit_notes'
  });
};
