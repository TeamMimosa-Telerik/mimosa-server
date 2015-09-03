function init(){
	return {
            "question0": {
                "questionText": "What does HTML stand for?",
                "optionOne": "hyper-text-markup-language",
                "optionTwo": "hyper-text-manly-language",
                "optionThree": "high-text-mime-language",
                "optionFour": "None of these",
                "answer": 1,
                "pointsOnGuessing":50
            },
            "question1": {
                "questionText": "How to create a new two-dimensional array in C# ?",
                "optionOne": "var arr = new Array(2)",
                "optionTwo": "int[,] arr = new int[a,b]",
                "optionThree": "int[,] arr = int[a][b]",
                "optionFour":  "Array.newArray(2)",
                "answer": 2,
                "pointsOnGuessing": 100
            },
            "question2": {
                "questionText": "How is the wrapping of an item as an Object called in C#?",
                "optionOne": "Data compression",
                "optionTwo": "Unboxing",
                "optionThree": "Wrapping",
                "optionFour": "Boxing",
                "answer": 4,
                "pointsOnGuessing": 150
            },
            "question3": {
                "questionText": "Can a C# array contain data from different types?",
                "optionOne": "Yes",
                "optionTwo": "No",
                "optionThree": "Depends on data type",
                "optionFour": "Can be calibrated",
                "answer": 2,
                "pointsOnGuessing": 200
            },      
            "question4": {
                "questionText": "What was the original idea of HTML?",
                "optionOne": "Transfer small text data",
                "optionTwo": "Start the Windows 9.8",
                "optionThree": "Make apps readable",
                "optionFour": "To encrypt files",
                "answer": 1,
                "pointsOnGuessing": 250
            },        
            "question5": {
                "questionText": "How can the children of a class able to override the parents methods?",
                "optionOne": "They can not",
                "optionTwo": "Using Regex",
                "optionThree": "Calling methods themselves",
                "optionFour": "Parent method must be \"virtual\"",
                "answer": 4,
                "pointsOnGuessing": 300
            },      
            "question6": {
                "questionText": "What is the correct way to validate data,when introducing it to a class?",
                "optionOne": "It is not needed",
                "optionTwo": "Must be done in constructors",
                "optionThree": "Data validation in properties",
                "optionFour": "Fields should validate input",
                "answer": 3,
                "pointsOnGuessing": 500
            },    
            "question7": {
                "questionText": "Which of the following is not a standard part of the class hierarchy?",
                "optionOne": "Field",
                "optionTwo": "Property",
                "optionThree": "Constructor",
                "optionFour": "Emulator",
                "answer": 4,
                "pointsOnGuessing": 1100
            },    
            "question8": {
                "questionText": "What C# component acts like a List, but prevents adding the element again?",
                "optionOne": "Two-dimensional array",
                "optionTwo": "Hashset",
                "optionThree": "There is no such thing",
                "optionFour": "The \"Object\" class",
                "answer": 2,
                "pointsOnGuessing":1110
            }
	};
}

module.exports = {
  init:init
};