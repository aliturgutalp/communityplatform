'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    name: {
      type: DataTypes.STRING,
      validate: {
          notEmpty: true
      }
    },

    type: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: true
        }
    },

    isPublic: {
        type: DataTypes.BOOLEAN,
    }
  }, {});
  Group.associate = function(models) {
    // associations can be defined here
  };
  return Group;
};