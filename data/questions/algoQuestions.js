function init(){
	return {
           "question0":{
              "questionText":"What will the following code return:\"typeof(NaN)\"?",
              "optionOne":" NaN",
              "optionTwo":"number",
              "optionThree":"undefined",
              "optionFour":"Reference exception",
              "answer":2,
              "pointsOnGuessing":50
           },
           "question1":{
              "questionText":"Which is the correct C# syntax?",
              "optionOne":" var a = 4",
              "optionTwo":"int a = 4",
              "optionThree":"int a = 4.5f",
              "optionFour":"var p = function(){return a=5;}",
              "answer":2,
              "pointsOnGuessing":100
           },
           "question2":{
              "questionText":"What is the correct place to link the CSS files?",
              "optionOne":"In the header",
              "optionTwo":"In the body",
              "optionThree":"Both",
              "optionFour":"I do not use it",
              "answer":1,
              "pointsOnGuessing":150
           },
           "question3":{
              "questionText":"Why is it important to know Quality coding?",
              "optionOne":"Make the code readable",
              "optionTwo":"Make the code easy to refactor",
              "optionThree":"Both",
              "optionFour":"It is quite useless actually",
              "answer":3,
              "pointsOnGuessing":200
           },
           "question4":{
              "questionText":"What will the C# code \"int.Parse(\"5.1\")\" return?",
              "optionOne":"NullReference Exception",
              "optionThree":"5",
              "optionTwo":"5.1",
              "optionFour":"Format Exception",
              "answer":4,
              "pointsOnGuessing":230
           },
           "question5":{
              "questionText":"Why should \"go to\" be avoided?",
              "optionOne":"Because it is deprecated.",
              "optionTwo":"It is considered ineffective in new versions of .NET",
              "optionThree":"Creates \"Spaghetti Code\"",
              "optionFour":"None of the above",
              "answer":3,
              "pointsOnGuessing":270
           },
           "question6":{
              "questionText":"Why is C++ a better option for developing big games,compared to C#?",
              "optionOne":"C# has a slower performance due to worse data transitions",
              "optionTwo":"C# has a slower performance because of the CLR",
              "optionThree":"Actually C++ is not the better option",
              "optionFour":"C++ game developers are better paid and prefer that language",
              "answer":2,
              "pointsOnGuessing":300
           },
           "question7":{
              "questionText":"Can multiple classes be inherited in C#?",
              "optionOne":"No,only multiple interface inheritance is possible",
              "optionTwo":"Yes,an unlimited number of classes can be inherited",
              "optionThree":"You can inherit up to 3 classes maximum",
              "optionFour":"C# does not work with objects(like regular C)",
              "answer":1,
              "pointsOnGuessing":360
           }
	};
}

module.exports = {
	init:init
};