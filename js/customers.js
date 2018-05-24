/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customers', {
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
    user_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rfc: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    user_id_conptaqi: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    customer_key_contpaqi: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    review_days: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    credit_days: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    identifier: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    credit: {
      type: "DOUBLE",
      allowNull: true
    },
    balance: {
      type: "DOUBLE",
      allowNull: false
    },
    credit_used: {
      type: "DOUBLE",
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    number: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    internal_number: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    zip_code: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    suburb: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(255),
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
    credit_report_company_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: 'credit_report_companies',
        key: 'id'
      }
    },
    credit_report_customer_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: 'credit_report_customers',
        key: 'id'
      }
    },
    email1: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email2: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email3: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email4: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'customers',
    timestamps: false,
    version: false
  });
};
