function init(){
	return {
      "question0": {
                "questionText" : "Pick the answer of:\"typeof(NaN)\"?",
                "optionOne": " NaN",
                "optionTwo": "number",
                "optionThree": "undefined",
                "optionFour": "Reference exception",
                "answer": 2,
                "pointsOnGuessing":50
            },
      "question1": {
                "questionText": "Which is the correct C# syntax?",
                "optionOne": " var a = 4",
                "optionTwo": "int a = 4",
                "optionThree": "int a = 4.5f",
                "optionFour": "p= a(){return 5;}",
                "answer": 2,
                "pointsOnGuessing": 100
            },
      "question2": {
                "questionText": "What is the correct place to link the CSS files?",
                "optionOne": "In the header",
                "optionTwo": "In the body",
                "optionThree": "Both",
                "optionFour": "I do not use it",
                "answer": 1,
                "pointsOnGuessing": 150
            },
      "question3": {
                "questionText": "Why is it important to know Quality coding?",
                "optionOne": "Make code readable",
                "optionTwo": "Make code easy to refactor",
                "optionThree": "First two options",
                "optionFour": "It is quite useless",
                "answer": 3,
                "pointsOnGuessing": 200
            },                
      "question4": {
                "questionText": "What will the C# code \" int.Parse(\"5.1\") \" return?",
                "optionOne": "NullReference Exception",
                "optionThree": "5",
                "optionTwo": "5.1",
                "optionFour": "Format Exception",
                "answer": 4,
                "pointsOnGuessing": 230
            },
      "question5": {
                "questionText": "Why should \"go to\" be avoided?",
                "optionOne": "Because it is deprecated.",
                "optionTwo": "It is considered ineffective",
                "optionThree": "Creates \"Spaghetti Code\"",
                "optionFour": "None of the above",
                "answer": 3,
                "pointsOnGuessing": 270
            },
      "question6": {
                "questionText": "Why is C++ a better option for developing big games,compared to C#?",
                "optionOne": "C# has bad pluggins",
                "optionTwo": "C#is slower due to CLR",
                "optionThree": "C++ isn't a better option",
                "optionFour": "C++ devs are better paid",
                "answer": 2,
                "pointsOnGuessing": 300
            },
      "question7": {
                "questionText": "Can multiple classes be inherited in C#?",
                "optionOne": "Only multiple interface ",
                "optionTwo": "Yes,an unlimited number",
                "optionThree": "You can inherit up to 3",
                "optionFour": "C# does not use classes",
                "answer": 1,
                "pointsOnGuessing": 360
            }
	};
}

module.exports = {
	init:init
};