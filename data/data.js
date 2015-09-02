var kidsAcademyQuestions = require('./questions/kidsQuestions.js');
var algoAcademyQuestions = require('./questions/algoQuestions.js');
var schoolAcademyQuestions = require('./questions/schoolQuestions.js');
var softwareAcademyQuestions = require('./questions/softwareQuestions.js');



module.exports = {
	kidsAcademyQuestions:kidsAcademyQuestions.init(),
	algoAcademyQuestions:algoAcademyQuestions.init(),
	schoolAcademyQuestions:schoolAcademyQuestions.init(),
	softwareAcademyQuestions:softwareAcademyQuestions.init()
};