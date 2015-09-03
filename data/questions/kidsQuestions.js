function init(){
	return {
      "question0": {
                "questionText": "What type of programming language is C#?",
                "optionOne": "type-less",
                "optionTwo": "strongly typed",
                "optionThree": "can be both(needs to be set up in advance)",
                "optionFour": "None of these",
                "answer": 2,
                "pointsOnGuessing":50
            },
      "question1": {
                "questionText": "Pick the correct Javascript syntax",
                "optionOne": "var k == 4",        
                "optionTwo": "var k = 64.0f", 
                "optionThree": "var k = 5.34",
                "optionFour": "None of these",
                "answer": 3,
                "pointsOnGuessing":70
      },
      "question2": {
                "questionText": "Which IDE provides Visual Studio?",
                "optionOne":".NET",  
                "optionTwo": "PHP",
                "optionThree":"Eclipse",
                "optionFour":"Opera",
                "answer": 1,
                "pointsOnGuessing": 100
            },
      "question3": {
                "questionText": "Is JavaScript case sensitive?",
                "optionOne": "Yes",
                "optionTwo": "No",
                "optionThree": "Can be configured for both",
                "optionFour": "Depends on the installed plugins",
                "answer": 1,
                "pointsOnGuessing": 150
            },        
      "question4": {
                "questionText": "Which answer contains ONLY invalid access modifiers?",
                "optionOne": "internal,protected",
                "optionTwo": "protected,modified",
                "optionThree": "modified,global",
                "optionFour": "protected-internal,private",
                "answer": 3,
                "pointsOnGuessing": 200
            },
      "question5": {
                "questionText": "Purpose of \"finally\" block?",
                "optionOne": "Code will always execute",
                "optionTwo": "Prevents the program stop",
                "optionThree": "It provides hidden code",
                "optionFour": "Allows users to see errors",
                "answer": 1,
                "pointsOnGuessing": 1200
            },
      "question6": {
                "questionText": "What does the .NET CLR do for the program?",
                "optionOne": "Slows it down a bit",
                "optionTwo": "Garbage disposal",
                "optionThree": "Makes the job easier",
                "optionFour": "All of them",
                "answer": 4,
                "pointsOnGuessing": 1300
            },
      "question7": {
                "questionText": "What purpose does Regex serve?",
                "optionOne": "Data validation",
                "optionTwo": "Provides entire stack trace",
                "optionThree": "Data encapsulation",
                "optionFour": "Prevents object inheritance",
                "answer": 1,
                "pointsOnGuessing": 1400
            }
	};
}

module.exports = {
  init:init
};