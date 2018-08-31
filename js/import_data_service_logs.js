/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('import_data_service_logs', {
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
    clients: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    receivables: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    imported_payments: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    billed_payments: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    canceled_payments: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    credit_notes: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    exported_payments: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    payments_with_errors: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    import_source: {
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
    }
  }, {
    tableName: 'import_data_service_logs',
    timestamps: false,
    version: false
  });
};
