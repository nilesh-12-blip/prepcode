(function () {
  var currentId = "";

  function buildSummary() {
    var wrap = document.getElementById("solutionSummary");
    if (!wrap) {
      return;
    }
    var summary = window.CodeCrackApp.summarizeProgress();
    wrap.innerHTML = "";
    wrap.appendChild(window.CodeCrackApp.createChip(summary.bookmarks + " bookmarked"));
    wrap.appendChild(window.CodeCrackApp.createChip(summary.learning + " in progress"));
    wrap.appendChild(window.CodeCrackApp.createChip(summary.mastered + " mastered"));
  }

  function getPreferredList(query) {
    var bookmarks = window.CodeCrackApp.getBookmarks();
    var ordered = window.CodeCrackData.questions
      .slice()
      .sort(function (a, b) {
        var aPriority = bookmarks.indexOf(a.id) >= 0 ? 0 : 1;
        var bPriority = bookmarks.indexOf(b.id) >= 0 ? 0 : 1;
        if (aPriority !== bPriority) {
          return aPriority - bPriority;
        }
        return a.title.localeCompare(b.title);
      });

    return ordered.filter(function (question) {
      if (!query) {
        return true;
      }
      return [question.title, question.problem, question.topic].join(" ").toLowerCase().indexOf(query.toLowerCase()) >= 0;
    });
  }

  function renderList(query) {
    var list = document.getElementById("solutionList");
    if (!list) {
      return;
    }

    var items = getPreferredList(query);
    list.innerHTML = "";

    if (!items.length) {
      list.innerHTML = "<div class='empty-state'>No questions found for this search.</div>";
      return;
    }

    if (!currentId || !window.CodeCrackApp.getQuestionById(currentId)) {
      currentId = items[0].id;
    }

    items.forEach(function (question) {
      var item = document.createElement("button");
      item.type = "button";
      item.className = "solution-item" + (question.id === currentId ? " active" : "");
      var status = window.CodeCrackApp.getProgress()[question.id] || "not-started";
      item.innerHTML =
        "<strong>" +
        question.title +
        "</strong><span>" +
        window.CodeCrackApp.getTopicLabel(question.topic) +
        "</span><span>" +
        status.replace("-", " ") +
        "</span>";
      item.addEventListener("click", function () {
        currentId = question.id;
        renderList(query);
        renderDetail(question.id);
      });
      list.appendChild(item);
    });

    if (currentId) {
      renderDetail(currentId);
    }
  }

  function renderDetail(id) {
    var detail = document.getElementById("solutionDetail");
    var question = window.CodeCrackApp.getQuestionById(id);
    if (!detail || !question) {
      return;
    }

    var status = window.CodeCrackApp.getProgress()[question.id] || "not-started";
    var bookmarked = window.CodeCrackApp.getBookmarks().indexOf(question.id) >= 0;

    detail.innerHTML =
      "<div class='solution-header'><div><span class='pill'>" +
      window.CodeCrackApp.getTopicLabel(question.topic) +
      "</span><h2>" +
      question.title +
      "</h2><p>" +
      question.problem +
      "</p></div><div class='solution-actions'><button class='question-bookmark'>" +
      (bookmarked ? "Bookmarked" : "Bookmark") +
      "</button><button class='question-progress'>" +
      (status === "not-started" ? "Mark Studied" : status === "learning" ? "Mark Mastered" : "Reset Progress") +
      "</button></div></div>" +
      "<div class='detail-columns'><div class='detail-pair'><strong>Intuition</strong><span>" +
      question.intuition +
      "</span></div><div class='detail-pair'><strong>Approach</strong><span>" +
      question.approach +
      "</span></div><div class='detail-pair'><strong>Dry Run</strong><span>" +
      question.dryRun +
      "</span></div><div class='detail-pair'><strong>Complexity</strong><span>" +
      question.complexity +
      "</span></div></div><div class='detail-pair'><strong>Common Mistakes</strong><span>" +
      question.mistakes.join("; ") +
      "</span></div><div class='detail-pair'><strong>Interview Tip</strong><span>" +
      question.tip +
      "</span></div>" +
      (question.output
        ? "<div class='detail-pair'><strong>Visual Output</strong><pre class='pattern-output'>" + question.output + "</pre></div>"
        : "") +
      "<div class='detail-pair'><strong>Java Code</strong><button class='copy-code-btn'>Copy Code</button><pre><code>" +
      question.code.replace(/</g, "&lt;").replace(/>/g, "&gt;") +
      "</code></pre></div>";

    detail.querySelector(".copy-code-btn").addEventListener("click", function () {
      var button = this;
      window.CodeCrackApp.copyText(question.code).then(function () {
        button.textContent = "Copied";
        setTimeout(function () {
          button.textContent = "Copy Code";
        }, 1000);
      });
    });

    detail.querySelector(".question-bookmark").addEventListener("click", function () {
      window.CodeCrackApp.toggleBookmark(question.id);
      buildSummary();
      renderList(document.getElementById("solutionSearch").value.trim());
      renderDetail(question.id);
    });

    detail.querySelector(".question-progress").addEventListener("click", function () {
      window.CodeCrackApp.cycleProgress(question.id);
      buildSummary();
      renderList(document.getElementById("solutionSearch").value.trim());
      renderDetail(question.id);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    currentId = window.CodeCrackApp.getQueryParam("id");
    buildSummary();
    renderList("");
    var search = document.getElementById("solutionSearch");
    if (search) {
      search.addEventListener("input", function () {
        renderList(search.value.trim());
      });
    }
  });
})();
