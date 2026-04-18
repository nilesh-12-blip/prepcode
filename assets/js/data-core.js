(function () {
  function slugify(value) {
    return value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  window.CodeCrackData = {
    brand: {
      name: "CodeCrack Elite",
      tagline: "Placement Prep Command Center"
    },
    heroMetrics: [
      { value: "120+", label: "curated questions" },
      { value: "14", label: "major tracks" },
      { value: "5", label: "placement company buckets" },
      { value: "100%", label: "frontend-only build" }
    ],
    featuredTracks: [
      { title: "Service-Based Sprint", detail: "TCS, Infosys, Wipro, Capgemini" },
      { title: "Java Core Stack", detail: "Basics, OOP, Collections" },
      { title: "DSA Ladder", detail: "Arrays to Dynamic Programming" },
      { title: "Interview Finish", detail: "MCQs, HR, company strategy" }
    ],
    roadmap: [
      {
        title: "Phase 1",
        subtitle: "Programming Fluency",
        description: "Build syntax confidence with variables, loops, functions, dry runs, and common TCS NQT logic patterns."
      },
      {
        title: "Phase 2",
        subtitle: "Pattern & Math Speed",
        description: "Sharpen loop thinking with pattern printing and master prime checks, GCD/LCM, modular math, and basic bits."
      },
      {
        title: "Phase 3",
        subtitle: "Java Foundations",
        description: "Understand OOP, collections, use-cases, and internal working so theory rounds stop feeling random."
      },
      {
        title: "Phase 4",
        subtitle: "Core DSA",
        description: "Cover the interview staples: arrays, strings, linked list, stack, queue, trees, and graphs."
      },
      {
        title: "Phase 5",
        subtitle: "Problem-Solving Depth",
        description: "Train recursion, backtracking, sliding windows, greedy choices, and dynamic programming transitions."
      },
      {
        title: "Phase 6",
        subtitle: "Company-Specific Readiness",
        description: "Combine coding questions, aptitude, MCQs, and HR answers for placement test and interview day execution."
      }
    ],
    companies: [
      {
        company: "TCS NQT",
        focus: "Programming basics, number logic, patterns, aptitude, moderate coding",
        rounds: "NQT + interview",
        mustDo: "Basics, math, patterns, arrays, HR prep",
        difficulty: "Easy-Medium"
      },
      {
        company: "Infosys / Wipro",
        focus: "Control flow, strings, Java basics, patterns, MCQs",
        rounds: "Assessment + technical + HR",
        mustDo: "Basics, collections, strings, OOP, interview answers",
        difficulty: "Easy-Medium"
      },
      {
        company: "Capgemini / Cognizant",
        focus: "Aptitude, coding logic, simple DSA, debugging",
        rounds: "Assessment + pseudo/automata + interview",
        mustDo: "Patterns, math, arrays, recursion basics",
        difficulty: "Easy-Medium"
      },
      {
        company: "Amazon-style OA",
        focus: "Arrays, strings, stacks, queues, trees, graphs, sliding window",
        rounds: "Online assessment + DSA interview",
        mustDo: "DSA core, complexity, edge cases, clean explanation",
        difficulty: "Medium-Hard"
      },
      {
        company: "General Product Companies",
        focus: "Depth in problem solving, recursion, DP, graph traversal",
        rounds: "OA + 2 to 4 interviews",
        mustDo: "Patterns, DSA, systematized dry runs, interview tips",
        difficulty: "Medium-Hard"
      }
    ],
    topics: [],
    questions: [],
    quizQuestions: [],
    helpers: {
      slugify,
      q: function (topic, title, difficulty, companies, data) {
        return Object.assign(
          {
            id: slugify(topic + "-" + title),
            topic: topic,
            title: title,
            difficulty: difficulty,
            companies: companies
          },
          data
        );
      },
      addTopics: function () {
        window.CodeCrackData.topics.push.apply(window.CodeCrackData.topics, arguments);
      },
      addQuestions: function () {
        window.CodeCrackData.questions.push.apply(window.CodeCrackData.questions, arguments);
      },
      addQuiz: function () {
        window.CodeCrackData.quizQuestions.push.apply(window.CodeCrackData.quizQuestions, arguments);
      }
    }
  };
})();
