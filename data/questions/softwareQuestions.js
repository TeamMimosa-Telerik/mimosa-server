function init(){
	return{
            "question0": {
                "questionText": "What does \"alt\" value do?",
                "optionOne": "Does nothing,just old syntax ",
                "optionTwo": "Catches the value when parsed",
                "optionThree": "Keeps metadata info",
                "optionFour": "None of these",
                "answer": 2,
                "pointsOnGuessing":250
            },
            "question1": {
                "questionText": "What will the JS Code  return \"var a = 5; (function(a) { return a;}())\" ?",
                "optionOne": "5",
                "optionTwo": "a",
                "optionThree": "\"5\"",
                "optionFour":  "undefined",
                "answer": 4,
                "pointsOnGuessing": 300
            },
            "question2": {
                "questionText": "What CSS version is Canvas being supported in ?",
                "optionOne": "1",
                "optionTwo": "2",
                "optionThree": "3",
                "optionFour": "4",
                "answer": 3,
                "pointsOnGuessing": 350
            },
            "question3": {
                "questionText": "Why is StringBuilder faster than normal string concatenation ?",
                "optionOne": "It is the same",
                "optionTwo": "StringBuilder is made  faster",
                "optionThree": "Stringbuilder isn\'t immutable",
                "optionFour": "none of these",
                "answer": 3,
                "pointsOnGuessing": 200
            },      
            "question4": {
                "questionText": "HTML and CSS fall into the category of ... ?",
                "optionOne": "Backend",
                "optionTwo": "Frontend",
                "optionThree": "Project management",
                "optionFour": "All of them",
                "answer": 2,
                "pointsOnGuessing": 250
            },        
            "question5": {
                "questionText": "what is the Mother class of all classes in C# ?",
                "optionOne": "Object",
                "optionTwo": "Init",
                "optionThree": "String",
                "optionFour": "Array",
                "answer": 1,
                "pointsOnGuessing": 300
            },        
            "question6": {
                "questionText": "What do media queries do ?",
                "optionOne": "Highlights error sections in code",
                "optionTwo": "Differs elements in resolutions",
                "optionThree": "Makes IE7 compatible with CSS3",
                "optionFour" : "None of the above",
                "answer": 2,
                "pointsOnGuessing": 500
            },    
            "question7": {
                "questionText": "What are pollyfillers used for?", 
                "optionOne": "Making JS run faster in browsers",
                "optionTwo": "Are not used today-depricated",
                "optionThree": "Queries work in older browsers",
                "optionFour": "Hides sensitive data from url",
                "answer": 3,
                "pointsOnGuessing": 570
            },   
            "question8": {
                "questionText": "What will the following C# code return \"int[] k = new int[2]; Console.Write(k[3]); \" ?",
                "optionOne": "IndexOutOfRangeException",
                "optionTwo": "FormatException",
                "optionThree": "NullReferenceException",
                "optionFour": "NullException",
                "answer": 1,
                "pointsOnGuessing": 670
            }
	};
}

module.exports = {
  init:init
};