(function () {
  var state = {
    pool: [],
    currentIndex: 0,
    score: 0,
    answers: []
  };

  function renderMeta(pool) {
    var meta = document.getElementById("quizMeta");
    if (!meta) {
      return;
    }
    var history = window.CodeCrackApp.getQuizHistory();
    meta.innerHTML = "";
    meta.appendChild(window.CodeCrackApp.createChip(pool.length + " questions available"));
    if (history[0]) {
      meta.appendChild(window.CodeCrackApp.createChip("Best recent: " + history[0].score + "/" + history[0].total));
    }
  }

  function renderFilters() {
    var select = document.getElementById("quizTopicFilter");
    if (!select) {
      return;
    }
    select.innerHTML = "<option value='all'>All tracks</option>";
    var topics = [];
    window.CodeCrackData.quizQuestions.forEach(function (item) {
      if (topics.indexOf(item.topic) === -1) {
        topics.push(item.topic);
      }
    });
    topics.forEach(function (topic) {
      var option = document.createElement("option");
      option.value = topic;
      option.textContent = window.CodeCrackApp.getTopicLabel(topic) || topic;
      select.appendChild(option);
    });
  }

  function getPool() {
    var topic = document.getElementById("quizTopicFilter").value;
    var difficulty = document.getElementById("quizDifficultyFilter").value;
    var pool = window.CodeCrackData.quizQuestions.filter(function (item) {
      return (topic === "all" || item.topic === topic) && (difficulty === "all" || item.difficulty === difficulty);
    });
    renderMeta(pool);
    return pool;
  }

  function renderStartState() {
    var board = document.getElementById("quizBoard");
    if (!board) {
      return;
    }
    board.innerHTML =
      "<h2>Ready for a placement-style quiz?</h2><p>Select a topic and difficulty, then start the quiz to check your concept recall.</p>";
  }

  function renderQuestion() {
    var board = document.getElementById("quizBoard");
    var item = state.pool[state.currentIndex];
    if (!board || !item) {
      return;
    }

    var selected = state.answers[state.currentIndex];
    board.innerHTML =
      "<span class='pill'>Question " +
      (state.currentIndex + 1) +
      " / " +
      state.pool.length +
      "</span><h2>" +
      item.question +
      "</h2><p>" +
      item.context +
      "</p><div class='quiz-option-list'></div><div class='quiz-nav'><span class='chip'>Score: " +
      state.score +
      "</span><button class='btn btn-secondary' id='nextQuestion' type='button'>" +
      (state.currentIndex === state.pool.length - 1 ? "Finish Quiz" : "Next Question") +
      "</button></div>";

    var list = board.querySelector(".quiz-option-list");
    item.options.forEach(function (option, index) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "quiz-option";
      if (selected !== undefined) {
        if (index === item.answer) {
          button.classList.add("correct");
        } else if (index === selected) {
          button.classList.add("wrong");
        }
      }
      button.innerHTML = "<strong>" + String.fromCharCode(65 + index) + "</strong><span>" + option + "</span>";
      button.disabled = selected !== undefined;
      button.addEventListener("click", function () {
        state.answers[state.currentIndex] = index;
        if (index === item.answer) {
          state.score += 1;
        }
        renderQuestion();
      });
      list.appendChild(button);
    });

    if (selected !== undefined) {
      var explanation = document.createElement("div");
      explanation.className = "detail-pair";
      explanation.innerHTML = "<strong>Explanation</strong><span>" + item.explanation + "</span>";
      board.appendChild(explanation);
    }

    board.querySelector("#nextQuestion").addEventListener("click", function () {
      if (state.answers[state.currentIndex] === undefined) {
        return;
      }
      if (state.currentIndex === state.pool.length - 1) {
        finishQuiz();
      } else {
        state.currentIndex += 1;
        renderQuestion();
      }
    });
  }

  function finishQuiz() {
    var board = document.getElementById("quizBoard");
    if (!board) {
      return;
    }
    window.CodeCrackApp.saveQuizHistory({
      score: state.score,
      total: state.pool.length,
      at: new Date().toISOString()
    });
    board.innerHTML =
      "<h2>Quiz Complete</h2><p>You scored <strong>" +
      state.score +
      "</strong> out of <strong>" +
      state.pool.length +
      "</strong>.</p><div class='quiz-nav'><button class='btn btn-primary' id='restartQuiz' type='button'>Try Again</button></div>";
    board.querySelector("#restartQuiz").addEventListener("click", function () {
      state.pool = getPool().slice(0, 10);
      state.currentIndex = 0;
      state.score = 0;
      state.answers = [];
      renderQuestion();
    });
    renderMeta(getPool());
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderFilters();
    renderStartState();
    renderMeta(getPool());

    document.getElementById("quizTopicFilter").addEventListener("change", function () {
      renderMeta(getPool());
    });
    document.getElementById("quizDifficultyFilter").addEventListener("change", function () {
      renderMeta(getPool());
    });

    document.getElementById("startQuiz").addEventListener("click", function () {
      state.pool = getPool().slice(0, 10);
      state.currentIndex = 0;
      state.score = 0;
      state.answers = [];
      if (!state.pool.length) {
        document.getElementById("quizBoard").innerHTML =
          "<div class='empty-state'>No quiz questions match the selected filters.</div>";
        return;
      }
      renderQuestion();
    });
  });
})();
