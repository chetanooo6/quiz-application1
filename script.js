const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Rome'],
    answer: 0
  },
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Earth', 'Saturn', 'Jupiter', 'Uranus'],
    answer: 2
  },
  {
    question: 'Who painted the Mona Lisa?',
    options: ['Leonardo da Vinci', 'Michelangelo', 'Raphael', 'Caravaggio'],
    answer: 0
  }
];

let currentQuestion = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');

function generateQuestion() {
  const question = questions[currentQuestion];
  questionElement.textContent = question.question;
  optionsElement.innerHTML = '';
  question.options.forEach((option, index) => {
    const li = document.createElement('li');
    const input = document.createElement('input');
    input.type = 'radio';
    input.id = `option${index}`;
    input.name = 'option';
    const label = document.createElement('label');
    label.textContent = option;
    label.htmlFor = `option${index}`;
    li.appendChild(input);
    li.appendChild(label);
    optionsElement.appendChild(li);
  });
}

generateQuestion();

submitButton.addEventListener('click', () => {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    const answer = questions[currentQuestion].answer;
    if (selectedOption.id === `option${answer}`) {
      resultElement.textContent = 'Correct!';
    } else {
      resultElement.textContent = 'Incorrect. The correct answer is ' + questions[currentQuestion].options[answer];
    }
    currentQuestion++;
    if (currentQuestion >= questions.length) {
      currentQuestion = 0;
    }
    generateQuestion();
  }
});