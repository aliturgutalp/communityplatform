"use strict";
module.exports = (sequelize, DataTypes) => {
    const Announcement = sequelize.define(
        "Announcement",
        {
            user_id: {
                type: DataTypes.INTEGER,
                validate: {
                    notEmpty: true
                }
            },

            text: {
                type: DataTypes.TEXT,
                validate: {
                    notEmpty: true
                }
            },

            group_id: {
                type: DataTypes.INTEGER,
                validate: {
                    notEmpty: true
                }
            }
            //timestamps?
        },
        {}
    );
    Announcement.associate = function(models) {
        Announcement.hasOne(models.User, { foreignKey: "user_id", as: "User", targetKey: "id" });
        Announcement.hasOne(models.Group, { foreignKey: "group_id", as: "Group", targetKey: "id" });
    };
    return Announcement;
};
