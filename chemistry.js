const chemistryBank = [
  {
    id: 1,
    question: "Which of the following is a noble gas?",
    options: ["Oxygen", "Nitrogen", "Helium", "Chlorine"],
    answer: "Helium",
  },
  {
    id: 2,
    question: "The atomic number of an element is determined by the number of?",
    options: ["Neutrons", "Electrons", "Protons", "Nucleons"],
    answer: "Protons",
  },
  {
    id: 3,
    question: "Which of the following is a chemical change?",
    options: ["Melting of ice", "Evaporation of water", "Rusting of iron", "Breaking of glass"],
    answer: "Rusting of iron",
  },
  {
    id: 4,
    question: "The element with the highest electronegativity is?",
    options: ["Oxygen", "Fluorine", "Chlorine", "Neon"],
    answer: "Fluorine",
  },
  {
    id: 5,
    question: "Which of these is a strong acid?",
    options: ["H₂O", "HCl", "NaOH", "NH₃"],
    answer: "HCl",
  },
  {
    id: 6,
    question: "Which of the following is NOT a mixture?",
    options: ["Air", "Milk", "Water", "Blood"],
    answer: "Water",
  },
  {
    id: 7,
    question: "The process by which a gas changes directly into a solid is called?",
    options: ["Evaporation", "Condensation", "Sublimation", "Deposition"],
    answer: "Deposition",
  },
  {
    id: 8,
    question: "Which of the following substances is an alkali?",
    options: ["HCl", "NaOH", "H₂SO₄", "CO₂"],
    answer: "NaOH",
  },
  {
    id: 9,
    question: "The simplest form of matter that cannot be broken down by chemical means is?",
    options: ["Compound", "Mixture", "Element", "Solution"],
    answer: "Element",
  },
  {
    id: 10,
    question: "Which of the following is an example of a covalent compound?",
    options: ["NaCl", "H₂O", "MgO", "CaCl₂"],
    answer: "H₂O",
  },
  {
    id: 11,
    question: "What is the oxidation state of sulfur in H₂SO₄?",
    options: ["+2", "+4", "+6", "-2"],
    answer: "+6",
  },
  {
    id: 12,
    question: "Which gas is used in the Haber process to produce ammonia?",
    options: ["Oxygen", "Nitrogen", "Hydrogen", "Carbon dioxide"],
    answer: "Nitrogen",
  },
  {
    id: 13,
    question: "What type of reaction occurs when a metal reacts with an acid?",
    options: ["Neutralization", "Redox", "Precipitation", "Decomposition"],
    answer: "Redox",
  },
  {
    id: 14,
    question: "What is the formula of calcium carbonate?",
    options: ["CaCO₃", "CaO", "CaCl₂", "Ca(OH)₂"],
    answer: "CaCO₃",
  },
  {
    id: 15,
    question: "Which of the following is an example of an exothermic reaction?",
    options: ["Melting ice", "Boiling water", "Burning wood", "Evaporating alcohol"],
    answer: "Burning wood",
  },
  {
    id: 16,
    question: "Which of these elements is a halogen?",
    options: ["Oxygen", "Nitrogen", "Fluorine", "Neon"],
    answer: "Fluorine",
  },
  {
    id: 17,
    question: "What is the common name for CH₄?",
    options: ["Ethanol", "Methane", "Ethene", "Propane"],
    answer: "Methane",
  },
  {
    id: 18,
    question: "Which of the following is a non-metal?",
    options: ["Sodium", "Iron", "Sulfur", "Magnesium"],
    answer: "Sulfur",
  },
  {
    id: 19,
    question: "What type of bonding is present in sodium chloride (NaCl)?",
    options: ["Covalent", "Ionic", "Metallic", "Hydrogen"],
    answer: "Ionic",
  },
  {
    id: 20,
    question: "Which gas turns limewater milky?",
    options: ["Oxygen", "Hydrogen", "Carbon dioxide", "Nitrogen"],
    answer: "Carbon dioxide",
  },
  {
    id: 21,
    question: "Which law states that mass is neither created nor destroyed in a chemical reaction?",
    options: [
      "Law of Multiple Proportions",
      "Law of Conservation of Mass",
      "Boyle's Law",
      "Dalton's Law"
    ],
    answer: "Law of Conservation of Mass",
  },
  {
    id: 22,
    question: "Which gas is the most abundant in the Earth's atmosphere?",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
    answer: "Nitrogen",
  },
  {
    id: 23,
    question: "Which of the following is NOT a fossil fuel?",
    options: ["Coal", "Natural gas", "Petroleum", "Biogas"],
    answer: "Biogas",
  },
  {
    id: 24,
    question: "Which process is used to separate a mixture of two immiscible liquids?",
    options: ["Distillation", "Filtration", "Evaporation", "Separating funnel"],
    answer: "Separating funnel",
  },
  {
    id: 25,
    question: "Which metal is extracted from bauxite?",
    options: ["Copper", "Iron", "Aluminum", "Zinc"],
    answer: "Aluminum",
  },
  {
    id: 26,
    question: "What is the pH of pure water?",
    options: ["1", "7", "14", "5"],
    answer: "7",
  },
  {
    id: 27,
    question: "Which gas is released when an acid reacts with a metal?",
    options: ["Oxygen", "Hydrogen", "Nitrogen", "Chlorine"],
    answer: "Hydrogen",
  },
  {
    id: 28,
    question: "What is the molar mass of water (H₂O)?",
    options: ["16 g/mol", "18 g/mol", "20 g/mol", "22 g/mol"],
    answer: "18 g/mol",
  },
  {
    id: 29,
    question: "Which of these is an alkaline earth metal?",
    options: ["Sodium", "Magnesium", "Iron", "Copper"],
    answer: "Magnesium",
  },
  {
    id: 30,
    question: "Which of the following compounds contains only single bonds?",
    options: ["C₂H₂", "C₂H₄", "C₂H₆", "C₆H₆"],
    answer: "C₂H₆",
  },
  {
    id: 31,
    question: "Which of these is NOT a physical property?",
    options: ["Boiling point", "Density", "Flammability", "Color"],
    answer: "Flammability",
  },
  {
    id: 32,
    question: "Which of these gases is monatomic?",
    options: ["Oxygen", "Nitrogen", "Helium", "Chlorine"],
    answer: "Helium",
  },
  {
    id: 33,
    question: "What is the chemical name for table salt?",
    options: ["Sodium carbonate", "Sodium chloride", "Potassium chloride", "Calcium sulfate"],
    answer: "Sodium chloride",
  },
  {
    id: 34,
    question: "What is the main gas responsible for global warming?",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"],
    answer: "Carbon dioxide",
  },
  {
    id: 35,
    question: "Which of these is a reducing agent?",
    options: ["Oxygen", "Chlorine", "Hydrogen", "Sulfur"],
    answer: "Hydrogen",
  },
  {
    id: 36,
    question: "Which acid is found in lemons?",
    options: ["Sulfuric acid", "Citric acid", "Nitric acid", "Acetic acid"],
    answer: "Citric acid",
  },
  {
   id: 37,
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Cu"],
        answer: "Au",
      },
      {
        id: 38,
        question: "What is the pH value of a neutral solution?",
        options: ["0", "7", "14", "1"],
        answer: "7",
      },
      {
        "id": 39,
        "question": "Which of the following is used as a drying agent?",
        "options": ["HCl", "H₂O", "CaCl₂", "NH₃"],
        "answer": "CaCl₂"
      },
      {
        "id": 40,
        "question": "Which element is found in all organic compounds?",
        "options": ["Oxygen", "Hydrogen", "Carbon", "Nitrogen"],
        "answer": "Carbon"
      },
      {
        "id": 41,
        "question": "What is the chemical formula of sulfuric acid?",
        "options": ["HCl", "H₂SO₄", "HNO₃", "H₂CO₃"],
        "answer": "H₂SO₄"
      },
      {
        "id": 42,
        "question": "Which type of chemical reaction involves the loss of electrons?",
        "options": ["Reduction", "Oxidation", "Neutralization", "Hydrolysis"],
        "answer": "Oxidation"
      },
      {
        "id": 43,
        "question": "Which of the following metals reacts with cold water?",
        "options": ["Copper", "Iron", "Sodium", "Lead"],
        "answer": "Sodium"
      },
      {
        "id": 44,
        "question": "What is the oxidation number of oxygen in most compounds?",
        "options": ["+1", "-1", "+2", "-2"],
        "answer": "-2"
      },
      {
        "id": 45,
        "question": "Which of these gases is used in fire extinguishers?",
        "options": ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
        "answer": "Carbon dioxide"
      },
      {
        "id": 46,
        "question": "What is the main constituent of natural gas?",
        "options": ["Methane", "Ethane", "Propane", "Butane"],
        "answer": "Methane"
      },
      {
        "id": 47,
        "question": "Which of the following can be used to detect the presence of starch?",
        "options": ["Benedict's solution", "Iodine solution", "Litmus paper", "Fehling's solution"],
        "answer": "Iodine solution"
      },
      {
        "id": 48,
        "question": "What is the common name for calcium hydroxide?",
        "options": ["Slaked lime", "Quick lime", "Limestone", "Caustic soda"],
        "answer": "Slaked lime"
      },
      {
        "id": 49,
        "question": "Which of these is a common alloy?",
        "options": ["Copper", "Steel", "Aluminum", "Sulfur"],
        "answer": "Steel"
      },
      {
        "id": 50,
        "question": "Which separation technique is used to obtain pure water from seawater?",
        "options": ["Filtration", "Decantation", "Distillation", "Crystallization"],
        "answer": "Distillation"
      }
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

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; 
  }
}

function loadQuestions(page) {
  quizContainer.innerHTML = "";
  shuffleArray(chemistryBank)

  let startIndex = (page - 1) * questionsPerPage;
  let endIndex = startIndex + questionsPerPage;
  let paginatedQuestions = chemistryBank.slice(startIndex, endIndex);

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
  prevBtn.style.display = page === 1 ? "none" : "inline-block";
  nextBtn.style.display = endIndex >= chemistryBank.length ? "none" : "inline-block";
}


function handleSubmit() {
  let score = 0;
  chemistryBank.forEach((q, index) => {
      const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
      if (selectedOption && selectedOption.value === q.answer) {
          score++;
      }
  });

  scoreDisplay.textContent = score;
  totalQuestionsDisplay.textContent = chemistryBank.length;
  resultsContainer.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentPage++;
  loadQuestions(currentPage);
});

prevBtn.addEventListener("click", () => {
  currentPage--;
  loadQuestions(currentPage);
});


function handleSubmit() {
  let score = 0;
  chemistryBank.forEach((q, index) => {
      const selectedOption = document.querySelector(
          `input[name="question${index}"]:checked`
      );
      if (selectedOption && selectedOption.value === q.answer) {
          score++;
      }
  });

  scoreDisplay.textContent = score;
  totalQuestionsDisplay.textContent = chemistryBank.length;
  resultsContainer.style.display = "block";
  quizContainer.style.display = "none";
  nextBtn.style.display = 'none'
  prevBtn.style.display = 'none'
  submitQuiz.style.display = 'none'
  answersPreviewContainer.style.display = "none";

}

function handleViewAnswers() {
  correctAnswersList.innerHTML = "";
  chemistryBank.forEach((q, index) => {
      const li = document.createElement("li");
      li.textContent = `${index + 1}. ${q.question} - Correct Answer: ${q.answer}`;
      correctAnswersList.appendChild(li);
  });
  answersPreviewContainer.style.display = "block";
  resultsContainer.style.display = "none";
}

document.getElementById("submitQuiz").addEventListener("click", handleSubmit);
document.getElementById("viewAnswers").addEventListener("click", handleViewAnswers);


function backToQuiz(){
  location.reload();
}
document.getElementById('onload').addEventListener('click' ,backToQuiz )
loadQuestions(currentPage);