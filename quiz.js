const mathematicsBank = [
    {
        id: 1,
        question: "What is the value of pi (π)?",
        options: ["3.14", "2.71", "1.62", "4.20"],
        answer: "3.14"
      },
      {
        id: 2,
        question: "Solve for x: 2x + 5 = 15",
        options: ["x = 5", "x = 4", "x = 6", "x = 7"],
        answer: "x = 5"
      },
      {
        id: 3,
        question: "What is the square root of 81?",
        options: ["9", "8", "7", "10"],
        answer: "9"
      },
      {
        id: 4,
        question: "What is the value of 5! (factorial of 5)?",
        options: ["120", "24", "720", "5040"],
        answer: "120"
      },
      {
        i: 5,
        question: "Solve for x: 3x - 5 = 16",
        options: ["x = 7", "x = 8", "x = 9", "x = 10"],
        answer: "x = 7"
      },
      {
        id: 6,
        question: "What is the value of log10(100)?",
        options: ["2", "1", "10", "100"],
        answer: "2"
      },
      {
        id: 7,
        question: "Simplify the expression: (3 + 4) * (5 - 2)",
        options: ["21", "9", "12", "18"],
        answer: "21"
      },
      {
        id: 8,
        question: "What is the value of 2^4?",
        options: ["16", "8", "4", "32"],
        answer: "16"
      },
      {
        id: 9,
        question: "Solve for x: 4x - 3 = 21",
        options: ["x = 6", "x = 7", "x = 8", "x = 9"],
        answer: "x = 6"
      },
      {
        id: 10,
        question: "What is the value of sin(45°)?",
        options: ["√2/2", "1", "1/2", "2"],
        answer: "√2/2"
      },
      {
        id: 11,
        question: "Simplify the expression: 2 * (3 + 4) - 5",
        options: ["9", "12", "11", "14"],
        answer: "9"
      },
      {
        "id": 12,
        "question": "What is the value of 3^2?",
        "options": ["9", "6", "3", "12"],
        "answer": "9"
      },
      {
        "id": 13,
        "question": "Solve for x: 5x + 2 = 17",
        "options": ["x = 3", "x = 4", "x = 5", "x = 6"],
        "answer": "x = 3"
      },
      {
        "id": 14,
        "question": "What is the value of cos(60°)?",
        "options": ["1/2", "√3/2", "1", "√2/2"],
        "answer": "1/2"
      },
      {
        "id": 15,
        "question": "Simplify the expression: 2 + 3 * 4",
        "options": ["14", "20", "18", "9"],
        "answer": "14"
      },
      {
        "id": 16,
        "question": "What is the value of log2(8)?",
        "options": ["3", "2", "1", "4"],
        "answer": "3"
      },
      {
        "id": 17,
        "question": "Solve for x: 2(x + 3) = 14",
        "options": ["x = 4", "x = 5", "x = 6", "x = 7"],
        "answer": "x = 4"
      },
      {
        "id": 18,
        "question": "What is the value of 7^0?",
        "options": ["1", "0", "7", "49"],
        "answer": "1"
      },
      {
        "id": 19,
        "question": "Simplify the expression: 8 ÷ 2 + 3 * 2",
        "options": ["13", "14", "16", "10"],
        "answer": "14"
      },
      {
        "id": 20,
        "question": "What is the value of tan(30°)?",
        "options": ["1/√3", "√2/2", "1/2", "√3/3"],
        "answer": "1/√3"
      },
      {
        "id": 21,
        "question": "Solve for x: 6x - 5 = 7x + 3",
        "options": ["x = -8", "x = -2", "x = 1", "x = 8"],
        "answer": "x = -8"
      },
      {
        "id": 22,
        "question": "What is the value of √(16 * 9)?",
        "options": ["12", "8", "4", "6"],
        "answer": "12"
      },
      {
        "id": 23,
        "question": "Simplify the expression: 5 - (2 + 3)",
        "options": ["0", "5", "4", "-5"],
        "answer": "0"
      },
      {
        "id": 24,
        "question": "What is the value of log5(25)?",
        "options": ["1", "2", "5", "0"],
        "answer": "2"
      },
      {
        "id": 25,
        "question": "Solve for x: 3(x + 2) = 2(3x - 1)",
        "options": ["x = 5", "x = 4", "x = 3", "x = 2"],
        "answer": "x = 5"
      },
      
    // Add more questions here...
];


const quizContainer = document.getElementById("quizQuestions");
const resultsContainer = document.getElementById("results");
const answersPreviewContainer = document.getElementById("answersPreview");
const correctAnswersList = document.getElementById("correctAnswersList");
const scoreDisplay = document.getElementById("score");
const totalQuestionsDisplay = document.getElementById("totalQuestions");
const nextBtn = document.getElementById("nextPage");
const prevBtn = document.getElementById("prevPage");
const submitQuiz = document.getElementById('submitQuiz')
let currentPage = 1;
const questionsPerPage = 10;


// shuffle the array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}

// Function to load paginated questions
function loadQuestions(page) {
    quizContainer.innerHTML = ""; // Clear previous questions
    shuffleArray(mathematicsBank)

    let startIndex = (page - 1) * questionsPerPage;
    let endIndex = startIndex + questionsPerPage;
    let paginatedQuestions = mathematicsBank.slice(startIndex, endIndex);

    paginatedQuestions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        const questionText = document.createElement("h3");
        questionText.textContent = `${startIndex + index + 1}. ${q.question}`;
        questionDiv.appendChild(questionText);

        q.options.forEach((option, optIndex) => {
            const optionContainer = document.createElement("div");
            optionContainer.classList.add("option");

            const label = document.createElement("label");
            label.textContent = `${String.fromCharCode(65 + optIndex)} `; // A, B, C, D
            label.style.fontWeight = "bold";

            const radioInput = document.createElement("input");
            radioInput.type = "radio";
            radioInput.name = `question${startIndex + index}`;
            radioInput.value = option;
            radioInput.id = `q${startIndex + index}opt${optIndex}`;

            const optionText = document.createElement("span");
            optionText.textContent = ` ${option}`;

            optionContainer.appendChild(label);
            optionContainer.appendChild(radioInput);
            optionContainer.appendChild(optionText);
            questionDiv.appendChild(optionContainer);
        });

        quizContainer.appendChild(questionDiv);
    });

    // Disable/Enable navigation buttons
    prevBtn.style.display = page === 1 ? "none" : "inline-block";
    nextBtn.style.display = endIndex >= mathematicsBank.length ? "none" : "inline-block";
}

// Handle quiz submission
function handleSubmit() {
    let score = 0;
    mathematicsBank.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });

    scoreDisplay.textContent = score;
    totalQuestionsDisplay.textContent = mathematicsBank.length;
    resultsContainer.style.display = "block";
}

// Pagination event listeners
nextBtn.addEventListener("click", () => {
    currentPage++;
    loadQuestions(currentPage);
});

prevBtn.addEventListener("click", () => {
    currentPage--;
    loadQuestions(currentPage);
});


// Handle quiz submission
function handleSubmit() {
    let score = 0;
    mathematicsBank.forEach((q, index) => {
        const selectedOption = document.querySelector(
            `input[name="question${index}"]:checked`
        );
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });

    // Display score
    scoreDisplay.textContent = score;
    totalQuestionsDisplay.textContent = mathematicsBank.length;
    resultsContainer.style.display = "block";
    quizContainer.style.display = "none";
    nextBtn.style.display = 'none'
    prevBtn.style.display = 'none'
    submitQuiz.style.display = 'none'
    answersPreviewContainer.style.display = "none";

}

// Handle view correct answers
function handleViewAnswers() {
    correctAnswersList.innerHTML = "";
    mathematicsBank.forEach((q, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${q.question} - Correct Answer: ${q.answer}`;
        correctAnswersList.appendChild(li);
    });
    answersPreviewContainer.style.display = "block";
    resultsContainer.style.display = "none";
}

// Event listeners
document.getElementById("submitQuiz").addEventListener("click", handleSubmit);
document.getElementById("viewAnswers").addEventListener("click", handleViewAnswers);


function backToQuiz(){
    location.reload();
}
document.getElementById('onload').addEventListener('click' ,backToQuiz )
// Load the first set of questions on page load
loadQuestions(currentPage);