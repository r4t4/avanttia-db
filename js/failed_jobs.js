/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('failed_jobs', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    connection: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    queue: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    payload: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    failed_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'failed_jobs',
    timestamps: false,
    version: false
  });
};
