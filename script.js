const questions = [
  {
    q: "Area of circle formula?",
    o: ["πr²", "2πr", "r²", "πd"],
    a: 0
  },
  {
    q: "Speed formula?",
    o: ["d/t", "t/d", "m×a", "v×t"],
    a: 0
  },
  {
    q: "Pythagoras theorem?",
    o: ["a²+b²=c²", "a+b=c", "a²-b²=c²", "ab=c"],
    a: 0
  }
];

let current = 0;
let score = 0;

function loadQuestion() {
  const q = questions[current];
  document.getElementById("question").textContent = q.q;
  const optDiv = document.getElementById("options");
  optDiv.innerHTML = "";

  q.o.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(i);
    optDiv.appendChild(btn);
  });
}

function checkAnswer(i) {
  if (i === questions[current].a) score++;
  document.getElementById("score").textContent = "Score: " + score;
}

function nextQuestion() {
  current = (current + 1) % questions.length;
  loadQuestion();
}

if (document.getElementById("question")) loadQuestion();

function addTopic() {
  const input = document.getElementById("topic");
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.textContent = text;
  document.getElementById("list").appendChild(li);

  let saved = JSON.parse(localStorage.getItem("topics") || "[]");
  saved.push(text);
  localStorage.setItem("topics", JSON.stringify(saved));

  input.value = "";
}

if (document.getElementById("list")) {
  let saved = JSON.parse(localStorage.getItem("topics") || "[]");
  saved.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t;
    document.getElementById("list").appendChild(li);
  });
}
