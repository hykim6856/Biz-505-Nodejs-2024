import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _tbl_namesub from "./tbl_namesub.js";
import _tbl_student from "./tbl_student.js";
import _tbl_test from "./tbl_test.js";

export default function initModels(sequelize) {
  const tbl_namesub = _tbl_namesub.init(sequelize, DataTypes);
  const tbl_student = _tbl_student.init(sequelize, DataTypes);
  const tbl_test = _tbl_test.init(sequelize, DataTypes);

  tbl_namesub.belongsToMany(tbl_student, {
    as: "t_scode_tbl_students",
    through: tbl_test,
    foreignKey: "t_subject",
    otherKey: "t_scode",
  });
  tbl_student.belongsToMany(tbl_namesub, {
    as: "t_subject_tbl_namesubs",
    through: tbl_test,
    foreignKey: "t_scode",
    otherKey: "t_subject",
  });
  tbl_test.belongsTo(tbl_namesub, {
    as: "t_subject_tbl_namesub",
    foreignKey: "t_subject",
  });
  tbl_namesub.hasMany(tbl_test, {
    as: "tbl_tests",
    foreignKey: "t_subject",
  });
  tbl_test.belongsTo(tbl_student, {
    as: "t_scode_tbl_student",
    foreignKey: "t_scode",
  });
  tbl_student.hasMany(tbl_test, {
    as: "tbl_tests",
    foreignKey: "t_scode",
  });

  return {
    tbl_namesub,
    tbl_student,
    tbl_test,
  };
}
