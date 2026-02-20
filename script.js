// ===============================
// ✏️ EDIT HERE (CREATOR SECTION)
// ===============================

const examData = {

    "Mathematics": {
        "Algebra": [
            "1. Solve: 2x + 5 = 15",
            "2. Expand: (a + b)^2",
            "3. Factorize: x^2 - 9"
        ],
        "Geometry": [
            "1. Define Pythagoras Theorem.",
            "2. Find area of a circle.",
            "3. What is the sum of angles in a triangle?"
        ]
    },

    "Science": {
        "Physics": [
            "1. Define Newton's First Law.",
            "2. What is acceleration?",
            "3. State Ohm’s Law."
        ],
        "Chemistry": [
            "1. Define atom.",
            "2. What is pH scale?",
            "3. Balance: H2 + O2 → H2O"
        ]
    }

};

// ===============================
// 🚫 DO NOT EDIT BELOW
// ===============================

const subjectSelect = document.getElementById("subjectSelect");
const topicSelect = document.getElementById("topicSelect");
const questionsContainer = document.getElementById("questionsContainer");

// Load subjects
function loadSubjects() {
    subjectSelect.innerHTML = "";

    Object.keys(examData).forEach((subject, index) => {
        const option = document.createElement("option");
        option.value = subject;
        option.textContent = subject;
        subjectSelect.appendChild(option);

        // Automatically select first subject
        if (index === 0) {
            subjectSelect.value = subject;
        }
    });

    loadTopics();
}

// Load topics
function loadTopics() {
    topicSelect.innerHTML = "";

    const selectedSubject = subjectSelect.value;
    const topics = examData[selectedSubject];

    Object.keys(topics).forEach((topic, index) => {
        const option = document.createElement("option");
        option.value = topic;
        option.textContent = topic;
        topicSelect.appendChild(option);

        // Automatically select first topic
        if (index === 0) {
            topicSelect.value = topic;
        }
    });

    loadQuestions();
}

// Load questions
function loadQuestions() {
    questionsContainer.innerHTML = "";

    const subject = subjectSelect.value;
    const topic = topicSelect.value;

    const questions = examData[subject][topic];

    questions.forEach(question => {
        const div = document.createElement("div");
        div.className = "question";
        div.textContent = question;
        questionsContainer.appendChild(div);
    });
}

// Event listeners
subjectSelect.addEventListener("change", loadTopics);
topicSelect.addEventListener("change", loadQuestions);

// Start app
loadSubjects();
