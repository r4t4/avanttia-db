/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {payments_requestInstance, payments_requestAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<payments_requestInstance, payments_requestAttribute>('payments_request', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    customer_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'customers',
        key: 'id'
      }
    },
    company_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'companies',
        key: 'id'
      }
    },
    payment_format_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'payment_formats',
        key: 'id'
      }
    },
    account_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: 'accounts',
        key: 'id'
      }
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    reference: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    concept: {
      type: DataTypes.STRING(255),
      allowNull: true
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
      type: DataTypes.STRING(5),
      allowNull: false
    },
    exchange_rate: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    operation_number: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    sender_bank_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: 'banks',
        key: 'id'
      }
    },
    account_sender: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    type_payment_chain: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    certificate: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    chain: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    seal: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    file: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    reason: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
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
    voucher: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'payments_request',
    timestamps: false,
    version: false
  });
};
