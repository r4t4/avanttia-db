/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('credit_report_employments', {
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
    company_name: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    address_1: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    address_2: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    suburb: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    zip_code: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    municipality: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    county: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    phone_ext: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    fax: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    job: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    hiring_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    currency: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    monthly_salary: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    last_employment_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    employment_verification_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    tableName: 'credit_report_employments',
    timestamps: false,
    version: false
  });
};
