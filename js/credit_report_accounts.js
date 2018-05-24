/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('credit_report_accounts', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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
    credit_report_customer_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'credit_report_customers',
        key: 'id'
      }
    },
    account: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    account_old: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    responsability_type: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    account_type: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    contract_type: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    currency: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    number_of_payments: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    frecuency_of_payments: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    payment_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    opening_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    last_payment_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    last_purchase_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    close_account_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cut_off_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    maximum_credit: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    current_balance: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    credit_limit: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    outstanding_balance: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    overdue_payments: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    mop_payment_form: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    observation_key: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    first_non_compliance_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    outstanding_neto_balance: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    last_payment_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    term_months: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    original_credit_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    last_payment_due_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    interest: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    mop_payment_interest: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    due_days: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(99),
      allowNull: false
    }
  }, {
    tableName: 'credit_report_accounts',
    timestamps: false,
    version: false
  });
};
