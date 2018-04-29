//Modelo simulado con arrays
/*const quizzes = [
    {
        id: 1,
        question:"Capital of Italy",
        answer:"Rome"
    },
    {
        id: 2,
        question:"Capital of France",
        answer:"Paris"
    },
    {
        id: 3,
        question:"Capital of Spain",
        answer:"Madrid"
    },
    {
        id: 2,
        question:"Capital of Portugal",
        answer:"Lisbon"
    }];

exports.findAll = function(){
  return quizzes;
};*/
// Definición para BBDD
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('quiz',
        {
            question: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "Question must not be empty"}}
            },
            answer: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "Answer must not be empty"}}
            }

        });
};