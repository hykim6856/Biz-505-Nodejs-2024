import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tbl_test extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    t_scode: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tbl_student',
        key: 's_code'
      }
    },
    t_subject: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tbl_namesub',
        key: 'n_subject'
      }
    },
    t_score: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_test',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "t_scode" },
          { name: "t_subject" },
        ]
      },
      {
        name: "t_subject",
        using: "BTREE",
        fields: [
          { name: "t_subject" },
        ]
      },
    ]
  });
  }
}
