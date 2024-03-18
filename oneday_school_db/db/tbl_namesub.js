import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tbl_namesub extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    n_subject: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    n_code: {
      type: DataTypes.STRING(6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_namesub',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "n_subject" },
        ]
      },
    ]
  });
  }
}
