// redirect if not logged
const currentUser=localStorage.getItem("rev_current_user");
if(!currentUser){location.href="login.html";}

// show user
document.getElementById("userName").textContent="👋 "+currentUser;

document.getElementById("logoutBtn").onclick=()=>{
  localStorage.removeItem("rev_current_user");
  location.href="login.html";
};

// ===== DATA =====
const data={
 Computer:{
    Chapter4:[
      {q:"What is the fullform of IDE",a:"Integreted Development Environment"},
      {q:"If a line begins from '//' it is a _______",a:"Comment line"},
      {q:"What are variables?",a:"A variable is a portion of memory used to store values."},
      {q:"What are constant?",a:"A contant is a sequence of characters that have fixed value."},
      {q:"Define BODMAS",a:"Brackets Of Division Multiplication Addition and Subtraction."},
      {q:"Give a example of logical operators",a:" '&&' '||'  '!' "},
      {q:"What are relational operators",a:"They are operators that show comparison i.e. ==,>=,<= etc."}
      
      
       ]
  },
  Science:{
    Physics:[
      {q:"QUESTIONS NOT YET UPLODED"}
    ]
  }
};

const subjectSelect=document.getElementById("subjectSelect");
const topicSelect=document.getElementById("topicSelect");
const questionArea=document.getElementById("questionArea");

function populateSubjects(){
  Object.keys(data).forEach(s=>{
    const o=document.createElement("option");
    o.value=s;o.textContent=s;
    subjectSelect.appendChild(o);
  });
  populateTopics();
}

function populateTopics(){
  topicSelect.innerHTML="";
  Object.keys(data[subjectSelect.value]).forEach(t=>{
    const o=document.createElement("option");
    o.value=t;o.textContent=t;
    topicSelect.appendChild(o);
  });
  showQuestions();
}

function showQuestions(){
  questionArea.innerHTML="";
  const list=data[subjectSelect.value][topicSelect.value];
  list.forEach((it,i)=>{
    const card=document.createElement("div");
    card.className="question-card";
    card.innerHTML=`
      <div>Q${i+1}. ${it.q}</div>
      <button class="show-btn">Show Answer</button>
      <div class="answer">${it.a}</div>
    `;
    const b=card.querySelector(".show-btn");
    const a=card.querySelector(".answer");
    b.onclick=()=>{
      a.style.display=a.style.display==="block"?"none":"block";
    };
    questionArea.appendChild(card);
  });
}

subjectSelect.onchange=populateTopics;
topicSelect.onchange=showQuestions;
populateSubjects();
