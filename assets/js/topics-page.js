(function () {
  function escapeHtml(value) {
    return value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function createTable(table) {
    if (!table) {
      return "";
    }
    var header = table.headers.map(function (item) {
      return "<th>" + item + "</th>";
    });
    var rows = table.rows
      .map(function (row) {
        return (
          "<tr>" +
          row
            .map(function (cell) {
              return "<td>" + cell + "</td>";
            })
            .join("") +
          "</tr>"
        );
      })
      .join("");
    return "<div class='table-wrap'><table class='data-table'><thead><tr>" + header.join("") + "</tr></thead><tbody>" + rows + "</tbody></table></div>";
  }

  function createConceptCard(section) {
    return (
      "<article class='glass-card'>" +
      "<h3>" +
      section.title +
      "</h3><p>" +
      section.explanation +
      "</p><div class='detail-pair'><strong>Syntax</strong><pre class='syntax-block'><code>" +
      escapeHtml(section.syntax) +
      "</code></pre></div><div class='detail-pair'><strong>Example</strong><pre class='syntax-block'><code>" +
      escapeHtml(section.example) +
      "</code></pre></div><div class='detail-columns'><div class='detail-pair'><strong>Common Mistakes</strong><span>" +
      section.mistakes.join("; ") +
      "</span></div><div class='detail-pair'><strong>Tricks</strong><span>" +
      section.tricks.join("; ") +
      "</span></div></div></article>"
    );
  }

  function createPatternCard(pattern) {
    return (
      "<article class='glass-card'><h3>" +
      pattern.title +
      "</h3><pre class='pattern-output'>" +
      pattern.output +
      "</pre><div class='detail-pair'><strong>Logic</strong><span>" +
      pattern.logic +
      "</span></div><div class='detail-pair'><strong>Dry Run</strong><span>" +
      pattern.dryRun +
      "</span></div></article>"
    );
  }

  function renderQuickNav() {
    var grid = document.getElementById("topicQuickNav");
    if (!grid) {
      return;
    }

    window.CodeCrackData.topics.forEach(function (topic) {
      var card = document.createElement("a");
      card.className = "quick-nav-card reveal";
      card.href = "#" + topic.id;
      card.innerHTML = "<strong>" + topic.title + "</strong><p>" + topic.shortFocus + "</p>";
      grid.appendChild(card);
    });
  }

  function renderTopics() {
    var container = document.getElementById("topicsContainer");
    if (!container) {
      return;
    }

    window.CodeCrackData.topics.forEach(function (topic) {
      var questionCount = window.CodeCrackData.questions.filter(function (question) {
        return question.topic === topic.id;
      }).length;

      var article = document.createElement("article");
      article.className = "topic-section reveal";
      article.id = topic.id;

      var patternMarkup = topic.patternSamples
        ? "<div class='pattern-grid'>" +
          topic.patternSamples
            .map(function (pattern) {
              return createPatternCard(pattern);
            })
            .join("") +
          "</div>"
        : "";

      article.innerHTML =
        "<div class='topic-header'><div><span class='pill'>" +
        topic.level +
        "</span><h2>" +
        topic.title +
        "</h2><p>" +
        topic.description +
        "</p><ul class='topic-bullets'>" +
        topic.mustKnow
          .map(function (item) {
            return "<li>" + item + "</li>";
          })
          .join("") +
        "</ul><div class='hero-actions'><a class='btn btn-secondary' href='questions.html?topic=" +
        topic.id +
        "'>Practice " +
        questionCount +
        " questions</a></div></div><div><img class='topic-visual' src='" +
        topic.visual +
        "' alt='" +
        topic.visualAlt +
        "'><div class='chip-row'>" +
        topic.focusCompanies
          .map(function (company) {
            return "<span class='chip'>" + company + "</span>";
          })
          .join("") +
        "</div></div></div><div class='topic-body'><div class='concept-grid'>" +
        topic.sections
          .map(function (section) {
            return createConceptCard(section);
          })
          .join("") +
        "</div>" +
        (topic.table ? createTable(topic.table) : "") +
        patternMarkup +
        "<div class='glass-card'><h3>Interview Signals</h3><ul class='topic-bullets'>" +
        topic.interviewSignals
          .map(function (item) {
            return "<li>" + item + "</li>";
          })
          .join("") +
        "</ul></div></div>";

      container.appendChild(article);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderQuickNav();
    renderTopics();
    window.CodeCrackApp.refreshReveal();
  });
})();
