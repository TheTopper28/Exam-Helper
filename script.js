// ========================================
// ✏️ CREATOR SECTION (EDIT QUESTIONS HERE)
// ========================================

const examData = {

    "Mathematics": {
        "Algebra": [
            {
                question: "1. Solve: 2x + 5 = 15",
                options: ["A. 3", "B. 5", "C. 10", "D. 7"],
                answer: "Correct Answer: B. 5"
            },
            {
                question: "2. Expand: (a + b)^2",
                options: [
                    "A. a² + b²",
                    "B. a² + 2ab + b²",
                    "C. 2a + 2b",
                    "D. a² - b²"
                ],
                answer: "Correct Answer: B. a² + 2ab + b²"
            }
        ]
    },

    "Science": {
        "Physics": [
            {
                question: "1. Unit of Force?",
                options: ["A. Joule", "B. Newton", "C. Watt", "D. Pascal"],
                answer: "Correct Answer: B. Newton"
            }
        ]
    }

};

// ========================================
// 🚫 DO NOT EDIT BELOW
// ========================================

const subjectSelect = document.getElementById("subjectSelect");
const topicSelect = document.getElementById("topicSelect");
const questionsContainer = document.getElementById("questionsContainer");

function loadSubjects() {
    subjectSelect.innerHTML = "";

    Object.keys(examData).forEach((subject, index) => {
        const option = document.createElement("option");
        option.value = subject;
        option.textContent = subject;
        subjectSelect.appendChild(option);

        if (index === 0) subjectSelect.value = subject;
    });

    loadTopics();
}

function loadTopics() {
    topicSelect.innerHTML = "";

    const selectedSubject = subjectSelect.value;
    const topics = examData[selectedSubject];

    Object.keys(topics).forEach((topic, index) => {
        const option = document.createElement("option");
        option.value = topic;
        option.textContent = topic;
        topicSelect.appendChild(option);

        if (index === 0) topicSelect.value = topic;
    });

    loadQuestions();
}

function loadQuestions() {
    questionsContainer.innerHTML = "";

    const subject = subjectSelect.value;
    const topic = topicSelect.value;
    const questions = examData[subject][topic];

    questions.forEach((q, index) => {
        const box = document.createElement("div");
        box.className = "question-box";

        const questionText = document.createElement("h3");
        questionText.textContent = q.question;
        box.appendChild(questionText);

        const optionsDiv = document.createElement("div");
        optionsDiv.className = "options";

        q.options.forEach(option => {
            const opt = document.createElement("div");
            opt.className = "option";
            opt.textContent = option;
            optionsDiv.appendChild(opt);
        });

        box.appendChild(optionsDiv);

        const answerDiv = document.createElement("div");
        answerDiv.className = "answer";
        answerDiv.textContent = q.answer;
        box.appendChild(answerDiv);

        const btn = document.createElement("button");
        btn.textContent = "Show Answer";
        btn.onclick = function () {
            if (answerDiv.style.display === "none") {
                answerDiv.style.display = "block";
                btn.textContent = "Hide Answer";
            } else {
                answerDiv.style.display = "none";
                btn.textContent = "Show Answer";
            }
        };

        box.appendChild(btn);
        questionsContainer.appendChild(box);
    });
}

subjectSelect.addEventListener("change", loadTopics);
topicSelect.addEventListener("change", loadQuestions);

loadSubjects();
