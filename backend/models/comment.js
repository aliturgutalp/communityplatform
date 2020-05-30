"use strict";
module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define(
        "Comment",
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

            announcement_id: {
                type: DataTypes.INTEGER,
                validate: {
                    notEmpty: true
                }
            }
            //timestamps?
        },
        {}
    );
    Comment.associate = function(models) {
        Comment.hasOne(models.User, { foreignKey: "user_id", as: "User", targetKey: "id" });
        Comment.hasOne(models.Announcement, { foreignKey: "announcement_id", as: "Announcement", targetKey: "id" });
    };
    return Comment;
};
