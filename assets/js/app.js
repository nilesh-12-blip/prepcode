(function () {
  var storageKeys = {
    bookmarks: "codecrack-bookmarks",
    progress: "codecrack-progress",
    theme: "codecrack-theme",
    quizHistory: "codecrack-quiz-history"
  };

  function getBookmarks() {
    return JSON.parse(localStorage.getItem(storageKeys.bookmarks) || "[]");
  }

  function saveBookmarks(bookmarks) {
    localStorage.setItem(storageKeys.bookmarks, JSON.stringify(bookmarks));
  }

  function toggleBookmark(id) {
    var bookmarks = getBookmarks();
    var index = bookmarks.indexOf(id);
    if (index >= 0) {
      bookmarks.splice(index, 1);
    } else {
      bookmarks.push(id);
    }
    saveBookmarks(bookmarks);
    return bookmarks;
  }

  function getProgress() {
    return JSON.parse(localStorage.getItem(storageKeys.progress) || "{}");
  }

  function saveProgress(progress) {
    localStorage.setItem(storageKeys.progress, JSON.stringify(progress));
  }

  function cycleProgress(id) {
    var progress = getProgress();
    var current = progress[id] || "not-started";
    var next = current === "not-started" ? "learning" : current === "learning" ? "mastered" : "not-started";
    progress[id] = next;
    saveProgress(progress);
    return next;
  }

  function getTopicById(id) {
    return window.CodeCrackData.topics.find(function (topic) {
      return topic.id === id;
    });
  }

  function getQuestionById(id) {
    return window.CodeCrackData.questions.find(function (question) {
      return question.id === id;
    });
  }

  function getTopicLabel(id) {
    var topic = getTopicById(id);
    return topic ? topic.title : id;
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(storageKeys.theme, theme);
  }

  function initTheme() {
    var stored = localStorage.getItem(storageKeys.theme) || "dark";
    setTheme(stored);
    var toggle = document.querySelector(".theme-toggle");
    if (!toggle) {
      return;
    }
    toggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme");
      setTheme(current === "dark" ? "light" : "dark");
    });
  }

  function initNav() {
    var page = document.body.getAttribute("data-page");
    document.querySelectorAll("[data-nav]").forEach(function (link) {
      link.classList.toggle("active", link.getAttribute("data-nav") === page);
    });

    var toggle = document.querySelector(".nav-toggle");
    var nav = document.querySelector(".primary-nav");
    if (!toggle || !nav) {
      return;
    }
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  function initGlobalSearch() {
    document.querySelectorAll("[data-global-search]").forEach(function (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        var input = form.querySelector("input[name='search']");
        var query = input ? input.value.trim() : "";
        var target = "questions.html";
        window.location.href = query ? target + "?search=" + encodeURIComponent(query) : target;
      });
    });
  }

  var revealObserver = null;

  function initReveal() {
    revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    refreshReveal();
  }

  function refreshReveal() {
    if (!revealObserver) {
      return;
    }
    document.querySelectorAll(".reveal").forEach(function (element) {
      revealObserver.observe(element);
    });
  }

  function createChip(text, className) {
    var span = document.createElement("span");
    span.className = className || "chip";
    span.textContent = text;
    return span;
  }

  function createTag(text, className) {
    var span = document.createElement("span");
    span.className = "tag " + (className || "");
    span.textContent = text;
    return span;
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    var area = document.createElement("textarea");
    area.value = text;
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    document.body.removeChild(area);
    return Promise.resolve();
  }

  function createQuestionCard(question) {
    var progress = getProgress()[question.id] || "not-started";
    var bookmarked = getBookmarks().indexOf(question.id) >= 0;

    var card = document.createElement("article");
    card.className = "question-card reveal";
    card.dataset.topic = question.topic;
    card.dataset.difficulty = question.difficulty;
    card.dataset.id = question.id;

    var meta = document.createElement("div");
    meta.className = "question-meta";
    meta.appendChild(createTag(getTopicLabel(question.topic)));
    meta.appendChild(createTag(question.difficulty, "difficulty-" + question.difficulty.toLowerCase()));
    question.companies.slice(0, 2).forEach(function (company) {
      meta.appendChild(createTag(company));
    });

    var title = document.createElement("h3");
    title.textContent = question.title;

    var problem = document.createElement("p");
    problem.textContent = question.problem;

    var tags = document.createElement("div");
    tags.className = "chip-row";
    (question.tags || []).forEach(function (tag) {
      tags.appendChild(createChip(tag));
    });

    var actions = document.createElement("div");
    actions.className = "question-actions";

    var toggleSolution = document.createElement("button");
    toggleSolution.type = "button";
    toggleSolution.textContent = "Show Solution";

    var bookmarkButton = document.createElement("button");
    bookmarkButton.type = "button";
    bookmarkButton.textContent = bookmarked ? "Bookmarked" : "Bookmark";
    bookmarkButton.classList.toggle("active", bookmarked);

    var progressButton = document.createElement("button");
    progressButton.type = "button";
    progressButton.textContent =
      progress === "not-started" ? "Mark Studied" : progress === "learning" ? "Mark Mastered" : "Reset Progress";
    progressButton.classList.toggle("active", progress !== "not-started");

    var studioButton = document.createElement("button");
    studioButton.type = "button";
    studioButton.textContent = "Open in Studio";
    studioButton.addEventListener("click", function () {
      window.location.href = "solutions.html?id=" + encodeURIComponent(question.id);
    });

    actions.append(toggleSolution, bookmarkButton, progressButton, studioButton);

    var solutionPanel = document.createElement("div");
    solutionPanel.className = "solution-panel";
    solutionPanel.innerHTML =
      '<div class="detail-pair"><strong>Intuition</strong><span>' +
      question.intuition +
      "</span></div>" +
      '<div class="detail-pair"><strong>Approach</strong><span>' +
      question.approach +
      "</span></div>" +
      '<div class="detail-pair"><strong>Dry Run</strong><span>' +
      question.dryRun +
      "</span></div>" +
      '<div class="detail-columns">' +
      '<div class="detail-pair"><strong>Complexity</strong><span>' +
      question.complexity +
      "</span></div>" +
      '<div class="detail-pair"><strong>Common Mistakes</strong><span>' +
      question.mistakes.join("; ") +
      "</span></div>" +
      '<div class="detail-pair"><strong>Interview Tip</strong><span>' +
      question.tip +
      "</span></div>" +
      "</div>";

    if (question.output) {
      var outputBlock = document.createElement("div");
      outputBlock.className = "detail-pair";
      outputBlock.innerHTML = "<strong>Visual Output</strong>";
      var pre = document.createElement("pre");
      pre.className = "pattern-output";
      pre.textContent = question.output;
      outputBlock.appendChild(pre);
      solutionPanel.appendChild(outputBlock);
    }

    var codeWrap = document.createElement("div");
    codeWrap.className = "detail-pair";
    codeWrap.innerHTML = "<strong>Java Code</strong>";
    var copyButton = document.createElement("button");
    copyButton.type = "button";
    copyButton.className = "copy-code-btn";
    copyButton.textContent = "Copy Code";
    copyButton.addEventListener("click", function () {
      copyText(question.code).then(function () {
        copyButton.textContent = "Copied";
        setTimeout(function () {
          copyButton.textContent = "Copy Code";
        }, 1200);
      });
    });
    var pre = document.createElement("pre");
    var code = document.createElement("code");
    code.textContent = question.code;
    pre.appendChild(code);
    codeWrap.append(copyButton, pre);
    solutionPanel.appendChild(codeWrap);

    toggleSolution.addEventListener("click", function () {
      var open = solutionPanel.classList.toggle("open");
      toggleSolution.textContent = open ? "Hide Solution" : "Show Solution";
      if (open) {
        solutionPanel.scrollIntoView({ block: "nearest" });
      }
    });

    bookmarkButton.addEventListener("click", function () {
      var bookmarks = toggleBookmark(question.id);
      var active = bookmarks.indexOf(question.id) >= 0;
      bookmarkButton.textContent = active ? "Bookmarked" : "Bookmark";
      bookmarkButton.classList.toggle("active", active);
      document.dispatchEvent(new CustomEvent("codecrack:bookmark-change"));
    });

    progressButton.addEventListener("click", function () {
      var next = cycleProgress(question.id);
      progressButton.textContent =
        next === "not-started" ? "Mark Studied" : next === "learning" ? "Mark Mastered" : "Reset Progress";
      progressButton.classList.toggle("active", next !== "not-started");
      document.dispatchEvent(new CustomEvent("codecrack:progress-change"));
    });

    card.append(meta, title, problem, tags, actions, solutionPanel);
    return card;
  }

  function getQueryParam(key) {
    return new URLSearchParams(window.location.search).get(key) || "";
  }

  function summarizeProgress() {
    var progress = getProgress();
    var values = Object.values(progress);
    return {
      learning: values.filter(function (status) {
        return status === "learning";
      }).length,
      mastered: values.filter(function (status) {
        return status === "mastered";
      }).length,
      bookmarks: getBookmarks().length
    };
  }

  function saveQuizHistory(record) {
    var history = JSON.parse(localStorage.getItem(storageKeys.quizHistory) || "[]");
    history.unshift(record);
    localStorage.setItem(storageKeys.quizHistory, JSON.stringify(history.slice(0, 12)));
  }

  function getQuizHistory() {
    return JSON.parse(localStorage.getItem(storageKeys.quizHistory) || "[]");
  }

  function init() {
    initTheme();
    initNav();
    initGlobalSearch();
    initReveal();
  }

  window.CodeCrackApp = {
    storageKeys: storageKeys,
    init: init,
    getBookmarks: getBookmarks,
    toggleBookmark: toggleBookmark,
    getProgress: getProgress,
    cycleProgress: cycleProgress,
    getTopicById: getTopicById,
    getQuestionById: getQuestionById,
    getTopicLabel: getTopicLabel,
    createQuestionCard: createQuestionCard,
    createChip: createChip,
    createTag: createTag,
    getQueryParam: getQueryParam,
    summarizeProgress: summarizeProgress,
    saveQuizHistory: saveQuizHistory,
    getQuizHistory: getQuizHistory,
    refreshReveal: refreshReveal,
    copyText: copyText
  };

  document.addEventListener("DOMContentLoaded", init);
})();
