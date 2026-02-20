// ===== EDIT YOUR SUBJECTS / QUESTIONS / ANSWERS HERE =====
const data = {
  Mathematics: {
    Algebra: [
      { q: "Solve: 2x + 5 = 17", a: "x = 6" },
      { q: "Factorise: x² + 5x + 6", a: "(x+2)(x+3)" }
    ],
    Mensuration: [
      { q: "Area of circle radius 7 cm", a: "154 cm²" }
    ]
  },

  Science: {
    Physics: [
      { q: "Define velocity", a: "Speed with direction" }
    ]
  }
};

// ===== USER SIGN-IN =====
const usernameInput = document.getElementById("usernameInput");
const saveUser = document.getElementById("saveUser");
const welcomeUser = document.getElementById("welcomeUser");

function initUser() {
  const stored = localStorage.getItem("rev_user");
  if (stored) {
    usernameInput.style.display = "none";
    saveUser.style.display = "none";
    welcomeUser.textContent = "👋 " + stored;
  }
}

saveUser.onclick = () => {
  const name = usernameInput.value.trim();
  if (!name) return;
  localStorage.setItem("rev_user", name);
  usernameInput.style.display = "none";
  saveUser.style.display = "none";
  welcomeUser.textContent = "👋 " + name;
};

// ===== SUBJECT / TOPIC =====
const subjectSelect = document.getElementById("subjectSelect");
const topicSelect = document.getElementById("topicSelect");
const questionArea = document.getElementById("questionArea");

function populateSubjects() {
  subjectSelect.innerHTML = "";
  Object.keys(data).forEach(sub => {
    const opt = document.createElement("option");
    opt.value = sub;
    opt.textContent = sub;
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

function showQuestions() {
  const subject = subjectSelect.value;
  const topic = topicSelect.value;
  const questions = data[subject][topic];

  questionArea.innerHTML = "";

  questions.forEach((item, i) => {
    const card = document.createElement("div");
    card.className = "question-card";

    card.innerHTML = `
      <div class="question-number">Question ${i + 1}</div>
      <div>${item.q}</div>
      <button class="show-btn">Show Answer</button>
      <div class="answer">${item.a}</div>
    `;

    const btn = card.querySelector(".show-btn");
    const ans = card.querySelector(".answer");

    btn.onclick = () => {
      ans.style.display = ans.style.display === "block" ? "none" : "block";
    };

    questionArea.appendChild(card);
  });
}

subjectSelect.addEventListener("change", populateTopics);
topicSelect.addEventListener("change", showQuestions);

// INIT
initUser();
populateSubjects();
