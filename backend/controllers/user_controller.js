// import { JSON } from "sequelize/types";

const db = require("../models");
//const bcrypt = require("bcryptjs");
//const crypto = require("crypto");

const User = db.User;
const UserGroup = db.UserGroup;
const Comment = db.Comment;
const Announcement = db.Announcement;

//const saltRounds = 10;

exports.create = function(req, res) {
    const { email, firstName, lastName, password, department } = req.body;

    //see if that email already exists.
    User.findOne({
        where: { email: email }
    }).then(users => {
        console.log("searched the database");
        if (users) {
            res.status(500).send({
                msg: "This e-mail has already been registered."
            });
        } else {
            console.log("no email clashes with existing data");

            //var salt = bcrypt.genSaltSync(saltRounds);
            //var hashedpass = bcrypt.hashSync(password, salt);

            User.create({
                //don't even think about shortening this, it caused so much stupid shit that I need to make it 200% clear
                email: email,
                firstName: firstName,
                lastName: lastName,
                password: password,
                department: department
            })
            .then(() => {
                res.send({
                msg: "User successfully created."
                });
            })
            .catch(e => {
                console.log(e);
                res.status(400).send({
                    msg: "Something bad happened."
                });
            });
        }
    });
};

exports.login = function(req, res) {
    var email = req.body.email;
    var password = req.body.password;
    User.findOne({
        where: { email: email }
    }).then(users => {
        if(users.password == password){
            res.status(200).send({
                msg: "Logged in successfully.",
                id: users.id
                // token: token
            });
        }else {
            res.status(500).send({
                msg: "E-mail and password does not match."
            });
        }
    }).catch(e => {
        console.log(e);
        res.status(400).send({
            msg: "Something bad happened."
        });
    });
};

exports.getUserGroups = function(req, res) {
    var user_id = req.params.userId;
    let userGroups = UserGroup.findAll({
        where: { user_id: user_id }
    });
    if(userGroups){
        res.status(200).send({
            id: req.user.id,
            relations: userGroups
        });
    } else {
        res.status(400).send({
            msg: "No relation found."
        });
    }
};

exports.getUserAnnouncements = function(req, res) {
    var user_id = req.params.userId;
    let userAnnouncements = Announcement.findAll({
        where: { user_id: user_id }
    });
    if(userAnnouncements){
        res.status(200).send({
            id: req.user.id,
            announcements: userAnnouncements
        });
    } else {
        res.status(400).send({
            msg: "No announcement found."
        });
    }
};

exports.getUserComments = function(req, res) {
    var user_id = req.params.userId;
    let userComments = Comment.findAll({
        where: { user_id: user_id }
    });
    if(userComments){
        res.status(200).send({
            id: req.user.id,
            comments: userComments
        });
    } else {
        res.status(400).send({
            msg: "No comment found."
        });
    }
};

exports.updateProfile = async function(req, res) {
    const { firstName, lastName, department, roles, courses } = req.body;
    var user_id = req.user.id;

    req.user.updateAttributes({
        firstName: firstName,
        lastName: lastName,
        department: department,
        roles: JSON.stringify(roles),
        courses: JSON.stringify(courses)
    }).then(() => {
        res.send({
            msg: "User successfully updated."
        });
    })
    .catch(e => {
        console.log(e);
        res.status(400).send({
            msg: "Something bad happened."
        });
    });
    
};


exports.getAllUsers = async function(req, res) {

    var users = await User.findAll({});

    if (freelancers) {
        res.status(200).send({
            users
        });
    } else {
        res.status(400).send({
            msg: "No user found."
        });
    }
};

