(function () {
  var state = {
    search: "",
    topic: "all",
    difficulty: "all",
    bookmarkedOnly: false
  };

  function renderTopicOptions() {
    var select = document.getElementById("topicFilter");
    if (!select) {
      return;
    }
    select.innerHTML = "<option value='all'>All topics</option>";
    window.CodeCrackData.topics.forEach(function (topic) {
      var option = document.createElement("option");
      option.value = topic.id;
      option.textContent = topic.title;
      select.appendChild(option);
    });
  }

  function getFilteredQuestions() {
    var bookmarks = window.CodeCrackApp.getBookmarks();
    return window.CodeCrackData.questions.filter(function (question) {
      var searchPass =
        !state.search ||
        [question.title, question.problem, question.intuition, question.topic, question.difficulty]
          .concat(question.companies || [])
          .concat(question.tags || [])
          .join(" ")
          .toLowerCase()
          .indexOf(state.search.toLowerCase()) >= 0;
      var topicPass = state.topic === "all" || question.topic === state.topic;
      var difficultyPass = state.difficulty === "all" || question.difficulty === state.difficulty;
      var bookmarkPass = !state.bookmarkedOnly || bookmarks.indexOf(question.id) >= 0;
      return searchPass && topicPass && difficultyPass && bookmarkPass;
    });
  }

  function renderStats(items) {
    var stats = document.getElementById("questionStats");
    if (!stats) {
      return;
    }
    var summary = window.CodeCrackApp.summarizeProgress();
    stats.innerHTML = "";
    stats.appendChild(window.CodeCrackApp.createChip(items.length + " matching questions"));
    stats.appendChild(window.CodeCrackApp.createChip(summary.bookmarks + " bookmarked"));
    stats.appendChild(window.CodeCrackApp.createChip(summary.learning + " in progress"));
    stats.appendChild(window.CodeCrackApp.createChip(summary.mastered + " mastered"));
  }

  function renderQuestions() {
    var container = document.getElementById("questionsContainer");
    if (!container) {
      return;
    }
    var items = getFilteredQuestions();
    renderStats(items);
    container.innerHTML = "";
    if (!items.length) {
      container.innerHTML = "<div class='glass-card empty-state'>No questions match the current filters.</div>";
      return;
    }
    items.forEach(function (question) {
      container.appendChild(window.CodeCrackApp.createQuestionCard(question));
    });
    window.CodeCrackApp.refreshReveal();
  }

  function bindFilters() {
    var search = document.getElementById("questionSearch");
    var topic = document.getElementById("topicFilter");
    var difficulty = document.getElementById("difficultyFilter");
    var bookmark = document.getElementById("bookmarkFilter");
    if (!search || !topic || !difficulty || !bookmark) {
      return;
    }

    state.search = window.CodeCrackApp.getQueryParam("search");
    state.topic = window.CodeCrackApp.getQueryParam("topic") || "all";

    search.value = state.search;
    topic.value = state.topic;

    search.addEventListener("input", function () {
      state.search = search.value.trim();
      renderQuestions();
    });
    topic.addEventListener("change", function () {
      state.topic = topic.value;
      renderQuestions();
    });
    difficulty.addEventListener("change", function () {
      state.difficulty = difficulty.value;
      renderQuestions();
    });
    bookmark.addEventListener("change", function () {
      state.bookmarkedOnly = bookmark.checked;
      renderQuestions();
    });

    document.addEventListener("codecrack:bookmark-change", renderQuestions);
    document.addEventListener("codecrack:progress-change", renderQuestions);
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderTopicOptions();
    bindFilters();
    renderQuestions();
  });
})();
