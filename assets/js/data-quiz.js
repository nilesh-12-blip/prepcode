(function () {
  var addQuiz = window.CodeCrackData.helpers.addQuiz;

  addQuiz(
    {
      topic: "programming-basics",
      difficulty: "Easy",
      question: "Which operator is best for extracting the last digit of a number in Java?",
      context: "Digit-based questions are very common in TCS NQT and beginner coding rounds.",
      options: ["/ 10", "% 10", "* 10", "Math.sqrt"],
      answer: 1,
      explanation: "n % 10 returns the last digit, while n / 10 removes the last digit in integer arithmetic."
    },
    {
      topic: "programming-basics",
      difficulty: "Easy",
      question: "What is the safest loop condition when reversing an array using two pointers?",
      context: "Two-pointer basics appear in arrays, strings, and linked-list style reasoning.",
      options: ["left <= right", "left < right", "left == right", "right < left"],
      answer: 1,
      explanation: "left < right avoids unnecessary self-swaps and stops when the pointers cross or meet."
    },
    {
      topic: "pattern-printing",
      difficulty: "Easy",
      question: "In a centered pyramid, what is the usual star count for row i?",
      context: "Pyramid patterns are derived from formulas for spaces and symbols.",
      options: ["i", "n - i", "2 * i - 1", "2 * n - i"],
      answer: 2,
      explanation: "A centered pyramid uses odd star counts: 1, 3, 5, 7, so the formula is 2*i - 1."
    },
    {
      topic: "mathematics",
      difficulty: "Easy",
      question: "Why do we check divisors only up to square root of n in prime checking?",
      context: "This is a common optimization explanation in assessments.",
      options: ["Because factors appear in pairs", "Because Java loops stop there automatically", "Because all numbers above sqrt are prime", "Because modulo fails after sqrt"],
      answer: 0,
      explanation: "If n has a factor larger than sqrt(n), the paired factor must be smaller than sqrt(n)."
    },
    {
      topic: "mathematics",
      difficulty: "Medium",
      question: "Which expression checks whether positive n is a power of two?",
      context: "Bit manipulation is often tested through compact tricks.",
      options: ["n % 2 == 0", "(n & (n - 1)) == 0", "(n | (n - 1)) == 0", "n / 2 == 1"],
      answer: 1,
      explanation: "A power of two has exactly one set bit, and n & (n-1) removes the last set bit."
    },
    {
      topic: "oop",
      difficulty: "Easy",
      question: "Which OOP concept hides data and exposes controlled access?",
      context: "Service-based interviews frequently ask direct OOP definitions.",
      options: ["Inheritance", "Encapsulation", "Polymorphism", "Compilation"],
      answer: 1,
      explanation: "Encapsulation means data hiding plus controlled access through methods."
    },
    {
      topic: "oop",
      difficulty: "Medium",
      question: "Method overriding is mainly associated with which type of polymorphism?",
      context: "Knowing overloading versus overriding is a core Java interview requirement.",
      options: ["Compile-time polymorphism", "Runtime polymorphism", "No polymorphism", "Static binding only"],
      answer: 1,
      explanation: "Overriding is resolved based on the runtime object, so it is runtime polymorphism."
    },
    {
      topic: "collections",
      difficulty: "Easy",
      question: "Which collection should you choose for unique values with sorted order?",
      context: "Collection selection questions are common in Java technical rounds.",
      options: ["ArrayList", "HashSet", "TreeSet", "LinkedList"],
      answer: 2,
      explanation: "TreeSet removes duplicates and maintains sorted order."
    },
    {
      topic: "collections",
      difficulty: "Medium",
      question: "Which method is commonly used to simplify frequency counting with HashMap?",
      context: "Frequency maps appear in anagram, duplicate, and counting problems.",
      options: ["getOrDefault", "reverse", "poll", "subList"],
      answer: 0,
      explanation: "getOrDefault lets you fetch an existing count or zero if the key is absent."
    },
    {
      topic: "arrays",
      difficulty: "Medium",
      question: "Kadane's algorithm solves which classic problem?",
      context: "Kadane's algorithm is a frequent product-company array question.",
      options: ["Two sum", "Maximum subarray sum", "Array rotation", "Majority element"],
      answer: 1,
      explanation: "Kadane's algorithm tracks the best contiguous subarray sum in linear time."
    },
    {
      topic: "arrays",
      difficulty: "Medium",
      question: "Which technique answers static range sum queries in constant time after preprocessing?",
      context: "Prefix sums are a foundational optimization technique.",
      options: ["Bubble sort", "Prefix sum", "DFS", "Stack"],
      answer: 1,
      explanation: "Prefix sums store cumulative totals, making range sums a subtraction of two stored values."
    },
    {
      topic: "strings",
      difficulty: "Medium",
      question: "Which technique is best for longest substring without repeating characters?",
      context: "This is one of the most repeated string interview problems.",
      options: ["Binary search", "Sliding window", "Topological sort", "Tree traversal"],
      answer: 1,
      explanation: "A sliding window maintains a valid substring and moves its boundaries as duplicates appear."
    },
    {
      topic: "linked-list",
      difficulty: "Medium",
      question: "Which pointer strategy finds the middle of a linked list in one pass?",
      context: "Slow-fast pointer is a linked-list essential.",
      options: ["Two stacks", "Slow and fast pointers", "Prefix sum", "HashMap only"],
      answer: 1,
      explanation: "Fast moves two steps while slow moves one, so slow reaches the middle when fast reaches the end."
    },
    {
      topic: "stack-queue",
      difficulty: "Medium",
      question: "Which data structure is ideal for sliding window maximum in linear time?",
      context: "Deque-based windows are a high-value interview pattern.",
      options: ["Deque", "Plain array only", "Recursive stack", "TreeMap always"],
      answer: 0,
      explanation: "A deque stores useful candidate indices in decreasing order, so the front gives the window maximum."
    },
    {
      topic: "trees",
      difficulty: "Easy",
      question: "Which traversal of a BST gives sorted values?",
      context: "BST properties are asked frequently in product interviews.",
      options: ["Preorder", "Inorder", "Postorder", "Level order"],
      answer: 1,
      explanation: "Inorder traversal visits left, root, right, which is sorted for a valid BST."
    },
    {
      topic: "graphs",
      difficulty: "Medium",
      question: "Which traversal finds shortest path in an unweighted graph?",
      context: "Graph questions often depend on choosing BFS versus DFS correctly.",
      options: ["DFS", "BFS", "Postorder", "Kadane"],
      answer: 1,
      explanation: "BFS visits by edge distance levels, so the first time it reaches a node is shortest in an unweighted graph."
    },
    {
      topic: "graphs",
      difficulty: "Hard",
      question: "Dijkstra's algorithm requires which edge condition?",
      context: "This is a key correctness detail for shortest path interviews.",
      options: ["All edges are negative", "No edge weights exist", "All weights are non-negative", "The graph must be a tree"],
      answer: 2,
      explanation: "Dijkstra assumes non-negative edge weights because it commits to the current shortest extracted node."
    },
    {
      topic: "recursion",
      difficulty: "Medium",
      question: "What are the three words that describe classic backtracking?",
      context: "Backtracking is easier when you can explain the state changes clearly.",
      options: ["Sort, scan, stop", "Choose, recurse, unchoose", "Push, poll, peek", "Hash, compare, return"],
      answer: 1,
      explanation: "Backtracking makes a choice, explores recursively, then undoes that choice before trying the next one."
    },
    {
      topic: "dynamic-programming",
      difficulty: "Medium",
      question: "What is the most important first step in a DP problem?",
      context: "DP interviews heavily reward clarity of state definition.",
      options: ["Start coding loops immediately", "Define the state", "Sort the input always", "Use a queue"],
      answer: 1,
      explanation: "The state explains what each DP entry means; transitions and base cases depend on it."
    },
    {
      topic: "dynamic-programming",
      difficulty: "Medium",
      question: "Which DP problem is based on choosing to take or skip adjacent houses?",
      context: "Recognizing choice patterns helps map new problems to known DP templates.",
      options: ["House Robber", "Flood Fill", "Valid Parentheses", "Floyd's Triangle"],
      answer: 0,
      explanation: "House Robber compares taking the current house plus previous safe answer versus skipping it."
    },
    {
      topic: "interview-prep",
      difficulty: "Easy",
      question: "For TCS NQT, which practice area should not be ignored?",
      context: "NQT preparation is broader than only DSA.",
      options: ["Only hard graph problems", "Aptitude, basics, patterns, and communication", "Only system design", "Only frontend styling"],
      answer: 1,
      explanation: "TCS NQT rewards balanced preparation across aptitude, basic coding, patterns, and interview communication."
    },
    {
      topic: "interview-prep",
      difficulty: "Easy",
      question: "Which structure is best for answering HR behavioral questions?",
      context: "HR answers should be honest but organized.",
      options: ["Random storytelling", "STAR or situation-task-action-result style", "Only one-word answers", "Reading code aloud"],
      answer: 1,
      explanation: "STAR keeps answers specific, concise, and evidence-based."
    },
    {
      topic: "interview-prep",
      difficulty: "Medium",
      question: "In a product-company coding interview, what should you usually do before coding?",
      context: "Communication quality is a major selection signal.",
      options: ["Clarify constraints and discuss brute force", "Write final code silently", "Ignore edge cases", "Skip complexity"],
      answer: 0,
      explanation: "Clarifying constraints, examples, brute force, and optimization path shows structured problem solving."
    }
  );
})();
