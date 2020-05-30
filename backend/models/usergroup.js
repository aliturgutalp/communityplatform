'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserGroup = sequelize.define('UserGroup', {
    user_id: {
      type: DataTypes.INTEGER,
      validate: {
          notEmpty: true
      }
    },
    group_id: {
      type: DataTypes.INTEGER,
      validate: {
          notEmpty: true
      }
    },
    role: {
      type: DataTypes.ENUM("Member", "Admin","Authorized"),
      validate: {
          notEmpty: true
      }
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
  }
  }, {});
  UserGroup.associate = function(models) {
    UserGroup.hasOne(models.User, { foreignKey: "user_id", as: "User", targetKey: "id" });
    UserGroup.hasOne(models.Group, { foreignKey: "group_id", as: "Group", targetKey: "id" });
  };
  return UserGroup;
};