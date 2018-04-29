
const path = require('path');

const Sequelize = require('sequelize');

const sequelize = new Sequelize("sqlite:quiz.sqlite");

sequelize.import(path.join(__dirname,'quiz'));

sequelize.sync()
    .then(function(){
        sequelize.models.quiz.count();
    })
    .then(function (count) {
        if(!count){
            return sequelize.models.quiz.bulkCreate([
                { question: "Capital de Italia", answer: "Roma"},
                { question: "Capital de Francia", answer: "París"},
                { question: "Capital de España", answer: "Madrid"},
                { question: "Capital de Portugal", answer: "Lisboa"}
            ]);
        }
    })
    .then(function(){
        console.log('Data Bases created successfully')
    })
    .catch(function (error) {
        console.log("Error creating data base tables:", error);
        process.exit(1);
    });

module.exports = sequelize;