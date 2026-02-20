// ===== EDIT YOUR SUBJECTS, TOPICS, QUESTIONS HERE =====
const data = {
  "Math": {
    "Algebra": [
      { q: "Solve: 2x + 3 = 7", a: "x = 2" },
      { q: "Value of x: x/2 = 5", a: "x = 10" }
    ],
    "Mensuration": [
      { q: "Area of square with side 4?", a: "16" }
    ]
  },

  "Science": {
    "Physics": [
      { q: "Unit of force?", a: "Newton" }
    ],
    "Biology": [
      { q: "Basic unit of life?", a: "Cell" }
    ]
  }
};
// ======================================================

const subjectSelect = document.getElementById("subjectSelect");
const topicSelect = document.getElementById("topicSelect");
const container = document.getElementById("questionsContainer");

function loadSubjects() {
  subjectSelect.innerHTML = "";
  for (let subject in data) {
    let opt = document.createElement("option");
    opt.value = subject;
    opt.textContent = subject;
    subjectSelect.appendChild(opt);
  }
  loadTopics();
}

function loadTopics() {
  topicSelect.innerHTML = "";
  let subject = subjectSelect.value;
  for (let topic in data[subject]) {
    let opt = document.createElement("option");
    opt.value = topic;
    opt.textContent = topic;
    topicSelect.appendChild(opt);
  }
  loadQuestions();
}

function loadQuestions() {
  container.innerHTML = "";
  let subject = subjectSelect.value;
  let topic = topicSelect.value;
  let questions = data[subject][topic];

  questions.forEach((item, index) => {
    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="question">${index + 1}. ${item.q}</div>
      <button onclick="toggleAnswer(${index})">Show Answer</button>
      <div class="answer" id="ans${index}">${item.a}</div>
    `;

    container.appendChild(card);
  });
}

function toggleAnswer(i) {
  let ans = document.getElementById("ans" + i);
  ans.style.display = ans.style.display === "block" ? "none" : "block";
}

subjectSelect.addEventListener("change", loadTopics);
topicSelect.addEventListener("change", loadQuestions);

loadSubjects();
