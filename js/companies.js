/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('companies', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    creator_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    licence_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: 'licences',
        key: 'id'
      }
    },
    erp_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: 'erps',
        key: 'id'
      }
    },
    trade_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    rfc: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ciec: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    firstLoad: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    is_demo: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    dt_refresh: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dt_refresh_credit_notes: {
      type: DataTypes.DATE,
      allowNull: false
    },
    credit_days: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    recovery: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    type_recovery: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    suburb: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    municipality: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    zip_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bank: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    beneficiary: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    account_bank: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    account_clabe: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    enable_stp: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    account_clabe_avanttia: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    promise_limit: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    current_folio: {
      type: DataTypes.STRING(255),
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
    buro_name: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    buro_short_name: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    buro_short_name_old: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    buro_member_code: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    buro_member_code_old: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    buro_format_type: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    id_paybook_user: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sync_sat: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    id_paybook_credential: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_bank_sync_enabled: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    economic_sector_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: 'economic_sectors',
        key: 'id'
      }
    },
    comercial_activity_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: 'comercial_activities',
        key: 'id'
      }
    },
    notifications_limit: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '100'
    },
    has_logo: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    filename_logo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    documents_logo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    importation_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'companies',
    timestamps: false,
    version: false
  });
};
