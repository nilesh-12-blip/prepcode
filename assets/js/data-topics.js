(function () {
  var addTopics = window.CodeCrackData.helpers.addTopics;

  addTopics(
    {
      id: "programming-basics",
      title: "Programming Basics",
      shortFocus: "Variables, operators, loops, functions, number logic",
      level: "Foundation",
      description:
        "This track builds the raw coding fluency needed for TCS NQT, Infosys, Wipro, and every beginner interview round. Learn how values move through a program, how branches and loops change control flow, and how functions break logic into reusable units.",
      visual: "assets/images/basics.svg",
      visualAlt: "Programming basics flow diagram",
      focusCompanies: ["TCS NQT", "Infosys", "Wipro"],
      mustKnow: [
        "Know declaration, initialization, and type compatibility.",
        "Dry run every loop on paper before you code it.",
        "Use functions to isolate repeated logic and improve readability.",
        "Master number problems because service-based tests ask them repeatedly."
      ],
      sections: [
        {
          title: "Variables & Data Types",
          explanation: "Variables store data, and the chosen data type defines what values and operations are valid.",
          syntax: "int age = 21;\ndouble cgpa = 8.4;\nchar grade = 'A';\nboolean placed = false;",
          example: "int radius = 7;\ndouble area = 3.14 * radius * radius;\nSystem.out.println(area);",
          mistakes: ["Forgetting initialization", "Mixing int and double carelessly", "Using the wrong type for large values"],
          tricks: ["Prefer meaningful names", "Use long when integer overflow is possible", "Read constraints before choosing a type"]
        },
        {
          title: "Operators",
          explanation: "Operators help you transform, compare, and combine values. Interviews often check whether you understand precedence and integer division.",
          syntax: "int sum = a + b;\nboolean ok = x >= y && y != 0;\nint rem = n % 10;",
          example: "int marks = 87;\nString result = marks >= 40 ? \"Pass\" : \"Fail\";",
          mistakes: ["Confusing == with =", "Ignoring integer division behavior", "Missing parentheses in mixed expressions"],
          tricks: ["Use modulo for digit problems", "Use parentheses to make intent explicit", "Explain operator precedence during interviews"]
        },
        {
          title: "Conditional Statements",
          explanation: "Conditions decide which path your program follows. This is the backbone of menu-driven and logic-based assessment problems.",
          syntax: "if (score >= 90) {\n    grade = 'A';\n} else if (score >= 75) {\n    grade = 'B';\n} else {\n    grade = 'C';\n}",
          example: "switch (day) {\n    case 1: System.out.println(\"Mon\"); break;\n    default: System.out.println(\"Invalid\");\n}",
          mistakes: ["Overlapping conditions", "Missing break in switch", "Checking broader condition before narrower one"],
          tricks: ["Order cases from most specific to most general", "Use switch for clean menu handling", "Write boundary cases explicitly"]
        },
        {
          title: "Loops",
          explanation: "Loops repeat work efficiently and power almost every number, array, and pattern problem in entry-level coding rounds.",
          syntax: "for (int i = 0; i < n; i++) {\n    System.out.println(i);\n}\n\nwhile (n > 0) {\n    n /= 10;\n}",
          example: "int sum = 0;\nfor (int i = 1; i <= n; i++) {\n    sum += i;\n}",
          mistakes: ["Off-by-one errors", "Infinite loops", "Updating the wrong variable inside the loop"],
          tricks: ["Decide start, stop, update before coding", "Trace i for first three iterations", "Use while when the number of iterations depends on input state"]
        },
        {
          title: "Functions",
          explanation: "Functions package logic, reduce duplication, and make your code interview-friendly and easy to debug.",
          syntax: "static int add(int a, int b) {\n    return a + b;\n}",
          example: "static boolean isEven(int n) {\n    return n % 2 == 0;\n}\n\nSystem.out.println(isEven(14));",
          mistakes: ["Wrong return type", "Forgetting return", "Changing global state when not needed"],
          tricks: ["Write helper functions for repeated checks", "Keep one function responsible for one job", "Use clear parameter names"]
        }
      ],
      table: {
        headers: ["Concept", "Use When", "Example", "Interview Trap"],
        rows: [
          ["int", "Whole number within range", "age, count", "Overflow on multiplication"],
          ["double", "Decimal precision is needed", "percentage, area", "Comparing doubles directly"],
          ["if-else", "Conditions are unequal or range-based", "grade system", "Wrong condition order"],
          ["switch", "Many exact discrete cases", "menu choice", "Missing break statements"],
          ["function", "Same logic repeats", "prime check helper", "Using print when return is needed"]
        ]
      },
      interviewSignals: [
        "TCS NQT often starts with number logic built from loops and modulo.",
        "Infosys and Wipro frequently test if-else, switch, and simple function decomposition.",
        "Explain one dry run cleanly and you already sound more confident than most beginners."
      ]
    },
    {
      id: "pattern-printing",
      title: "Pattern Printing",
      shortFocus: "Nested loops, row-column thinking, dry runs",
      level: "Foundation",
      description:
        "Pattern printing is less about memorizing shapes and more about learning nested-loop control, row-column relationships, and printing logic with confidence. It is a classic TCS, Infosys, and Wipro warm-up area.",
      visual: "assets/images/patterns.svg",
      visualAlt: "Pattern printing visual sheet",
      focusCompanies: ["TCS NQT", "Infosys", "Capgemini"],
      mustKnow: [
        "Think row wise first, then decide how columns behave.",
        "Convert every pattern into outer-loop and inner-loop responsibilities.",
        "Dry run small values like n = 3 or n = 5 before writing code."
      ],
      sections: [
        {
          title: "Star Patterns",
          explanation: "Star patterns teach how to repeat the same symbol based on row count and spacing rules.",
          syntax: "for (int row = 1; row <= n; row++) {\n    for (int col = 1; col <= row; col++) {\n        System.out.print(\"* \");\n    }\n    System.out.println();\n}",
          example: "For a right triangle, row 1 prints 1 star, row 2 prints 2 stars, and so on.",
          mistakes: ["Using wrong loop bounds", "Forgetting newline after each row", "Mixing spaces and symbols inconsistently"],
          tricks: ["Ask what changes per row", "Count spaces separately", "Use row and n to derive column limits"]
        },
        {
          title: "Number Patterns",
          explanation: "Number patterns strengthen logic because the printed value may depend on row index, column index, or a running counter.",
          syntax: "int value = 1;\nfor (int row = 1; row <= n; row++) {\n    for (int col = 1; col <= row; col++) {\n        System.out.print(value++ + \" \");\n    }\n    System.out.println();\n}",
          example: "Floyd's triangle uses a counter that keeps increasing across rows instead of resetting each row.",
          mistakes: ["Resetting counter accidentally", "Printing row when col is needed", "Not noticing diagonal relationships"],
          tricks: ["Write one row on paper", "Decide reset versus carry-forward variables", "Use helper variables for current number"]
        },
        {
          title: "Pyramid Logic",
          explanation: "Pyramids combine spaces and symbols, which makes them perfect for nested-loop mastery.",
          syntax: "for (int row = 1; row <= n; row++) {\n    for (int space = 1; space <= n - row; space++) System.out.print(\" \");\n    for (int star = 1; star <= 2 * row - 1; star++) System.out.print(\"*\");\n    System.out.println();\n}",
          example: "A centered pyramid prints n-row leading spaces and then 2*row-1 symbols.",
          mistakes: ["Wrong space count", "Using row instead of 2*row-1", "Losing alignment due to extra spaces"],
          tricks: ["Separate spaces and symbols mentally", "Solve half-pyramid first", "Use formula 2*row-1 for odd counts"]
        }
      ],
      patternSamples: [
        {
          title: "Right Triangle",
          output: "*\n* *\n* * *\n* * * *",
          logic: "Outer loop controls row number, inner loop prints stars equal to the current row.",
          dryRun: "At row 3, the inner loop runs three times, so the line contains three stars."
        },
        {
          title: "Centered Pyramid",
          output: "   *\n  ***\n *****\n*******",
          logic: "Print spaces first, then print an odd number of stars using 2*row-1.",
          dryRun: "At row 2 for n = 4, spaces = 2 and stars = 3."
        },
        {
          title: "Floyd's Triangle",
          output: "1\n2 3\n4 5 6\n7 8 9 10",
          logic: "Use a counter that increments on every print, even across row boundaries.",
          dryRun: "After row 2 prints 2 and 3, the next number is 4 for row 3."
        }
      ],
      interviewSignals: [
        "Pattern questions are hidden loop questions, so explain the role of outer versus inner loop clearly.",
        "Service-based rounds like to test simple-to-medium star and number patterns.",
        "Once you can derive the formula for stars or spaces, new patterns stop feeling random."
      ]
    },
    {
      id: "mathematics",
      title: "Mathematics for DSA",
      shortFocus: "Prime, GCD, LCM, modular arithmetic, bit basics",
      level: "Foundation",
      description:
        "Fast mathematical reasoning reduces brute force and helps you solve coding problems with cleaner time complexity. This section focuses on interview-ready number theory patterns that appear in both assessments and technical rounds.",
      visual: "assets/images/math.svg",
      visualAlt: "Mathematics and bit logic diagram",
      focusCompanies: ["TCS NQT", "Capgemini", "Amazon-style OA"],
      mustKnow: [
        "Square root optimization changes prime checking from slow to practical.",
        "GCD and LCM are frequently used in divisibility and fraction style questions.",
        "Bit tricks help with parity, power of two, and counting set bits."
      ],
      sections: [
        {
          title: "Prime Numbers",
          explanation: "A prime has exactly two factors. Interview solutions improve by checking divisors only up to square root of n.",
          syntax: "boolean isPrime(int n) {\n    if (n < 2) return false;\n    for (int i = 2; i * i <= n; i++) {\n        if (n % i == 0) return false;\n    }\n    return true;\n}",
          example: "For 29, checking divisors up to 5 is enough because 6 * 6 is already greater than 29.",
          mistakes: ["Treating 1 as prime", "Checking until n-1", "Missing the square root condition"],
          tricks: ["Stop at i*i <= n", "Handle n < 2 first", "Explain factor pairing in interviews"]
        },
        {
          title: "GCD & LCM",
          explanation: "GCD gives the greatest common divisor and LCM gives the least common multiple. Euclid's algorithm solves GCD elegantly.",
          syntax: "int gcd(int a, int b) {\n    while (b != 0) {\n        int temp = a % b;\n        a = b;\n        b = temp;\n    }\n    return a;\n}",
          example: "LCM can be derived using lcm = (a / gcd(a, b)) * b to reduce overflow risk.",
          mistakes: ["Multiplying before division for LCM", "Ignoring negative inputs", "Using repeated subtraction when modulo is faster"],
          tricks: ["Reuse GCD for LCM", "Divide first to reduce overflow", "Say Euclid's algorithm aloud during interviews"]
        },
        {
          title: "Modular Arithmetic",
          explanation: "Modulo keeps numbers bounded and is essential for large answer problems, especially when powers grow quickly.",
          syntax: "long modAdd = (a % mod + b % mod) % mod;\nlong modMul = ((a % mod) * (b % mod)) % mod;",
          example: "When a problem says answer modulo 1,000,000,007, apply modulo after each operation, not only at the end.",
          mistakes: ["Applying modulo too late", "Using int where long is safer", "Forgetting negative modulo handling"],
          tricks: ["Use long for multiplication", "Normalize with (x % mod + mod) % mod", "Mention overflow prevention"]
        },
        {
          title: "Bit Manipulation Basics",
          explanation: "Bits help you reason about powers of two, parity, masks, and compact state representation.",
          syntax: "int bit = n & 1;\nboolean powerOfTwo = n > 0 && (n & (n - 1)) == 0;\nint count = Integer.bitCount(n);",
          example: "If n is even, its last bit is 0; if odd, its last bit is 1.",
          mistakes: ["Using bits before checking sign", "Forgetting n > 0 in power-of-two check", "Confusing shift direction"],
          tricks: ["Use n & 1 for odd/even", "Use n & (n - 1) to remove the last set bit", "Practice on binary examples first"]
        }
      ],
      table: {
        headers: ["Technique", "Best Use", "Complexity Gain", "Interview Note"],
        rows: [
          ["Prime up to sqrt(n)", "Prime check", "From O(n) to O(sqrt n)", "Use factor pair reasoning"],
          ["Euclid GCD", "Divisibility problems", "Very fast in practice", "Easy to explain on board"],
          ["Modulo", "Large answer constraints", "Avoids overflow and huge values", "Apply during computation"],
          ["Bit mask", "Parity and powers", "Constant time checks", "Works best with binary intuition"]
        ]
      },
      interviewSignals: [
        "TCS and Capgemini ask direct number theory questions more often than people expect.",
        "Product companies care less about the formula and more about why the optimization works.",
        "If you can explain factor pairing, modulo safety, and bit checks, your fundamentals sound strong."
      ]
    },
    {
      id: "oop",
      title: "OOP Concepts",
      shortFocus: "Class, object, inheritance, polymorphism, abstraction",
      level: "Java Core",
      description:
        "Object-oriented programming is the heart of Java theory interviews. Companies expect you to explain each pillar with a small code example and a relatable real-world analogy.",
      visual: "assets/images/oop.svg",
      visualAlt: "OOP pillars diagram",
      focusCompanies: ["Infosys", "Wipro", "General Product Companies"],
      mustKnow: [
        "Define every OOP pillar in one sentence before giving an example.",
        "Know the difference between compile-time and runtime polymorphism.",
        "Use small Java snippets instead of textbook paragraphs."
      ],
      sections: [
        {
          title: "Class & Object",
          explanation: "A class is a blueprint; an object is the actual instance created from that blueprint.",
          syntax: "class Student {\n    String name;\n    int roll;\n}\nStudent s = new Student();",
          example: "A class Car defines properties and behavior, while a specific car object stores real values like color and speed.",
          mistakes: ["Calling class and object the same thing", "Forgetting object creation with new", "Using static where instance data is needed"],
          tricks: ["Blueprint versus real house analogy works well", "Mention state plus behavior", "Show one tiny example quickly"]
        },
        {
          title: "Inheritance",
          explanation: "Inheritance lets a child class reuse properties and methods from a parent class.",
          syntax: "class Animal {\n    void sound() {}\n}\nclass Dog extends Animal {\n    void bark() {}\n}",
          example: "Dog inherits common animal behavior like eat or sleep, then adds its own behavior.",
          mistakes: ["Using inheritance for unrelated classes", "Forgetting IS-A relationship", "Confusing inheritance with composition"],
          tricks: ["Say child reuses and extends parent", "Use extends keyword confidently", "Mention code reusability"]
        },
        {
          title: "Polymorphism",
          explanation: "Polymorphism means the same method name can behave differently based on parameters or runtime object type.",
          syntax: "void print(int x) {}\nvoid print(String s) {}\n\nAnimal a = new Dog();\na.sound();",
          example: "Method overloading is compile-time polymorphism; method overriding is runtime polymorphism.",
          mistakes: ["Mixing overloading and overriding", "Ignoring method signature rules", "Forgetting reference type versus object type"],
          tricks: ["Use one line to compare both types", "Explain runtime dispatch with parent reference", "Mention flexibility and extensibility"]
        },
        {
          title: "Encapsulation",
          explanation: "Encapsulation protects data by keeping fields private and exposing controlled access through methods.",
          syntax: "class Account {\n    private double balance;\n    public void deposit(double amount) { balance += amount; }\n    public double getBalance() { return balance; }\n}",
          example: "A bank account should not allow anyone to modify balance directly from outside the class.",
          mistakes: ["Thinking encapsulation only means private keyword", "Skipping validation inside setters", "Exposing fields publicly"],
          tricks: ["Use hide plus control phrasing", "Mention data security and maintainability", "Pair it with bank account example"]
        },
        {
          title: "Abstraction",
          explanation: "Abstraction shows only essential behavior and hides implementation details using abstract classes or interfaces.",
          syntax: "abstract class Shape {\n    abstract double area();\n}\ninterface Payment {\n    void pay();\n}",
          example: "The user knows a payment happens, but not the exact network and gateway internals.",
          mistakes: ["Confusing abstraction with encapsulation", "Not knowing when to use interface", "Forgetting abstract methods need implementation"],
          tricks: ["Focus on what versus how", "Use interface for capability", "Use abstract class when partial implementation is shared"]
        }
      ],
      table: {
        headers: ["Concept", "Core Idea", "Keyword", "Best Example"],
        rows: [
          ["Class/Object", "Blueprint and instance", "class, new", "Student and one student object"],
          ["Inheritance", "Reuse and extension", "extends", "Animal and Dog"],
          ["Overloading", "Same method name, different parameters", "compile-time", "sum(int), sum(double)"],
          ["Overriding", "Child changes parent behavior", "runtime", "Animal sound in Dog"],
          ["Encapsulation", "Hide data, expose safe methods", "private, getter/setter", "Bank account"],
          ["Abstraction", "Show essential behavior only", "abstract, interface", "Shape, Payment"]
        ]
      },
      interviewSignals: [
        "Service-based interviews often ask for definitions, differences, and one example for each pillar.",
        "Product companies may ask you to design a mini class hierarchy on the spot.",
        "Keep one real-life example ready for each pillar so your answer sounds natural instead of memorized."
      ]
    },
    {
      id: "collections",
      title: "Collection Framework",
      shortFocus: "List, Set, Map, internals, use-cases",
      level: "Java Core",
      description:
        "Java collections are asked both as theory and implementation support. You should know what to use, why to use it, and how common structures behave internally.",
      visual: "assets/images/collections.svg",
      visualAlt: "Java collections framework map",
      focusCompanies: ["Infosys", "Wipro", "Amazon-style OA"],
      mustKnow: [
        "Choose List when order and duplicates matter.",
        "Choose Set for uniqueness.",
        "Choose Map for key-value lookups and frequency counting."
      ],
      sections: [
        {
          title: "List",
          explanation: "Lists preserve insertion order and allow duplicates. They are ideal for indexed access and ordered data processing.",
          syntax: "List<Integer> list = new ArrayList<>();\nlist.add(10);\nlist.add(20);\nint x = list.get(0);",
          example: "Use ArrayList when you need quick random access and LinkedList when insertions in the middle dominate.",
          mistakes: ["Using LinkedList when random access is needed", "Ignoring resizing cost of ArrayList", "Calling remove on wrong overload"],
          tricks: ["Remember ArrayList is default choice", "Use List interface on the left side", "Explain order plus duplicates"]
        },
        {
          title: "Set",
          explanation: "Sets store unique elements only, which makes them useful for duplicate removal and membership tests.",
          syntax: "Set<String> set = new HashSet<>();\nset.add(\"java\");\nboolean exists = set.contains(\"java\");",
          example: "Convert an array to a HashSet when the problem only cares whether an element exists.",
          mistakes: ["Expecting insertion order in HashSet", "Ignoring sorted behavior of TreeSet", "Forgetting duplicates are dropped silently"],
          tricks: ["HashSet for fast lookup", "LinkedHashSet for insertion order", "TreeSet for sorted unique data"]
        },
        {
          title: "Map",
          explanation: "Maps connect keys to values and power counting, grouping, caching, and lookups in coding interviews.",
          syntax: "Map<Character, Integer> freq = new HashMap<>();\nfreq.put(ch, freq.getOrDefault(ch, 0) + 1);",
          example: "Frequency maps solve anagram, majority, and counting questions elegantly.",
          mistakes: ["Not using getOrDefault", "Mutating key objects poorly", "Expecting sorted order in HashMap"],
          tricks: ["Say key-value lookup", "HashMap is average O(1) for lookup", "TreeMap keeps keys sorted"]
        },
        {
          title: "Internal Working",
          explanation: "Hash-based collections use hashing and buckets; tree-based collections maintain sorted order using balanced trees.",
          syntax: "HashMap -> hash bucket -> equals check\nTreeSet -> sorted tree-based structure",
          example: "Two keys with same hash go to the same bucket and are then separated using equals.",
          mistakes: ["Ignoring equals and hashCode relationship", "Assuming HashMap iteration order is fixed", "Using heavy custom keys carelessly"],
          tricks: ["Mention bucket plus collision", "Use TreeMap only when order is required", "Talk about trade-off, not just definition"]
        }
      ],
      table: {
        headers: ["Structure", "Order", "Duplicates", "Best Use"],
        rows: [
          ["ArrayList", "Preserved", "Allowed", "Fast indexed access"],
          ["LinkedList", "Preserved", "Allowed", "Frequent middle insertion and queue style work"],
          ["HashSet", "Not guaranteed", "Not allowed", "Fast uniqueness and membership check"],
          ["LinkedHashSet", "Insertion order", "Not allowed", "Unique plus predictable order"],
          ["TreeSet", "Sorted", "Not allowed", "Sorted unique values"],
          ["HashMap", "Not guaranteed", "Keys unique", "Frequency and lookup"],
          ["TreeMap", "Sorted by key", "Keys unique", "Ordered mapping"]
        ]
      },
      interviewSignals: [
        "Infosys and Wipro love difference tables like ArrayList versus LinkedList and HashMap versus TreeMap.",
        "Product companies expect you to choose the correct structure quickly during problem solving.",
        "Mention trade-offs instead of saying one collection is always best."
      ]
    },
    {
      id: "arrays",
      title: "Arrays",
      shortFocus: "Traversal, two pointers, prefix sums, sliding windows",
      level: "DSA Core",
      description:
        "Arrays are the most repeated interview topic because they expose your handling of indices, loops, edge cases, and optimization patterns like prefix sums and sliding windows.",
      visual: "assets/images/arrays.svg",
      visualAlt: "Array problem solving diagram",
      focusCompanies: ["TCS NQT", "Amazon-style OA", "General Product Companies"],
      mustKnow: [
        "Watch index bounds carefully.",
        "Learn prefix sums, two pointers, and Kadane's algorithm.",
        "Always mention whether you can solve in-place or need extra space."
      ],
      sections: [
        {
          title: "Traversal & Aggregation",
          explanation: "Basic array questions begin with scanning the array once to find max, min, sum, or counts.",
          syntax: "for (int i = 0; i < arr.length; i++) {\n    max = Math.max(max, arr[i]);\n}",
          example: "Largest element, count even numbers, and sum of positives all come from one controlled traversal.",
          mistakes: ["Starting with bad initial values", "Ignoring empty arrays", "Using nested loops unnecessarily"],
          tricks: ["Use first element as initial answer when possible", "Keep one pass whenever you can", "State edge cases upfront"]
        },
        {
          title: "Two Pointers",
          explanation: "Two pointers help when you process both ends or maintain a moving relationship between indices.",
          syntax: "int left = 0, right = arr.length - 1;\nwhile (left < right) {\n    if (condition) left++;\n    else right--;\n}",
          example: "Reversing an array or checking pair sum in a sorted array becomes elegant with two pointers.",
          mistakes: ["Moving the wrong pointer", "Using it on unsorted data without reason", "Missing left < right condition"],
          tricks: ["Ask what each pointer represents", "Use sorted property intentionally", "Dry run with a tiny array"]
        },
        {
          title: "Prefix Sums",
          explanation: "Prefix sums let you answer range sum questions in constant time after linear preprocessing.",
          syntax: "prefix[0] = arr[0];\nfor (int i = 1; i < n; i++) prefix[i] = prefix[i - 1] + arr[i];",
          example: "Sum from l to r becomes prefix[r] minus prefix[l-1] when l is greater than zero.",
          mistakes: ["Off-by-one errors", "Wrong handling of l = 0", "Building prefix with wrong indices"],
          tricks: ["Draw the prefix array separately", "Define what prefix[i] means", "Use long if sums may overflow"]
        },
        {
          title: "Sliding Window",
          explanation: "Sliding windows optimize many subarray problems by reusing previous work instead of recomputing sums or counts.",
          syntax: "int sum = 0;\nfor (int right = 0; right < n; right++) {\n    sum += arr[right];\n    while (sum > target) sum -= arr[left++];\n}",
          example: "Maximum sum of size k and longest subarray under a constraint are classic window problems.",
          mistakes: ["Forgetting to shrink window", "Not understanding fixed versus variable window", "Updating answer at wrong time"],
          tricks: ["Say expand then shrink", "Track exactly what the window stores", "Use when contiguous subarray is involved"]
        }
      ],
      interviewSignals: [
        "Arrays dominate both online assessments and interview whiteboards.",
        "Interviewers often start simple, then ask for an optimized version.",
        "If you can narrate indices, invariants, and edge cases, your array answers become much stronger."
      ]
    },
    {
      id: "strings",
      title: "Strings",
      shortFocus: "Character logic, hashing, windows, palindromes",
      level: "DSA Core",
      description:
        "Strings test indexing discipline, frequency counting, pattern recognition, and sliding window fluency. They appear heavily in both service-based and product interviews.",
      visual: "assets/images/strings.svg",
      visualAlt: "String processing diagram",
      focusCompanies: ["Infosys", "Amazon-style OA", "General Product Companies"],
      mustKnow: [
        "Know when to use StringBuilder versus direct concatenation.",
        "Frequency arrays and HashMaps solve many string questions fast.",
        "Two pointers and sliding windows are extremely common."
      ],
      sections: [
        {
          title: "Character Traversal",
          explanation: "Many beginner string questions come from scanning characters and maintaining counts or transformed output.",
          syntax: "for (int i = 0; i < s.length(); i++) {\n    char ch = s.charAt(i);\n}",
          example: "Counting vowels, uppercase letters, or digit characters uses one clean traversal.",
          mistakes: ["Using string equality with ==", "Building strings with plus in long loops", "Ignoring case normalization"],
          tricks: ["Use Character helper methods", "Convert to lower case when needed", "Prefer StringBuilder for output"]
        },
        {
          title: "Frequency Counting",
          explanation: "Frequency tables are useful for anagram checks, duplicate detection, and first unique character style problems.",
          syntax: "int[] freq = new int[26];\nfor (char ch : s.toCharArray()) freq[ch - 'a']++;",
          example: "An anagram check becomes simple when both strings end with identical frequency counts.",
          mistakes: ["Wrong index math", "Assuming only lowercase when problem allows more", "Not resetting counts carefully"],
          tricks: ["Use array for lowercase letters", "Use HashMap for general characters", "Explain choice based on charset"]
        },
        {
          title: "Two Pointers & Palindromes",
          explanation: "Two pointers solve reverse, palindrome, and compare-from-ends problems efficiently.",
          syntax: "int left = 0, right = s.length() - 1;\nwhile (left < right) {\n    if (s.charAt(left) != s.charAt(right)) return false;\n    left++;\n    right--;\n}",
          example: "Palindrome checking needs only O(1) extra space with two pointers.",
          mistakes: ["Skipping case handling", "Wrong termination condition", "Not ignoring non-alphanumeric characters when asked"],
          tricks: ["Start from the exact problem statement", "Normalize input if needed", "Explain why middle needs no special case"]
        },
        {
          title: "Sliding Window on Strings",
          explanation: "Longest substring without repetition and minimum window style questions rely on dynamic character windows.",
          syntax: "Map<Character, Integer> map = new HashMap<>();\nfor (int right = 0; right < s.length(); right++) {\n    char ch = s.charAt(right);\n}",
          example: "Use a window with counts or last seen positions to maintain valid substrings.",
          mistakes: ["Not shrinking enough", "Updating answer before window is valid", "Losing track of duplicates"],
          tricks: ["State the window invariant clearly", "Track counts or indices, not both unless needed", "Practice one example with repeated letters"]
        }
      ],
      interviewSignals: [
        "Strings are the bridge topic between beginner logic and advanced DSA patterns.",
        "Anagram, palindrome, and longest unique substring are recurring interview favorites.",
        "Choose the right helper structure quickly: array for small alphabet, map for general text."
      ]
    },
    {
      id: "linked-list",
      title: "Linked List",
      shortFocus: "Pointers, reversal, slow-fast, dummy node",
      level: "DSA Core",
      description:
        "Linked lists train pointer discipline. They are a great interview signal because one wrong link update can break the whole structure, while a clean solution looks very strong.",
      visual: "assets/images/linked-list.svg",
      visualAlt: "Linked list pointer diagram",
      focusCompanies: ["Amazon-style OA", "General Product Companies"],
      mustKnow: [
        "Draw the nodes before coding pointer changes.",
        "Slow-fast pointer solves middle, cycle, and palindrome style problems.",
        "Dummy nodes simplify edge cases in insertion and deletion."
      ],
      sections: [
        {
          title: "Node Basics",
          explanation: "A linked list stores value plus next reference, so traversal is sequential rather than index-based.",
          syntax: "class Node {\n    int val;\n    Node next;\n}",
          example: "To traverse, start at head and keep moving to next until null.",
          mistakes: ["Accessing next of null", "Forgetting head can be null", "Thinking random access is O(1)"],
          tricks: ["Say node by node traversal", "Draw arrows", "Check null before moving"]
        },
        {
          title: "Reversal Pattern",
          explanation: "Reversing a list is the fundamental pointer update problem: current node must point to previous node.",
          syntax: "Node prev = null, curr = head;\nwhile (curr != null) {\n    Node next = curr.next;\n    curr.next = prev;\n    prev = curr;\n    curr = next;\n}",
          example: "After reversing, prev becomes the new head.",
          mistakes: ["Losing next node before rewiring", "Returning old head", "Updating pointers in the wrong order"],
          tricks: ["Memorize prev-curr-next trio", "Say save, reverse, advance", "Dry run on 1->2->3"]
        },
        {
          title: "Slow-Fast Pointer",
          explanation: "Using one slow pointer and one fast pointer detects middle nodes and cycles elegantly.",
          syntax: "Node slow = head, fast = head;\nwhile (fast != null && fast.next != null) {\n    slow = slow.next;\n    fast = fast.next.next;\n}",
          example: "When fast reaches the end, slow is at the middle.",
          mistakes: ["Missing fast.next check", "Wrong starting positions for even-length cases", "Not clarifying which middle is returned"],
          tricks: ["Mention speed ratio 1:2", "Clarify even-case behavior", "Use for cycle detection too"]
        },
        {
          title: "Dummy Node",
          explanation: "A dummy node sits before the head and makes deletions near the start of the list easier.",
          syntax: "Node dummy = new Node(0);\ndummy.next = head;",
          example: "Removing the first real node becomes same logic as removing any other node.",
          mistakes: ["Forgetting to return dummy.next", "Not linking dummy correctly", "Overcomplicating head edge cases"],
          tricks: ["Use dummy for merge and delete problems", "Simplify edge cases first", "Explain why head handling becomes uniform"]
        }
      ],
      interviewSignals: [
        "Interviewers like linked list questions because clean pointer reasoning is very visible.",
        "Always say what each pointer represents before you change any links.",
        "Draw the list on paper and the implementation becomes much safer."
      ]
    },
    {
      id: "stack-queue",
      title: "Stack & Queue",
      shortFocus: "LIFO, FIFO, monotonic stack, deque windows",
      level: "DSA Core",
      description:
        "Stacks and queues appear directly in interview questions and indirectly inside parsing, BFS, next greater element, and sliding window patterns.",
      visual: "assets/images/stack-queue.svg",
      visualAlt: "Stack and queue visual",
      focusCompanies: ["Amazon-style OA", "General Product Companies", "TCS NQT"],
      mustKnow: [
        "Stack means last in first out; queue means first in first out.",
        "Monotonic stack solves next greater and span style questions.",
        "Deque is the workhorse for sliding window maximum."
      ],
      sections: [
        {
          title: "Stack Basics",
          explanation: "Stacks push and pop from the same end, which fits undo operations, expression parsing, and nested structure checks.",
          syntax: "Stack<Integer> st = new Stack<>();\nst.push(10);\nint top = st.pop();",
          example: "Valid parentheses uses a stack to remember unmatched opening brackets.",
          mistakes: ["Popping from empty stack", "Using stack when queue behavior is needed", "Ignoring peek before pop"],
          tricks: ["Think last opened first closed", "Use stack for nested dependencies", "Push indices when values alone are not enough"]
        },
        {
          title: "Queue Basics",
          explanation: "Queues process items in arrival order and are perfect for scheduling, BFS, and streaming style problems.",
          syntax: "Queue<Integer> q = new LinkedList<>();\nq.offer(10);\nint front = q.poll();",
          example: "Level order traversal of a tree is naturally a queue problem.",
          mistakes: ["Using add/remove without handling failure", "Confusing front with rear", "Picking stack when FIFO order is needed"],
          tricks: ["Use offer and poll in interviews", "Queue models level-by-level work", "Use deque for both-end operations"]
        },
        {
          title: "Monotonic Stack",
          explanation: "A monotonic stack keeps values or indices in increasing or decreasing order to answer nearest greater or smaller queries efficiently.",
          syntax: "while (!st.isEmpty() && arr[st.peek()] <= arr[i]) {\n    st.pop();\n}",
          example: "Next greater element pops smaller values because they can never help future answers.",
          mistakes: ["Storing values when indices are needed", "Using wrong comparison direction", "Not deciding increasing versus decreasing stack"],
          tricks: ["Ask what property the stack must preserve", "Indices are usually safer", "Each element is pushed and popped at most once"]
        },
        {
          title: "Deque Windows",
          explanation: "A deque supports insertion and deletion from both ends, making it perfect for sliding window maximum.",
          syntax: "Deque<Integer> dq = new ArrayDeque<>();\nwhile (!dq.isEmpty() && arr[dq.peekLast()] <= arr[i]) dq.pollLast();",
          example: "The deque stores useful candidate indices in decreasing value order.",
          mistakes: ["Not removing out-of-window indices", "Mixing indices and values", "Forgetting the deque order invariant"],
          tricks: ["Front holds the current answer", "Back is cleaned before adding new index", "Deque stores candidates, not all elements"]
        }
      ],
      interviewSignals: [
        "Valid parentheses, stock span, and sliding window maximum are interview staples.",
        "Queue knowledge also powers graph BFS and tree level order questions.",
        "Explaining why each element is pushed and popped once is a strong complexity argument."
      ]
    },
    {
      id: "trees",
      title: "Trees",
      shortFocus: "Traversals, height, BST, recursion",
      level: "DSA Core",
      description:
        "Trees are a high-impact interview area because they combine recursion, queue-based traversal, and structural reasoning. Visual thinking matters here more than raw syntax.",
      visual: "assets/images/trees.svg",
      visualAlt: "Binary tree traversal diagram",
      focusCompanies: ["Amazon-style OA", "General Product Companies"],
      mustKnow: [
        "Remember preorder, inorder, and postorder patterns.",
        "Height, diameter, balance, and level order are recurring interview themes.",
        "Understand BST property clearly."
      ],
      sections: [
        {
          title: "Traversals",
          explanation: "Traversals visit nodes in specific orders. Recursive depth-first traversals are easy to reason about once you know the root position.",
          syntax: "void inorder(Node root) {\n    if (root == null) return;\n    inorder(root.left);\n    visit(root);\n    inorder(root.right);\n}",
          example: "Inorder traversal of a BST returns values in sorted order.",
          mistakes: ["Mixing the order of root and children", "Forgetting base case", "Not checking null nodes"],
          tricks: ["Say root position determines the traversal", "Use small three-node tree in explanation", "Level order is separate and uses queue"]
        },
        {
          title: "Level Order",
          explanation: "Level order traversal visits nodes level by level using a queue.",
          syntax: "Queue<Node> q = new LinkedList<>();\nq.offer(root);\nwhile (!q.isEmpty()) {\n    Node node = q.poll();\n}",
          example: "This traversal is used for right view, left view, and shortest path in unweighted trees.",
          mistakes: ["Not handling null root", "Losing level boundaries", "Pushing children without checks"],
          tricks: ["Queue matches first level in first level out", "Use size loop for level-by-level work", "Track views at each level"]
        },
        {
          title: "Height & Balance",
          explanation: "Height measures longest root-to-leaf path. Balanced tree checks use subtree heights carefully.",
          syntax: "int height(Node root) {\n    if (root == null) return 0;\n    return 1 + Math.max(height(root.left), height(root.right));\n}",
          example: "A balanced tree ensures height difference between left and right subtree is at most one at every node.",
          mistakes: ["Confusing node count with edge count", "Recomputing heights too many times", "Missing absolute difference check"],
          tricks: ["Clarify height definition first", "Combine balance check with height return", "Use postorder thinking"]
        },
        {
          title: "BST Property",
          explanation: "Binary Search Trees keep smaller values on the left and larger values on the right, enabling ordered operations.",
          syntax: "boolean valid(Node root, long low, long high) {\n    if (root == null) return true;\n    if (root.val <= low || root.val >= high) return false;\n    return valid(root.left, low, root.val) && valid(root.right, root.val, high);\n}",
          example: "Valid BST checking requires range propagation, not just comparing with immediate children.",
          mistakes: ["Comparing only direct children", "Ignoring duplicate policy", "Using int bounds when extremes matter"],
          tricks: ["Use min-max range", "Inorder sorted property is another valid route", "Mention search efficiency benefit"]
        }
      ],
      interviewSignals: [
        "Trees reward people who can see structure visually and narrate recursion calmly.",
        "BST validation, level order traversal, and LCA are especially common.",
        "Explain whether your solution is DFS or BFS and why."
      ]
    },
    {
      id: "graphs",
      title: "Graphs",
      shortFocus: "BFS, DFS, visited arrays, topo sort, shortest path",
      level: "DSA Core",
      description:
        "Graphs look intimidating, but most interview problems reduce to traversal, state tracking, and careful representation using adjacency lists plus visited structures.",
      visual: "assets/images/graphs.svg",
      visualAlt: "Graph traversal diagram",
      focusCompanies: ["Amazon-style OA", "General Product Companies"],
      mustKnow: [
        "Know when to use adjacency list over matrix.",
        "BFS handles shortest path in unweighted graphs.",
        "Visited tracking prevents repeated work and infinite loops."
      ],
      sections: [
        {
          title: "Graph Representation",
          explanation: "Adjacency lists store neighbors efficiently and are the default graph representation in interviews.",
          syntax: "List<List<Integer>> graph = new ArrayList<>();\nfor (int i = 0; i < n; i++) graph.add(new ArrayList<>());",
          example: "For edge u-v in an undirected graph, add v to u and u to v.",
          mistakes: ["Forgetting both directions", "Using matrix for sparse graphs without need", "Not initializing all lists"],
          tricks: ["Say nodes plus edges", "State whether graph is directed", "Adjacency list is memory friendly for sparse graphs"]
        },
        {
          title: "BFS",
          explanation: "Breadth-first search explores level by level and finds shortest path in unweighted graphs.",
          syntax: "Queue<Integer> q = new LinkedList<>();\nq.offer(src);\nvisited[src] = true;",
          example: "Shortest number of moves in a grid or word ladder style problem is often BFS.",
          mistakes: ["Marking visited too late", "Not checking bounds in grid BFS", "Using BFS where weighted edges exist"],
          tricks: ["Visit when enqueuing", "BFS gives minimum edges in unweighted graph", "Track distance with levels"]
        },
        {
          title: "DFS",
          explanation: "Depth-first search explores deeply before backtracking, which suits connected components, cycle checks, and path exploration.",
          syntax: "void dfs(int node) {\n    visited[node] = true;\n    for (int next : graph.get(node)) if (!visited[next]) dfs(next);\n}",
          example: "Counting connected components can be done by starting DFS from every unvisited node.",
          mistakes: ["Forgetting visited array", "Stack overflow risk on huge recursion", "Not resetting state between test cases"],
          tricks: ["DFS is naturally recursive", "Use iterative stack if needed", "Explain component discovery clearly"]
        },
        {
          title: "Topological & Shortest Path Basics",
          explanation: "Directed acyclic graphs allow topological ordering, while weighted graphs often need Dijkstra style relaxation.",
          syntax: "Queue<Integer> q = new LinkedList<>();\nif (indegree[v] == 0) q.offer(v);",
          example: "Course schedule is a topological sort problem because prerequisites create a directed dependency graph.",
          mistakes: ["Trying topological sort on cyclic graph", "Using BFS shortest path on weighted edges", "Missing indegree updates"],
          tricks: ["Topological sort means dependency order", "Kahn's algorithm uses indegree", "Dijkstra needs non-negative weights"]
        }
      ],
      interviewSignals: [
        "Number of islands, graph traversal, and course schedule are common company favorites.",
        "Interviewers want to hear representation, traversal, and visited logic clearly.",
        "Once you map the problem to graph plus BFS/DFS, many hard-looking questions become manageable."
      ]
    },
    {
      id: "recursion",
      title: "Recursion",
      shortFocus: "Base case, faith, backtracking, recursion tree",
      level: "DSA Core",
      description:
        "Recursion is the language of divide-and-conquer, tree traversal, subset generation, and backtracking. The key is learning to trust smaller subproblems while controlling the base case carefully.",
      visual: "assets/images/recursion.svg",
      visualAlt: "Recursion call flow diagram",
      focusCompanies: ["Capgemini", "Amazon-style OA", "General Product Companies"],
      mustKnow: [
        "Every recursive function needs a base case and a smaller subproblem.",
        "Dry run with a recursion tree when confused.",
        "Backtracking means do, recurse, undo."
      ],
      sections: [
        {
          title: "Base Case",
          explanation: "The base case stops recursion. Without it, the function keeps calling itself forever.",
          syntax: "int fact(int n) {\n    if (n <= 1) return 1;\n    return n * fact(n - 1);\n}",
          example: "For factorial, n = 0 or n = 1 is the stopping point.",
          mistakes: ["Missing base case", "Base case too weak", "Calling recursion without making progress"],
          tricks: ["Ask what smallest valid input is", "Test n = 0 and n = 1 first", "Ensure input gets smaller each call"]
        },
        {
          title: "Faith and Smaller Problem",
          explanation: "Recursive thinking works when you assume the smaller call solves its part correctly.",
          syntax: "reverse(s[1..end]) then place s[0] at the end",
          example: "To reverse a string, assume the suffix reverses correctly and then attach the first character.",
          mistakes: ["Trying to expand every call mentally", "Not defining subproblem clearly", "Mixing local work and recursive work badly"],
          tricks: ["Say I trust the smaller problem", "Write return relation in one line", "Use faith plus combination language"]
        },
        {
          title: "Backtracking",
          explanation: "Backtracking explores choices recursively and undoes each choice after returning so other choices remain possible.",
          syntax: "path.add(x);\nsolve(next);\npath.remove(path.size() - 1);",
          example: "Subsets, permutations, and combination sum all use choose-explore-unchoose.",
          mistakes: ["Forgetting to undo state", "Reusing mutable lists incorrectly", "Not handling termination conditions"],
          tricks: ["Say choose, recurse, unchoose", "Draw a small state tree", "Copy answer list at the right time"]
        },
        {
          title: "Memoization Bridge",
          explanation: "When recursive subproblems repeat, memoization stores answers so recursion becomes dynamic programming.",
          syntax: "if (dp[n] != -1) return dp[n];\nreturn dp[n] = solve(n - 1) + solve(n - 2);",
          example: "Fibonacci is the classic example where plain recursion repeats work heavily.",
          mistakes: ["Not initializing memo table", "Using recursion even when tabulation is simpler", "Ignoring state definition"],
          tricks: ["State equals parameter combination", "Memoization is top-down DP", "Spot repeated subproblems early"]
        }
      ],
      interviewSignals: [
        "Recursion questions often evaluate clarity of thought more than final syntax.",
        "Subset generation and permutation generation are common for product-style rounds.",
        "If you can define base case, choice, and state cleanly, recursive problems become much easier."
      ]
    },
    {
      id: "dynamic-programming",
      title: "Dynamic Programming",
      shortFocus: "State, transition, memoization, tabulation",
      level: "DSA Core",
      description:
        "Dynamic programming solves optimization and counting problems by storing subproblem answers. The hardest part is not coding the table; it is defining the right state and transition.",
      visual: "assets/images/dp.svg",
      visualAlt: "Dynamic programming state transition visual",
      focusCompanies: ["Amazon-style OA", "General Product Companies"],
      mustKnow: [
        "Define state clearly before writing code.",
        "Memoization is top-down; tabulation is bottom-up.",
        "Transitions connect current answer to smaller solved states."
      ],
      sections: [
        {
          title: "State Definition",
          explanation: "The state tells you what one DP entry means. A vague state leads to a broken solution.",
          syntax: "dp[i] = answer using first i elements\nor\ndp[i][j] = answer for prefix i and capacity j",
          example: "In climbing stairs, dp[i] means number of ways to reach step i.",
          mistakes: ["Writing table before knowing meaning", "Using too many dimensions needlessly", "Mixing index meaning"],
          tricks: ["Say what dp cell represents in a full sentence", "Keep state minimal", "Base cases come naturally after state"]
        },
        {
          title: "Transition Relation",
          explanation: "A transition formula explains how the current answer comes from smaller states.",
          syntax: "dp[i] = dp[i - 1] + dp[i - 2]",
          example: "In house robber, answer at i is max of skipping house i or taking it plus dp[i-2].",
          mistakes: ["Using future states accidentally", "Missing one choice in the recurrence", "Not validating with a small example"],
          tricks: ["List choices first", "Then convert choices into formula", "Check transition on a tiny input"]
        },
        {
          title: "Memoization vs Tabulation",
          explanation: "Memoization solves only visited states recursively, while tabulation fills states iteratively in dependency order.",
          syntax: "Top-down: solve(state) with cache\nBottom-up: for each state in dependency order, fill dp[state]",
          example: "Memoization feels natural for recursion-heavy problems, while tabulation often gives better control of order and space.",
          mistakes: ["Choosing tabulation without knowing order", "Ignoring recursion depth", "Not caching all state variables"],
          tricks: ["Start with memoization if recurrence is clear", "Shift to tabulation for optimization", "Mention stack overhead trade-off"]
        },
        {
          title: "Space Optimization",
          explanation: "Many DP problems need only a few previous states, so you can reduce memory from O(n) to O(1).",
          syntax: "int prev2 = 1, prev1 = 1;\nfor (int i = 2; i <= n; i++) {\n    int cur = prev1 + prev2;\n    prev2 = prev1;\n    prev1 = cur;\n}",
          example: "Climbing stairs and Fibonacci need only the previous two values.",
          mistakes: ["Overwriting values too early", "Optimizing before logic is correct", "Forgetting which variables map to which dp indices"],
          tricks: ["First build full DP", "Then compress safely", "Rename rolling variables clearly"]
        }
      ],
      interviewSignals: [
        "Product companies often use DP to separate strong problem solvers from memorized coding.",
        "Interviewers care a lot about state definition and recurrence explanation.",
        "If stuck, start with recursion, identify repeats, then move to memoization."
      ]
    },
    {
      id: "interview-prep",
      title: "Interview Preparation",
      shortFocus: "TCS NQT strategy, company focus, MCQs, HR answers",
      level: "Placement Finish",
      description:
        "Preparation is not only about code. You also need company-wise prioritization, assessment strategy, MCQ revision, and structured HR answers that sound genuine and confident.",
      visual: "assets/images/interview.svg",
      visualAlt: "Interview preparation roadmap",
      focusCompanies: ["TCS NQT", "Infosys", "Wipro", "Capgemini", "Amazon-style OA"],
      mustKnow: [
        "TCS NQT rewards speed in basic coding, aptitude, and confident interview communication.",
        "Service-based interviews value clarity, fundamentals, and project explanation.",
        "Product interviews expect better DSA depth and cleaner trade-off discussion."
      ],
      sections: [
        {
          title: "TCS NQT Strategy",
          explanation: "TCS NQT usually rewards breadth: aptitude, communication, basic coding, patterns, and number logic all matter together.",
          syntax: "Plan: aptitude warm-up -> basics -> patterns -> arrays/strings -> mock test analysis",
          example: "If coding speed is slow, spend the first week only on dry runs and pattern-number basics before moving to DSA.",
          mistakes: ["Jumping straight to hard DSA", "Ignoring aptitude", "Practicing without timing yourself"],
          tricks: ["Use timed sets", "Master repeatable number problems", "Prepare one-minute introductions"]
        },
        {
          title: "Service-Based Company Prep",
          explanation: "For Infosys, Wipro, and Capgemini, balanced preparation wins: Java fundamentals, simple DSA, MCQs, and confidence in HR rounds.",
          syntax: "Track: basics + OOP + collections + strings + arrays + HR + mock interviews",
          example: "A strong explanation of a college project plus correct answers to core Java theory can outweigh solving one very hard problem.",
          mistakes: ["Ignoring theory", "Speaking too vaguely about projects", "Not revising output-based questions"],
          tricks: ["Keep project explanation structured", "Revise Java differences and definitions", "Use short STAR stories for HR"]
        },
        {
          title: "Product-Based Company Prep",
          explanation: "Product interviews usually dig deeper into DSA, edge cases, complexity, and communication during problem solving.",
          syntax: "Flow: clarify problem -> brute force -> optimize -> code -> test edge cases",
          example: "On an Amazon-style question, say the brute force first, then improve using window, map, stack, or graph logic.",
          mistakes: ["Coding too early", "Skipping complexity analysis", "Forgetting edge cases"],
          tricks: ["Narrate trade-offs", "Use examples before code", "Keep complexity visible"]
        },
        {
          title: "HR & MCQ Readiness",
          explanation: "HR answers need honesty plus structure, while MCQs demand sharp recall in Java, OOP, SQL basics, and aptitude logic.",
          syntax: "Why should we hire you? -> strength + evidence + team value\nTell me about yourself -> present + past + goal",
          example: "A good answer ties your learning journey, project exposure, and the role you want next.",
          mistakes: ["Sounding memorized", "Speaking too long without structure", "Ignoring follow-up questions"],
          tricks: ["Use 45-60 second answers", "Keep one project story ready", "Practice aloud, not silently"]
        }
      ],
      table: {
        headers: ["Company Type", "Coding Depth", "Theory Weight", "Extra Focus"],
        rows: [
          ["TCS NQT", "Basic to moderate", "Medium", "Aptitude, confidence, speed"],
          ["Infosys/Wipro", "Basic to moderate", "High", "Java theory, project explanation"],
          ["Capgemini", "Basic to moderate", "Medium", "Automata style logic, aptitude"],
          ["Amazon-style", "Moderate to high", "Medium", "DSA depth, edge cases, complexity"],
          ["General product", "High", "Medium", "Problem solving communication"]
        ]
      },
      interviewSignals: [
        "Company-specific prioritization saves time and prevents random practice.",
        "You do not need every hard problem for service-based rounds, but you do need consistency.",
        "Your communication quality can noticeably improve selection chances even when coding levels are similar."
      ]
    }
  );
})();
