// ===== EDIT THIS DATA ONLY =====
const data = {
  "Mathematics": {
    "Algebra": [
      "Solve: 2x + 5 = 17",
      "Factorise: x^2 + 5x + 6"
    ],
    "Mensuration": [
      "Find area of circle radius 7 cm"
    ]
  },

  "Science": {
    "Physics": [
      "Define velocity"
    ]
  }
};
// ===============================

const subjectSelect = document.getElementById("subjectSelect");
const topicSelect = document.getElementById("topicSelect");
const questionArea = document.getElementById("questionArea");
const scoreEl = document.getElementById("score");
const totalEl = document.getElementById("total");
const resetBtn = document.getElementById("resetScore");

let score = 0;
let total = 0;

function updateScore() {
  scoreEl.textContent = score;
  totalEl.textContent = total;
}

function populateSubjects() {
  subjectSelect.innerHTML = "";
  Object.keys(data).forEach(subject => {
    const opt = document.createElement("option");
    opt.value = subject;
    opt.textContent = subject;
    subjectSelect.appendChild(opt);
  });
  populateTopics();
}

function populateTopics() {
  const subject = subjectSelect.value;
  topicSelect.innerHTML = "";

  Object.keys(data[subject]).forEach(topic => {
    const opt = document.createElement("option");
    opt.value = topic;
    opt.textContent = topic;
    topicSelect.appendChild(opt);
  });

  showQuestions();
}

function markCorrect(btn) {
  if (btn.dataset.done) return;
  score++;
  total++;
  btn.dataset.done = true;
  updateScore();
}

function markWrong(btn) {
  if (btn.dataset.done) return;
  total++;
  btn.dataset.done = true;
  updateScore();
}

function showQuestions() {
  const subject = subjectSelect.value;
  const topic = topicSelect.value;
  const questions = data[subject][topic];

  questionArea.innerHTML = "";

  questions.forEach((q, i) => {
    const card = document.createElement("div");
    card.className = "question-card";

    card.innerHTML = `
      <div class="question-number">Question ${i + 1}</div>
      <div>${q}</div>
      <div class="actions">
        <button class="btn btn-correct">Correct</button>
        <button class="btn btn-wrong">Wrong</button>
      </div>
    `;

    const correctBtn = card.querySelector(".btn-correct");
    const wrongBtn = card.querySelector(".btn-wrong");

    correctBtn.onclick = () => markCorrect(correctBtn);
    wrongBtn.onclick = () => markWrong(wrongBtn);

    questionArea.appendChild(card);
  });
}

resetBtn.onclick = () => {
  score = 0;
  total = 0;
  updateScore();
  document.querySelectorAll(".btn").forEach(b => delete b.dataset.done);
};

subjectSelect.addEventListener("change", populateTopics);
topicSelect.addEventListener("change", showQuestions);

populateSubjects();
updateScore();
