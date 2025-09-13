const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const progressEl = document.getElementById("progress");
const resultEl = document.getElementById("result");
const resetBtn = document.getElementById("resetBtn");
const reviewBtn = document.getElementById("reviewBtn");
const wrongOnlyBtn = document.getElementById("wrongOnlyBtn");
const reviewBox = document.getElementById("reviewBox");

let shuffledQuestions = [];
let currentIndex = 0;
let correct = 0;
let wrong = 0;
let answersLog = []; // ✅ सही/गलत स्टोर करने के लिए

// 🔹 Load state from localStorage
function loadState() {
  let state = JSON.parse(localStorage.getItem("quizState"));
  if (state) {
    shuffledQuestions = state.shuffledQuestions;
    currentIndex = state.currentIndex;
    correct = state.correct;
    wrong = state.wrong;
    answersLog = state.answersLog || [];
  } else {
    startNewQuiz();
  }
}

// 🔹 Save state
function saveState() {
  localStorage.setItem("quizState", JSON.stringify({
    shuffledQuestions,
    currentIndex,
    correct,
    wrong,
    answersLog
  }));
}

// 🔹 Start new quiz
function startNewQuiz() {
  shuffledQuestions = quizData.sort(() => 0.5 - Math.random()); // random shuffle
  currentIndex = 0;
  correct = 0;
  wrong = 0;
  answersLog = [];
  saveState();
  loadQuestion();
}

// 🔹 Load question
function loadQuestion() {
  if (currentIndex >= shuffledQuestions.length) {
    showCompletion();
    return;
  }

  let q = shuffledQuestions[currentIndex];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(opt => {
    let btn = document.createElement("button");
    btn.textContent = opt;
    btn.className = "optionBtn";
    btn.onclick = () => checkAnswer(btn, opt, q.answer);
    optionsEl.appendChild(btn);
  });

  progressEl.textContent = `📍 Question ${currentIndex + 1} of ${shuffledQuestions.length}`;
  resultEl.innerHTML = `✅ Correct: ${correct} | ❌ Wrong: ${wrong}`;
  nextBtn.style.display = "none";
  saveState();
}

// 🔹 Check Answer
function checkAnswer(button, selected, correctAns) {
  let optionBtns = document.querySelectorAll(".optionBtn");
  optionBtns.forEach(btn => btn.disabled = true); // disable all after selection

  if (selected === correctAns) {
    correct++;
    button.style.background = "#d1e7dd"; // green
    button.style.border = "2px solid #198754";
    answersLog.push({ q: shuffledQuestions[currentIndex].question, selected, correctAns, status: "✅" });
  } else {
    wrong++;
    button.style.background = "#f8d7da"; // red
    button.style.border = "2px solid #dc3545";
    // highlight correct option
    optionBtns.forEach(btn => {
      if (btn.textContent === correctAns) {
        btn.style.background = "#d1e7dd";
        btn.style.border = "2px solid #198754";
      }
    });
    answersLog.push({ q: shuffledQuestions[currentIndex].question, selected, correctAns, status: "❌" });
  }

  currentIndex++;
  resultEl.innerHTML = `✅ Correct: ${correct} | ❌ Wrong: ${wrong}`;
  nextBtn.style.display = "inline-block";
  saveState();
}

// 🔹 Show completion message
function showCompletion() {
  optionsEl.innerHTML = "";
  questionEl.textContent = "🎉 Quiz Completed!";
  resultEl.innerHTML = `✅ Correct: ${correct} | ❌ Wrong: ${wrong}`;
  progressEl.textContent = `All ${shuffledQuestions.length} questions done!`;
  nextBtn.style.display = "none";
  reviewBtn.style.display = "inline-block";
  wrongOnlyBtn.style.display = "inline-block";
}

// 🔹 Next Button
nextBtn.addEventListener("click", () => {
  loadQuestion();
});

// 🔹 Reset Button
resetBtn.addEventListener("click", () => {
  localStorage.removeItem("quizState");
  startNewQuiz();
});

// 🔹 Review All Answers
reviewBtn.addEventListener("click", () => {
  reviewBox.innerHTML = "<h3>📖 Review All Answers</h3>";
  answersLog.forEach((item, i) => {
    let div = document.createElement("div");
    div.className = "reviewItem";
    div.innerHTML = `<b>Q${i+1}:</b> ${item.q}<br>
                     <span style="color:${item.status === '✅' ? 'green':'red'}">
                     Your Answer: ${item.selected} (${item.status})</span>
                     <span>Correct Answer: ${item.correctAns}</span>`;
    reviewBox.appendChild(div);
  });
  reviewBox.style.display = "block";
});

// 🔹 Review Wrong Only
wrongOnlyBtn.addEventListener("click", () => {
  reviewBox.innerHTML = "<h3>❌ Review Wrong Answers</h3>";
  let wrongOnly = answersLog.filter(item => item.status === "❌");
  if (wrongOnly.length === 0) {
    reviewBox.innerHTML += "<p>🎉 कोई गलत जवाब नहीं मिला!</p>";
  } else {
    wrongOnly.forEach((item, i) => {
      let div = document.createElement("div");
      div.className = "reviewItem";
      div.innerHTML = `<b>Q:</b> ${item.q}<br>
                       <span style="color:red">Your Answer: ${item.selected}</span>
                       <span style="color:green">Correct Answer: ${item.correctAns}</span>`;
      reviewBox.appendChild(div);
    });
  }
  reviewBox.style.display = "block";
});

// 🔹 Init
loadState();
loadQuestion();