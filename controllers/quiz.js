
const Sequelize = require("sequelize");
const sequelize = require("../models"); // deberia ser const {models}

exports.index = function(req,res,next){
    sequelize.models.quiz.findAll()
        .then(function (quizzes) {
            res.render('quizzes', {quizzes : quizzes})
        })
        .catch(function (error) { next(error)});
};
