import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tbl_student extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    s_code: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true
    },
    s_name: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    s_dept: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    s_grade: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    s_tel: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    s_address: {
      type: DataTypes.STRING(125),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_student',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "s_code" },
        ]
      },
    ]
  });
  }
}
