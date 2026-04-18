(function () {
  function renderHeroMetrics() {
    var container = document.getElementById("heroMetrics");
    if (!container) {
      return;
    }
    window.CodeCrackData.heroMetrics.forEach(function (metric) {
      var chip = document.createElement("div");
      chip.className = "metric-chip";
      chip.innerHTML = "<strong>" + metric.value + "</strong><span>" + metric.label + "</span>";
      container.appendChild(chip);
    });
  }

  function renderHeroTracks() {
    var container = document.getElementById("heroTracks");
    if (!container) {
      return;
    }
    window.CodeCrackData.featuredTracks.forEach(function (track) {
      var chip = document.createElement("div");
      chip.className = "chip";
      chip.innerHTML = "<strong>" + track.title + "</strong><span>" + track.detail + "</span>";
      container.appendChild(chip);
    });
  }

  function renderRoadmap() {
    var grid = document.getElementById("roadmapGrid");
    if (!grid) {
      return;
    }
    window.CodeCrackData.roadmap.forEach(function (item) {
      var card = document.createElement("article");
      card.className = "roadmap-card glass-card reveal";
      card.innerHTML =
        "<span class='pill'>" +
        item.title +
        "</span><h3>" +
        item.subtitle +
        "</h3><p>" +
        item.description +
        "</p>";
      grid.appendChild(card);
    });
  }

  function renderCompanyTable() {
    var table = document.getElementById("companyTable");
    if (!table) {
      return;
    }
    var head =
      "<thead><tr><th>Company</th><th>Focus</th><th>Rounds</th><th>Must Do</th><th>Difficulty</th></tr></thead>";
    var rows = window.CodeCrackData.companies
      .map(function (company) {
        return (
          "<tr><td>" +
          company.company +
          "</td><td>" +
          company.focus +
          "</td><td>" +
          company.rounds +
          "</td><td>" +
          company.mustDo +
          "</td><td>" +
          company.difficulty +
          "</td></tr>"
        );
      })
      .join("");
    table.innerHTML = head + "<tbody>" + rows + "</tbody>";
  }

  function renderFeaturedTopics() {
    var grid = document.getElementById("featuredTopics");
    if (!grid) {
      return;
    }

    window.CodeCrackData.topics.slice(0, 8).forEach(function (topic) {
      var count = window.CodeCrackData.questions.filter(function (question) {
        return question.topic === topic.id;
      }).length;
      var card = document.createElement("article");
      card.className = "feature-card glass-card reveal";
      card.innerHTML =
        "<span class='pill'>" +
        topic.level +
        "</span><h3>" +
        topic.title +
        "</h3><p>" +
        topic.description +
        "</p><div class='chip-row'><span class='chip'><strong>" +
        count +
        "</strong><span>questions</span></span><span class='chip'><strong>" +
        topic.focusCompanies.join(", ") +
        "</strong></span></div><div class='hero-actions'><a class='btn btn-secondary' href='topics.html#" +
        topic.id +
        "'>Read Topic</a></div>";
      grid.appendChild(card);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderHeroMetrics();
    renderHeroTracks();
    renderRoadmap();
    renderCompanyTable();
    renderFeaturedTopics();
    window.CodeCrackApp.refreshReveal();
  });
})();
