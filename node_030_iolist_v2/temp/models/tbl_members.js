import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tbl_members extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    username: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    password: {
      type: DataTypes.STRING(125),
      allowNull: false
    },
    realname: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tel: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    role: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_members',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "username" },
        ]
      },
    ]
  });
  }
}
