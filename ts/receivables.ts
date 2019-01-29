/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {receivablesInstance, receivablesAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<receivablesInstance, receivablesAttribute>('receivables', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    company_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: 'companies',
        key: 'id'
      }
    },
    certificate_number: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    reference_avanttia: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    customer_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'customers',
        key: 'id'
      }
    },
    payment_method_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: 'payment_methods',
        key: 'id'
      }
    },
    payment_format_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: 'payment_formats',
        key: 'id'
      }
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    expiration_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    paid_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    has_file_xml: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    has_file_pdf: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    certificate: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sub_total: {
      type: "DOUBLE",
      allowNull: false
    },
    currency: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    seal: {
      type: DataTypes.TEXT,
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
    document_id_contpaqi: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    total_paid: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    init_pending_balance: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    pending_balance: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    is_paid: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    is_sales_note: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    interest_percent: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    deleted_at: {
      type: DataTypes.DATE,
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
    document_id_feraz: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    exchange_rate: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    concept_key_contpaqi: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    force_sync: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'receivables',
    timestamps: false,
    version: false
  });
};
