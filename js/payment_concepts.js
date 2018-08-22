/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment_concepts', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    company_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    concept_id_contpaqi: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    concept_key_contpaqi: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    document_type: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    description: {
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
    contpaqi_version: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    enabled: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'payment_concepts',
    timestamps: false,
    version: false
  });
};
