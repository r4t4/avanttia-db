/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payments', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    bank_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: 'banks',
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
    customer_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: 'customers',
        key: 'id'
      }
    },
    registration_user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    transaction_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: 'transactions',
        key: 'id'
      }
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
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    identification_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    account_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reference: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    reference_avanttia: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    concept: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    payment_concept_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    folio: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    company_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: 'companies',
        key: 'id'
      }
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    pending: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    payment_format_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: 'payment_formats',
        key: 'id'
      }
    },
    currency: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    exchange_rate: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    operation_number: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    foreign_bank_sender: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    foreign_bank_rfc_sender: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    account_sender: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    type_payment_chain: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    certificate: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    chain: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    seal: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    uuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    folio_cfdi: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    serie_cfdi: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    date_stamping: {
      type: DataTypes.DATEONLY,
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
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sync_operation: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    sync_status: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    account_sender_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    document_id_contpaqi: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    sync_error: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    sync_message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    avanttia_stamped: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    exported: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    voucher: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    stamp_tries: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    cancellation_reason: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    replacement_payment_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'payments',
    timestamps: false,
    version: false
  });
};
