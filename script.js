// ========================================

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

    questions.forEach((q) => {
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
        btn.onclick = () => {
            const visible = answerDiv.style.display === "block";
            answerDiv.style.display = visible ? "none" : "block";
            btn.textContent = visible ? "Show Answer" : "Hide Answer";
        };

        box.appendChild(btn);
        questionsContainer.appendChild(box);
    });
}

subjectSelect.addEventListener("change", loadTopics);
topicSelect.addEventListener("change", loadQuestions);

loadSubjects();
