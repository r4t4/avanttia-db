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
      type: DataTypes.STRING(5),
      allowNull: false
    },
    exchange_rate: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    when: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    tableName: 'banxico_exchange_rate',
    timestamps: false,
    version: false
  });
};
