const questions = [
  {
    category: "Science",
    question: "What is the chemical symbol for gold?",
    choices: ["Au", "Ag", "Fe"],
    answer: "Au"
  },
  {
    category: "Geography",
    question: "What is the capital of Japan?",
    choices: ["Seoul", "Tokyo", "Beijing"],
    answer: "Tokyo"
  },
  {
    category: "History",
    question: "Who was the first president of the United States?",
    choices: ["Abraham Lincoln", "George Washington", "Thomas Jefferson"],
    answer: "George Washington"
  },
  {
    category: "Math",
    question: "What is 8 multiplied by 7?",
    choices: ["54", "56", "64"],
    answer: "56"
  },
  {
    category: "Technology",
    question: "What does CPU stand for?",
    choices: ["Central Processing Unit", "Computer Personal Unit", "Central Power Utility"],
    answer: "Central Processing Unit"
  }
];

function getRandomQuestion(questions) {
  return questions[Math.floor(Math.random() * questions.length)];
}

function getRandomComputerChoice(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}