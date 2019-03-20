/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('licenses_contpaqi', {
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
    license: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    user: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    sync_end: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sync_start: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    sync: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    sync_enabled: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    in_progress: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    force_sync_init_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    force_sync_end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    last_sync_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'licenses_contpaqi',
    timestamps: false,
    version: false
  });
};
