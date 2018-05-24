/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('credit_report_endorses', {
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
    credit_report_company_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'credit_report_companies',
        key: 'id'
      }
    },
    client_type: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    curp: {
      type: DataTypes.STRING(18),
      allowNull: false
    },
    dun_number: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    trade_name: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    name_1: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    name_2: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    surname_1: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    surname_2: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    nationality: {
      type: DataTypes.STRING(2),
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
      type: DataTypes.STRING(60),
      allowNull: false
    },
    zip_code: {
      type: DataTypes.STRING(10),
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
    foreign_state: {
      type: DataTypes.STRING(40),
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
    }
  }, {
    tableName: 'credit_report_endorses',
    timestamps: false,
    version: false
  });
};
