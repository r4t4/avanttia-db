/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {payments_receivableInstance, payments_receivableAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<payments_receivableInstance, payments_receivableAttribute>('payments_receivable', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    payment_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: 'payments',
        key: 'id'
      }
    },
    credit_note_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: 'credit_notes',
        key: 'id'
      }
    },
    receivable_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'receivables',
        key: 'id'
      }
    },
    folio: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    previous_balance: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.0000'
    },
    amount_without_convertion: {
      type: "DOUBLE",
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    balance: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.0000'
    },
    currency: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    exchange_rate: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '1.0000'
    },
    payment_number: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
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
    tableName: 'payments_receivable',
    timestamps: false,
    version: false
  });
};
