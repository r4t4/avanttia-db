/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('banxico_exchange_rate', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    currency_code: {
      type: DataTypes.ENUM('CAD','EUR','GBP','JPY','USD','USD_FIX'),
      allowNull: false
    },
    query_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    exchange_rate: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'banxico_exchange_rate',
    timestamps: false,
    version: false
  });
};
