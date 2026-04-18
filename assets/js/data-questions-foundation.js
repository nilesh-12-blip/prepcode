(function () {
  var q = window.CodeCrackData.helpers.q;
  var addQuestions = window.CodeCrackData.helpers.addQuestions;
  var tcs = ["TCS NQT", "Infosys"];
  var service = ["Infosys", "Wipro"];
  var mixed = ["TCS NQT", "Capgemini"];

  addQuestions(
    q("programming-basics", "Count Digits in a Number", "Easy", tcs, {
      problem: "Given an integer n, return how many digits it contains. Ignore the sign of the number.",
      intuition: "Repeated division by 10 removes one digit at a time, so the number of divisions tells us the digit count.",
      approach: "Handle zero separately because it has one digit. Convert negative values to positive, then keep dividing by 10 and increment a counter.",
      dryRun: "n = 5021 -> 5021, 502, 50, 5, 0 so the answer is 4.",
      complexity: "O(d) time and O(1) space, where d is the number of digits.",
      mistakes: ["Forgetting the zero case", "Ignoring negative numbers", "Using string conversion without discussing numeric logic"],
      tip: "Explain why modulo and division by 10 are the core tools for digit problems.",
      tags: ["Number problem", "Loop", "TCS favorite"],
      code: `static int countDigits(int n) {
    n = Math.abs(n);
    if (n == 0) return 1;
    int count = 0;
    while (n > 0) {
        count++;
        n /= 10;
    }
    return count;
}`
    }),
    q("programming-basics", "Sum of Digits", "Easy", tcs, {
      problem: "Find the sum of digits of a given integer n.",
      intuition: "The last digit comes from modulo 10, and integer division by 10 drops that last digit.",
      approach: "Take the absolute value, keep extracting n modulo 10, add it to sum, and divide n by 10 until n becomes zero.",
      dryRun: "n = 742 -> sum = 2, then 6, then 13.",
      complexity: "O(d) time and O(1) space.",
      mistakes: ["Missing Math.abs", "Using floating division", "Stopping the loop too early"],
      tip: "State that every digit problem is usually built from the same modulo plus division pattern.",
      tags: ["Digits", "Warm-up", "Assessment"],
      code: `static int sumOfDigits(int n) {
    n = Math.abs(n);
    int sum = 0;
    while (n > 0) {
        sum += n % 10;
        n /= 10;
    }
    return sum;
}`
    }),
    q("programming-basics", "Reverse a Number", "Easy", mixed, {
      problem: "Reverse the digits of a given integer n and return the reversed value.",
      intuition: "If we keep taking the last digit, the new answer grows left to right by multiplying the old answer by 10 first.",
      approach: "Store the sign, work on the absolute value, extract digits using modulo, and build the reversed number as rev * 10 + digit.",
      dryRun: "n = 1203 -> rev becomes 3, then 30, then 302, then 3021.",
      complexity: "O(d) time and O(1) space.",
      mistakes: ["Ignoring sign", "Dropping middle zeros incorrectly in reasoning", "Not discussing overflow in a real interview"],
      tip: "Say that leading zeros in the reversed result naturally disappear in integer representation.",
      tags: ["Digits", "Reverse", "TCS NQT"],
      code: `static int reverseNumber(int n) {
    int sign = n < 0 ? -1 : 1;
    n = Math.abs(n);
    int rev = 0;
    while (n > 0) {
        rev = rev * 10 + (n % 10);
        n /= 10;
    }
    return sign * rev;
}`
    }),
    q("programming-basics", "Palindrome Number", "Easy", tcs, {
      problem: "Check whether a number reads the same from left to right and right to left.",
      intuition: "A number is a palindrome if it matches its reversed version.",
      approach: "Reverse the digits using the standard digit extraction loop and compare the reversed result with the original number.",
      dryRun: "n = 121 -> reverse is 121, so the number is a palindrome.",
      complexity: "O(d) time and O(1) space.",
      mistakes: ["Using modified n for final comparison", "Not handling negative numbers explicitly", "Reversing as string without explaining numeric route"],
      tip: "Store the original value in a separate variable before mutating n.",
      tags: ["Palindrome", "Digits", "Screening round"],
      code: `static boolean isPalindromeNumber(int n) {
    if (n < 0) return false;
    int original = n;
    int rev = 0;
    while (n > 0) {
        rev = rev * 10 + (n % 10);
        n /= 10;
    }
    return original == rev;
}`
    }),
    q("programming-basics", "Armstrong Number", "Easy", mixed, {
      problem: "Check whether a number is an Armstrong number. A three-digit Armstrong number equals the sum of cubes of its digits.",
      intuition: "Break the number into digits, cube each digit, and compare the total with the original number.",
      approach: "Store the original number, iterate over digits using modulo and division, add digit * digit * digit to sum, then compare sum with original.",
      dryRun: "153 -> 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153.",
      complexity: "O(d) time and O(1) space.",
      mistakes: ["Forgetting the original copy", "Using power in a slow or noisy way for simple cubes", "Confusing Armstrong with palindrome"],
      tip: "For placement rounds, mention that three-digit Armstrong logic is enough unless the problem states a general power rule.",
      tags: ["Digits", "Classic company question", "Math logic"],
      code: `static boolean isArmstrong(int n) {
    int original = n;
    int sum = 0;
    while (n > 0) {
        int digit = n % 10;
        sum += digit * digit * digit;
        n /= 10;
    }
    return sum == original;
}`
    }),
    q("programming-basics", "Factorial of a Number", "Easy", service, {
      problem: "Compute n factorial for a non-negative integer n.",
      intuition: "Factorial multiplies all integers from 1 to n, so a loop is the cleanest implementation for beginners.",
      approach: "Start with ans = 1 and multiply it by every integer from 2 to n. Use long when values may exceed int range.",
      dryRun: "n = 5 -> 1 * 2 * 3 * 4 * 5 = 120.",
      complexity: "O(n) time and O(1) space.",
      mistakes: ["Using int for larger inputs", "Starting the loop at 0", "Forgetting that 0 factorial is 1"],
      tip: "Mention the base fact that 0 factorial and 1 factorial both equal 1.",
      tags: ["Loop", "Math", "Fundamental"],
      code: `static long factorial(int n) {
    long ans = 1;
    for (int i = 2; i <= n; i++) {
        ans *= i;
    }
    return ans;
}`
    }),
    q("programming-basics", "Fibonacci Series up to N Terms", "Easy", service, {
      problem: "Print or return the first n terms of the Fibonacci sequence.",
      intuition: "Each term depends on the previous two, so we only need two rolling variables.",
      approach: "Handle small n separately, then iterate while updating first, second, and next terms.",
      dryRun: "For n = 6, the sequence becomes 0, 1, 1, 2, 3, 5.",
      complexity: "O(n) time and O(1) extra space.",
      mistakes: ["Printing the wrong number of terms", "Updating variables in the wrong order", "Starting from 1,1 when the interviewer expects 0,1"],
      tip: "Clarify the expected starting terms before coding because some platforms define the sequence differently.",
      tags: ["Sequence", "Loop", "Interview basics"],
      code: `static void printFibonacci(int n) {
    if (n <= 0) return;
    int a = 0, b = 1;
    for (int i = 1; i <= n; i++) {
        System.out.print(a + " ");
        int next = a + b;
        a = b;
        b = next;
    }
}`
    }),
    q("programming-basics", "Largest of Three Numbers", "Easy", mixed, {
      problem: "Given three numbers a, b, and c, return the largest value.",
      intuition: "A simple comparison chain is enough because only three candidates exist.",
      approach: "Start with a as the answer and update it if b or c is larger. You can also use nested Math.max calls.",
      dryRun: "a = 9, b = 15, c = 11 -> answer moves from 9 to 15 and stays 15.",
      complexity: "O(1) time and O(1) space.",
      mistakes: ["Forgetting equal values are valid", "Writing too many nested conditions", "Using confusing variable names"],
      tip: "In interviews, the simplest readable version is usually the best version for this question.",
      tags: ["Conditional", "Warm-up", "Logic"],
      code: `static int largestOfThree(int a, int b, int c) {
    int ans = a;
    if (b > ans) ans = b;
    if (c > ans) ans = c;
    return ans;
}`
    }),
    q("programming-basics", "Leap Year Check", "Easy", service, {
      problem: "Determine whether a year is a leap year.",
      intuition: "The official rule depends on divisibility by 400, 100, and 4 in that specific priority.",
      approach: "A year is a leap year if divisible by 400, or divisible by 4 but not by 100.",
      dryRun: "2000 is leap, 1900 is not leap, 2024 is leap.",
      complexity: "O(1) time and O(1) space.",
      mistakes: ["Checking divisible by 4 only", "Using the wrong precedence of conditions", "Ignoring century years"],
      tip: "Say the rule in words first, then write the boolean expression.",
      tags: ["Conditional", "Calendar logic", "Assessment"],
      code: `static boolean isLeapYear(int year) {
    return (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);
}`
    }),
    q("programming-basics", "Simple Calculator using Switch", "Easy", service, {
      problem: "Build a simple calculator that performs +, -, *, or / based on an operator input.",
      intuition: "Switch is a clean way to handle multiple exact menu options.",
      approach: "Use a switch on the operator, handle division carefully, and provide a default case for invalid operations.",
      dryRun: "a = 12, b = 4, op = '/' -> result is 3.",
      complexity: "O(1) time and O(1) space.",
      mistakes: ["Missing break statements", "Division by zero", "Using integer division when decimal output is expected"],
      tip: "Mention why switch is cleaner than a long if-else chain for exact operator symbols.",
      tags: ["Switch", "Java basics", "Common interview"],
      code: `static double calculate(double a, double b, char op) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/':
            if (b == 0) throw new IllegalArgumentException("Division by zero");
            return a / b;
        default:
            throw new IllegalArgumentException("Invalid operator");
    }
}`
    }),

    q("pattern-printing", "Solid Square Pattern", "Easy", tcs, {
      problem: "Print an n by n square made of stars.",
      intuition: "Every row prints the same number of stars, so both loops run from 1 to n.",
      approach: "Use an outer loop for rows and an inner loop that prints n stars on every row, then print a newline.",
      dryRun: "For n = 3, each of the 3 rows prints exactly 3 stars.",
      complexity: "O(n^2) time and O(1) extra space.",
      mistakes: ["Missing newline", "Using row count in the inner loop incorrectly", "Printing spaces inconsistently"],
      tip: "This is the easiest nested-loop template and the base for many other patterns.",
      tags: ["Pattern", "Nested loops", "TCS"],
      output: "* * *\n* * *\n* * *",
      code: `static void solidSquare(int n) {
    for (int row = 1; row <= n; row++) {
        for (int col = 1; col <= n; col++) {
            System.out.print("* ");
        }
        System.out.println();
    }
}`
    }),
    q("pattern-printing", "Right Triangle Star Pattern", "Easy", tcs, {
      problem: "Print a right triangle of stars where row i contains i stars.",
      intuition: "The row number itself tells us how many stars to print in that row.",
      approach: "Use the outer loop for rows from 1 to n and the inner loop from 1 to row.",
      dryRun: "For row 4, the inner loop runs four times and prints four stars.",
      complexity: "O(n^2) time and O(1) space.",
      mistakes: ["Starting rows at 0 without adjusting logic", "Printing one extra star", "Forgetting newline"],
      tip: "Whenever output grows with row number, the inner loop usually ends at row.",
      tags: ["Pattern", "Triangle", "Infosys"],
      output: "*\n* *\n* * *\n* * * *",
      code: `static void rightTriangle(int n) {
    for (int row = 1; row <= n; row++) {
        for (int col = 1; col <= row; col++) {
            System.out.print("* ");
        }
        System.out.println();
    }
}`
    }),
    q("pattern-printing", "Inverted Right Triangle", "Easy", mixed, {
      problem: "Print an inverted triangle where the first row has n stars and the last row has 1 star.",
      intuition: "This is the reverse of the growing triangle, so the count decreases by one each row.",
      approach: "Use rows from n down to 1, or use a row loop from 1 to n and print n-row+1 stars.",
      dryRun: "For n = 4, rows print 4, 3, 2, 1 stars.",
      complexity: "O(n^2) time and O(1) space.",
      mistakes: ["Using the wrong relation for star count", "Accidentally printing ascending pattern", "Skipping the last row"],
      tip: "Show the decreasing formula explicitly if the interviewer asks for derivation.",
      tags: ["Pattern", "Reverse logic", "Capgemini"],
      output: "* * * *\n* * *\n* *\n*",
      code: `static void invertedTriangle(int n) {
    for (int row = n; row >= 1; row--) {
        for (int col = 1; col <= row; col++) {
            System.out.print("* ");
        }
        System.out.println();
    }
}`
    }),
    q("pattern-printing", "Number Triangle", "Easy", service, {
      problem: "Print a number triangle where each row i contains the number i repeated i times.",
      intuition: "The row index is both the printed value and the loop limit for that row.",
      approach: "Outer loop runs from 1 to n, inner loop prints row that many times.",
      dryRun: "For row 3, print 3 three times.",
      complexity: "O(n^2) time and O(1) space.",
      mistakes: ["Printing col instead of row", "Missing spaces", "Resetting the wrong variable"],
      tip: "Decide whether the row or the column controls the printed value before coding.",
      tags: ["Number pattern", "Loop logic", "Wipro"],
      output: "1\n2 2\n3 3 3\n4 4 4 4",
      code: `static void numberTriangle(int n) {
    for (int row = 1; row <= n; row++) {
        for (int col = 1; col <= row; col++) {
            System.out.print(row + " ");
        }
        System.out.println();
    }
}`
    }),
    q("pattern-printing", "Floyd's Triangle", "Easy", service, {
      problem: "Print Floyd's triangle using a running counter that increases on every print.",
      intuition: "Unlike row-based patterns, the printed value keeps growing globally across rows.",
      approach: "Maintain count = 1 outside the loops. Each time you print, output count and increment it.",
      dryRun: "Rows become 1, then 2 3, then 4 5 6, and so on.",
      complexity: "O(n^2) time and O(1) space.",
      mistakes: ["Resetting the counter at every row", "Using row as the value", "Missing increment after print"],
      tip: "Mention that the counter is global across the pattern, not local to a row.",
      tags: ["Number pattern", "Classic", "Service-based"],
      output: "1\n2 3\n4 5 6\n7 8 9 10",
      code: `static void floydTriangle(int n) {
    int count = 1;
    for (int row = 1; row <= n; row++) {
        for (int col = 1; col <= row; col++) {
            System.out.print(count++ + " ");
        }
        System.out.println();
    }
}`
    }),
    q("pattern-printing", "Full Pyramid Pattern", "Medium", tcs, {
      problem: "Print a centered full pyramid of stars with n rows.",
      intuition: "Every row needs leading spaces and then an odd number of stars.",
      approach: "For row i, print n-i spaces followed by 2*i-1 stars.",
      dryRun: "For n = 4 and row 3, spaces = 1 and stars = 5.",
      complexity: "O(n^2) time and O(1) extra space.",
      mistakes: ["Using row instead of 2*row-1", "Incorrect alignment", "Not separating space and star loops"],
      tip: "Break the row into two independent parts: spaces first, symbols second.",
      tags: ["Pyramid", "Nested loops", "Interview favorite"],
      output: "   *\n  ***\n *****\n*******",
      code: `static void fullPyramid(int n) {
    for (int row = 1; row <= n; row++) {
        for (int space = 1; space <= n - row; space++) {
            System.out.print(" ");
        }
        for (int star = 1; star <= 2 * row - 1; star++) {
            System.out.print("*");
        }
        System.out.println();
    }
}`
    }),
    q("pattern-printing", "Inverted Full Pyramid", "Medium", mixed, {
      problem: "Print an inverted centered pyramid of stars.",
      intuition: "This mirrors the full pyramid, so spaces grow while stars shrink by two every row.",
      approach: "For row i from 1 to n, print i-1 spaces and then 2*(n-i)+1 stars.",
      dryRun: "For n = 4 and row 2, spaces = 1 and stars = 5.",
      complexity: "O(n^2) time and O(1) space.",
      mistakes: ["Using the normal pyramid formula", "Wrong space growth", "Dropping the final row"],
      tip: "If stuck, write the expected star count per row and derive the formula from that list.",
      tags: ["Pyramid", "Reverse", "Placement"],
      output: "*******\n *****\n  ***\n   *",
      code: `static void invertedFullPyramid(int n) {
    for (int row = 1; row <= n; row++) {
        for (int space = 1; space < row; space++) {
            System.out.print(" ");
        }
        for (int star = 1; star <= 2 * (n - row) + 1; star++) {
            System.out.print("*");
        }
        System.out.println();
    }
}`
    }),
    q("pattern-printing", "Diamond Pattern", "Medium", service, {
      problem: "Print a diamond pattern using stars.",
      intuition: "A diamond is just an upper pyramid plus a lower inverted pyramid.",
      approach: "Print the upper half from 1 to n, then the lower half from n-1 down to 1 using the same space-star logic.",
      dryRun: "For n = 3, rows are 1, 3, 5, 3, 1 stars with matching spaces.",
      complexity: "O(n^2) time and O(1) space.",
      mistakes: ["Repeating the middle row twice", "Wrong lower loop range", "Losing alignment"],
      tip: "Build the diamond from two already-known patterns instead of solving it from scratch.",
      tags: ["Composite pattern", "Pyramid", "Infosys"],
      output: "  *\n ***\n*****\n ***\n  *",
      code: `static void diamond(int n) {
    for (int row = 1; row <= n; row++) {
        for (int space = 1; space <= n - row; space++) System.out.print(" ");
        for (int star = 1; star <= 2 * row - 1; star++) System.out.print("*");
        System.out.println();
    }
    for (int row = n - 1; row >= 1; row--) {
        for (int space = 1; space <= n - row; space++) System.out.print(" ");
        for (int star = 1; star <= 2 * row - 1; star++) System.out.print("*");
        System.out.println();
    }
}`
    }),
    q("pattern-printing", "Binary Triangle Pattern", "Medium", mixed, {
      problem: "Print a binary triangle where values alternate between 1 and 0.",
      intuition: "The printed value can be derived from row plus column parity.",
      approach: "For each position, print 1 when row + col is even, otherwise print 0.",
      dryRun: "Row 3 gives 1 0 1 because sums 4, 5, and 6 alternate parity.",
      complexity: "O(n^2) time and O(1) space.",
      mistakes: ["Using only row parity", "Starting row or column from 0 without adjusting parity", "Printing without spaces"],
      tip: "This is a great example of turning a visual pattern into a formula instead of a hardcoded table.",
      tags: ["Binary pattern", "Parity", "Assessment"],
      output: "1\n0 1\n1 0 1\n0 1 0 1",
      code: `static void binaryTriangle(int n) {
    for (int row = 1; row <= n; row++) {
        for (int col = 1; col <= row; col++) {
            System.out.print(((row + col) % 2 == 0 ? 1 : 0) + " ");
        }
        System.out.println();
    }
}`
    }),
    q("pattern-printing", "Butterfly Pattern", "Medium", service, {
      problem: "Print the butterfly star pattern with two mirrored wings.",
      intuition: "Each row has left stars, middle spaces, and right stars. The lower half mirrors the upper half.",
      approach: "Create an upper half from 1 to n and a lower half from n down to 1. For each row, print row stars, then spaces, then row stars again.",
      dryRun: "For n = 3 and row 2, stars are 2 on each side and middle spaces are 2.",
      complexity: "O(n^2) time and O(1) space.",
      mistakes: ["Wrong middle space formula", "Repeating center rows incorrectly", "Mixing upper and lower ranges"],
      tip: "Describe every row as left block, gap, right block. That makes the coding almost mechanical.",
      tags: ["Composite pattern", "Nested loops", "Frequently asked"],
      output: "*    *\n**  **\n******\n**  **\n*    *",
      code: `static void butterfly(int n) {
    for (int row = 1; row <= n; row++) {
        for (int star = 1; star <= row; star++) System.out.print("*");
        for (int space = 1; space <= 2 * (n - row); space++) System.out.print(" ");
        for (int star = 1; star <= row; star++) System.out.print("*");
        System.out.println();
    }
    for (int row = n - 1; row >= 1; row--) {
        for (int star = 1; star <= row; star++) System.out.print("*");
        for (int space = 1; space <= 2 * (n - row); space++) System.out.print(" ");
        for (int star = 1; star <= row; star++) System.out.print("*");
        System.out.println();
    }
}`
    }),

    q("mathematics", "Prime Number Check", "Easy", mixed, {
      problem: "Check whether an integer n is prime using an optimized method.",
      intuition: "Factors come in pairs, so checking divisors only up to square root is enough.",
      approach: "Return false for values less than 2. Then test every i from 2 while i*i is at most n. If any i divides n, it is not prime.",
      dryRun: "n = 29 -> check 2, 3, 4, 5. No divisor works, so 29 is prime.",
      complexity: "O(sqrt n) time and O(1) space.",
      mistakes: ["Treating 1 as prime", "Checking all numbers until n-1", "Using floating square root unnecessarily"],
      tip: "Mention factor pairing as the reason behind the square root optimization.",
      tags: ["Prime", "Optimization", "NQT"],
      code: `static boolean isPrime(int n) {
    if (n < 2) return false;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}`
    }),
    q("mathematics", "Print Primes in a Range", "Medium", mixed, {
      problem: "Print all prime numbers in the range [l, r].",
      intuition: "Reuse the optimized prime check for every number in the range.",
      approach: "Loop from l to r and print the number whenever the helper isPrime function returns true.",
      dryRun: "For 10 to 20, the primes are 11, 13, 17, and 19.",
      complexity: "O((r-l+1) * sqrt r) time and O(1) extra space.",
      mistakes: ["Starting from 1 without filtering", "Writing duplicate prime logic inside the main loop", "Not handling l greater than r"],
      tip: "In interviews, separate helper logic from driver logic so the solution stays clean.",
      tags: ["Prime", "Range", "Math loop"],
      code: `static void printPrimesInRange(int l, int r) {
    for (int num = l; num <= r; num++) {
        if (isPrime(num)) {
            System.out.print(num + " ");
        }
    }
}

static boolean isPrime(int n) {
    if (n < 2) return false;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}`
    }),
    q("mathematics", "GCD using Euclid's Algorithm", "Easy", tcs, {
      problem: "Find the greatest common divisor of two integers a and b.",
      intuition: "gcd(a, b) is the same as gcd(b, a mod b), which quickly shrinks the numbers.",
      approach: "While b is not zero, store a mod b, move b into a, and the remainder into b. When b becomes zero, a is the gcd.",
      dryRun: "gcd(48, 18) -> gcd(18, 12) -> gcd(12, 6) -> gcd(6, 0) = 6.",
      complexity: "O(log min(a, b)) time and O(1) space in practice.",
      mistakes: ["Using subtraction repeatedly instead of modulo", "Not handling zero inputs carefully", "Losing a value without a temp variable"],
      tip: "Euclid's algorithm is a strong interview explanation because it is both short and mathematically elegant.",
      tags: ["GCD", "Euclid", "Classic math"],
      code: `static int gcd(int a, int b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b != 0) {
        int temp = a % b;
        a = b;
        b = temp;
    }
    return a;
}`
    }),
    q("mathematics", "LCM using GCD", "Easy", service, {
      problem: "Find the least common multiple of two integers.",
      intuition: "The relation lcm(a, b) = (a / gcd(a, b)) * b lets us reuse the gcd helper safely.",
      approach: "Compute the gcd first, then divide a by gcd before multiplying by b to reduce overflow risk.",
      dryRun: "a = 12, b = 18, gcd = 6 so lcm = (12/6) * 18 = 36.",
      complexity: "O(log min(a, b)) time and O(1) space.",
      mistakes: ["Multiplying a and b before division", "Ignoring sign handling", "Not using a larger type when needed"],
      tip: "Say divide first, then multiply. That sounds safer and more mature in interviews.",
      tags: ["LCM", "GCD", "Placement"],
      code: `static long lcm(int a, int b) {
    int g = gcd(a, b);
    return (long) (a / g) * b;
}

static int gcd(int a, int b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b != 0) {
        int temp = a % b;
        a = b;
        b = temp;
    }
    return a;
}`
    }),
    q("mathematics", "Fast Power", "Medium", mixed, {
      problem: "Compute x raised to power n efficiently.",
      intuition: "Instead of multiplying x n times, exponentiation by squaring halves the problem size at every step.",
      approach: "If n is even, square the base and halve the exponent. If n is odd, multiply one extra x and continue. Use iterative binary exponentiation for clarity.",
      dryRun: "2^10 -> square and halve repeatedly: 2,4,16,256 while combining required odd powers to reach 1024.",
      complexity: "O(log n) time and O(1) extra space.",
      mistakes: ["Using O(n) multiplication", "Not handling odd exponents correctly", "Overflow with int"],
      tip: "The phrase square and halve is the shortest way to explain the idea cleanly.",
      tags: ["Exponentiation", "Logarithmic", "Optimization"],
      code: `static long fastPower(long x, int n) {
    long ans = 1;
    while (n > 0) {
        if ((n & 1) == 1) ans *= x;
        x *= x;
        n >>= 1;
    }
    return ans;
}`
    }),
    q("mathematics", "Modular Exponentiation", "Medium", mixed, {
      problem: "Compute x raised to power n modulo mod.",
      intuition: "Binary exponentiation still works, but every multiplication is reduced modulo mod to keep values bounded.",
      approach: "Use the same fast power loop. Whenever you multiply into the answer or square the base, take modulo mod immediately.",
      dryRun: "For 2^13 mod 1000, repeated squaring keeps values small while preserving the final result.",
      complexity: "O(log n) time and O(1) space.",
      mistakes: ["Applying modulo only at the end", "Using int when long is safer", "Ignoring mod on squared base"],
      tip: "Call out overflow prevention explicitly. Interviewers like that detail.",
      tags: ["Modulo", "Fast power", "Medium"],
      code: `static long modPow(long x, int n, int mod) {
    long ans = 1;
    x %= mod;
    while (n > 0) {
        if ((n & 1) == 1) ans = (ans * x) % mod;
        x = (x * x) % mod;
        n >>= 1;
    }
    return ans;
}`
    }),
    q("mathematics", "Count Set Bits", "Easy", service, {
      problem: "Count the number of 1 bits in the binary representation of n.",
      intuition: "Every time we check n and 1, we read the last bit. Right shift then exposes the next bit.",
      approach: "Initialize count to zero. While n is not zero, add n and 1 to count, then shift n right by one position.",
      dryRun: "n = 13 -> binary 1101 -> bits counted are 1, 0, 1, 1 so answer is 3.",
      complexity: "O(number of bits) time and O(1) space.",
      mistakes: ["Confusing decimal and binary digits", "Using logical ideas without demonstrating one example", "For signed values, not clarifying assumptions"],
      tip: "If allowed, mention the alternate trick n and (n-1) removes the last set bit.",
      tags: ["Bits", "Binary", "Easy"],
      code: `static int countSetBits(int n) {
    int count = 0;
    while (n != 0) {
        count += (n & 1);
        n >>>= 1;
    }
    return count;
}`
    }),
    q("mathematics", "Power of Two Check", "Easy", mixed, {
      problem: "Check whether a positive integer n is a power of two.",
      intuition: "A power of two has exactly one set bit in binary.",
      approach: "Return true only if n is positive and n and n-1 equals zero.",
      dryRun: "8 is 1000 and 7 is 0111, so 8 and 7 becomes 0.",
      complexity: "O(1) time and O(1) space.",
      mistakes: ["Forgetting n must be positive", "Using loop when a bit trick exists", "Not understanding why the trick works"],
      tip: "Say that subtracting one flips the only set bit and all lower bits, which makes the and result zero.",
      tags: ["Bit trick", "Interview classic", "Fast check"],
      code: `static boolean isPowerOfTwo(int n) {
    return n > 0 && (n & (n - 1)) == 0;
}`
    }),
    q("mathematics", "Sieve of Eratosthenes", "Medium", mixed, {
      problem: "Generate all prime numbers up to n using the sieve of Eratosthenes.",
      intuition: "Instead of checking each number independently, mark multiples of each prime as composite.",
      approach: "Create a boolean array initially set to true. For each i from 2 while i*i is at most n, if i is prime, mark its multiples starting from i*i as false.",
      dryRun: "For n = 10, multiples of 2 and 3 get marked, leaving 2, 3, 5, and 7 as prime.",
      complexity: "O(n log log n) time and O(n) space.",
      mistakes: ["Starting marking from 2*i instead of i*i without understanding trade-offs", "Not initializing the array properly", "Forgetting 0 and 1 are not prime"],
      tip: "The sieve is a good answer when the question asks for many primes, not just one prime check.",
      tags: ["Prime", "Sieve", "Medium"],
      code: `static void sieve(int n) {
    boolean[] prime = new boolean[n + 1];
    Arrays.fill(prime, true);
    if (n >= 0) prime[0] = false;
    if (n >= 1) prime[1] = false;
    for (int i = 2; i * i <= n; i++) {
        if (prime[i]) {
            for (int j = i * i; j <= n; j += i) {
                prime[j] = false;
            }
        }
    }
    for (int i = 2; i <= n; i++) {
        if (prime[i]) System.out.print(i + " ");
    }
}`
    }),
    q("mathematics", "Trailing Zeroes in Factorial", "Medium", service, {
      problem: "Find how many trailing zeroes appear in n factorial.",
      intuition: "Trailing zeroes come from factors of 10, and factors of 10 come from pairs of 2 and 5. Twos are plenty, so count fives.",
      approach: "Keep dividing n by 5, 25, 125 and add the quotients. That counts how many times factor 5 appears in n factorial.",
      dryRun: "For 25, answer is 25/5 + 25/25 = 5 + 1 = 6.",
      complexity: "O(log base 5 of n) time and O(1) space.",
      mistakes: ["Trying to compute factorial directly", "Counting only n/5 and missing extra fives", "Not knowing the factor-of-10 argument"],
      tip: "This is a favorite interview explanation question because the math idea matters more than the code.",
      tags: ["Factorial", "Math insight", "Medium"],
      code: `static int trailingZeroes(int n) {
    int count = 0;
    while (n > 0) {
        n /= 5;
        count += n;
    }
    return count;
}`
    })
  );
})();

(function () {
  var q = window.CodeCrackData.helpers.q;
  var addQuestions = window.CodeCrackData.helpers.addQuestions;

  addQuestions(
    q("interview-prep", "TCS NQT: Sum Odd and Even Digits Separately", "Easy", ["TCS NQT"], {
      problem: "Given a number, compute the sum of odd digits and the sum of even digits separately.",
      intuition: "Digit extraction plus parity check solves the problem in one loop.",
      approach: "Use modulo 10 to extract each digit. If digit is even add to evenSum, otherwise add to oddSum. Divide number by 10 each time.",
      dryRun: "n = 12345 -> odd sum = 1+3+5 = 9 and even sum = 2+4 = 6.",
      complexity: "O(d) time and O(1) space.",
      mistakes: ["Checking parity of the whole number instead of digit", "Forgetting zero digit is even", "Not handling negative input"],
      tip: "This is a typical NQT digit-manipulation warm-up. Narrate modulo and division clearly.",
      tags: ["TCS NQT", "Digits", "Company-wise"],
      code: `static int[] oddEvenDigitSums(int n) {
    n = Math.abs(n);
    int oddSum = 0, evenSum = 0;
    while (n > 0) {
        int digit = n % 10;
        if (digit % 2 == 0) evenSum += digit;
        else oddSum += digit;
        n /= 10;
    }
    return new int[] { oddSum, evenSum };
}`
    }),
    q("interview-prep", "TCS NQT: Automorphic Number", "Easy", ["TCS NQT", "Capgemini"], {
      problem: "Check whether a number is automorphic, meaning its square ends with the number itself.",
      intuition: "If n is automorphic, square modulo a power of 10 equal to digit length of n should equal n.",
      approach: "Count digits through a multiplier of 10, square the number, and compare square modulo multiplier with original.",
      dryRun: "25 squared is 625, and 625 ends with 25, so 25 is automorphic.",
      complexity: "O(d) time and O(1) space.",
      mistakes: ["Comparing full square with n", "Wrong multiplier calculation", "Overflow when n is large"],
      tip: "Automorphic, Armstrong, and palindrome are very common service-based number questions.",
      tags: ["Number logic", "TCS NQT", "Automorphic"],
      code: `static boolean isAutomorphic(int n) {
    int original = Math.abs(n);
    int multiplier = 1;
    int temp = original;
    if (temp == 0) multiplier = 10;
    while (temp > 0) {
        multiplier *= 10;
        temp /= 10;
    }
    long square = (long) original * original;
    return square % multiplier == original;
}`
    }),
    q("interview-prep", "Service Round: Strong Number", "Easy", ["TCS NQT", "Wipro"], {
      problem: "Check whether a number equals the sum of factorials of its digits.",
      intuition: "Extract every digit, compute its factorial, add those factorials, and compare with the original number.",
      approach: "Precompute factorial values for digits 0 to 9, then traverse digits and accumulate factorial sums.",
      dryRun: "145 -> 1! + 4! + 5! = 1 + 24 + 120 = 145.",
      complexity: "O(d) time and O(1) space.",
      mistakes: ["Recomputing factorial in a slow nested way", "Forgetting 0 factorial is 1", "Not preserving original value"],
      tip: "Precomputing digit factorials shows a small optimization mindset.",
      tags: ["Digits", "Strong number", "Service-based"],
      code: `static boolean isStrongNumber(int n) {
    int original = n;
    int[] fact = new int[10];
    fact[0] = 1;
    for (int i = 1; i <= 9; i++) fact[i] = fact[i - 1] * i;
    int sum = 0;
    while (n > 0) {
        sum += fact[n % 10];
        n /= 10;
    }
    return sum == original;
}`
    }),
    q("interview-prep", "Infosys: Reverse Words in a Sentence", "Easy", ["Infosys", "Wipro"], {
      problem: "Reverse the order of words in a sentence while removing extra spaces.",
      intuition: "Split the sentence into words, then append them from right to left.",
      approach: "Trim spaces, split by one or more spaces, iterate from the last word to the first, and build the answer.",
      dryRun: "I love Java -> Java love I.",
      complexity: "O(n) time and O(n) space.",
      mistakes: ["Reversing characters instead of words", "Leaving extra spaces", "Not handling multiple spaces"],
      tip: "Clarify whether punctuation should stay attached to words.",
      tags: ["Infosys", "String", "Sentence"],
      code: `static String reverseWords(String sentence) {
    String[] words = sentence.trim().split("\\\\s+");
    StringBuilder ans = new StringBuilder();
    for (int i = words.length - 1; i >= 0; i--) {
        ans.append(words[i]);
        if (i > 0) ans.append(" ");
    }
    return ans.toString();
}`
    }),
    q("interview-prep", "Wipro: Word Frequency Counter", "Easy", ["Wipro", "Infosys"], {
      problem: "Count how many times each word appears in a sentence.",
      intuition: "A HashMap maps every word to its frequency count.",
      approach: "Normalize case, split the sentence into words, and update counts using getOrDefault.",
      dryRun: "Java is java -> java:2 and is:1 after lowercase normalization.",
      complexity: "O(n) time and O(k) space, where k is number of distinct words.",
      mistakes: ["Ignoring case normalization", "Counting empty strings", "Not stripping punctuation when required"],
      tip: "Mention normalization rules because interviewers may add case or punctuation twists.",
      tags: ["Wipro", "HashMap", "String"],
      code: `static Map<String, Integer> wordFrequency(String sentence) {
    Map<String, Integer> freq = new HashMap<>();
    String[] words = sentence.toLowerCase().trim().split("\\\\s+");
    for (String word : words) {
        if (word.isEmpty()) continue;
        freq.put(word, freq.getOrDefault(word, 0) + 1);
    }
    return freq;
}`
    }),
    q("interview-prep", "Capgemini: Perfect Number", "Easy", ["Capgemini", "TCS NQT"], {
      problem: "Check whether a number equals the sum of its proper divisors.",
      intuition: "A perfect number is built from its divisors excluding itself.",
      approach: "Start sum at 1 for numbers above 1. Check divisors up to square root and add both divisor partners when found.",
      dryRun: "28 -> 1 + 2 + 4 + 7 + 14 = 28.",
      complexity: "O(sqrt n) time and O(1) space.",
      mistakes: ["Including the number itself", "Double-counting square root divisor", "Treating 1 as perfect"],
      tip: "Square-root divisor pairing is a useful optimization to highlight.",
      tags: ["Capgemini", "Math", "Divisors"],
      code: `static boolean isPerfectNumber(int n) {
    if (n <= 1) return false;
    int sum = 1;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            sum += i;
            if (i != n / i) sum += n / i;
        }
    }
    return sum == n;
}`
    }),
    q("interview-prep", "Service Assessment: Remove Spaces from String", "Easy", ["Infosys", "Capgemini"], {
      problem: "Remove all spaces from a string and return the compact result.",
      intuition: "Build a new string by appending only non-space characters.",
      approach: "Traverse characters, skip spaces, and append everything else to StringBuilder.",
      dryRun: "Code Crack -> CodeCrack.",
      complexity: "O(n) time and O(n) space.",
      mistakes: ["Using replace incorrectly for all whitespace", "Repeated string concatenation", "Removing only the first space"],
      tip: "If all whitespace must be removed, use Character.isWhitespace instead of checking only a space character.",
      tags: ["String cleanup", "Service-based", "Easy"],
      code: `static String removeSpaces(String s) {
    StringBuilder ans = new StringBuilder();
    for (char ch : s.toCharArray()) {
        if (!Character.isWhitespace(ch)) {
            ans.append(ch);
        }
    }
    return ans.toString();
}`
    }),
    q("interview-prep", "Amazon-Style: Product of Array Except Self", "Medium", ["Amazon-style OA"], {
      problem: "Return an array where each position contains the product of all elements except itself, without using division.",
      intuition: "The answer for each index is product of elements on its left times product of elements on its right.",
      approach: "Fill output with prefix products from left to right, then multiply suffix products from right to left.",
      dryRun: "[1,2,3,4] -> output [24,12,8,6].",
      complexity: "O(n) time and O(1) extra space excluding output.",
      mistakes: ["Using division despite restriction", "Failing on zero values", "Allocating unnecessary prefix and suffix arrays"],
      tip: "This is a premium array question because it tests prefix-suffix thinking.",
      tags: ["Amazon-style", "Prefix-suffix", "Array"],
      code: `static int[] productExceptSelf(int[] nums) {
    int n = nums.length;
    int[] ans = new int[n];
    int prefix = 1;
    for (int i = 0; i < n; i++) {
        ans[i] = prefix;
        prefix *= nums[i];
    }
    int suffix = 1;
    for (int i = n - 1; i >= 0; i--) {
        ans[i] *= suffix;
        suffix *= nums[i];
    }
    return ans;
}`
    }),
    q("interview-prep", "Amazon-Style: Valid Palindrome with Cleanup", "Easy", ["Amazon-style OA"], {
      problem: "Check whether a string is a palindrome after ignoring non-alphanumeric characters and case.",
      intuition: "Two pointers can skip irrelevant characters and compare normalized characters.",
      approach: "Move left and right inward. Skip non-alphanumeric characters. Compare lowercase versions of valid characters.",
      dryRun: "A man, a plan, a canal: Panama becomes a valid palindrome after cleanup.",
      complexity: "O(n) time and O(1) space.",
      mistakes: ["Cleaning into another string when O(1) is possible", "Not normalizing case", "Not skipping punctuation symmetrically"],
      tip: "This question tests edge-case discipline more than difficulty.",
      tags: ["Amazon-style", "Two pointers", "String"],
      code: `static boolean isCleanPalindrome(String s) {
    int left = 0, right = s.length() - 1;
    while (left < right) {
        while (left < right && !Character.isLetterOrDigit(s.charAt(left))) left++;
        while (left < right && !Character.isLetterOrDigit(s.charAt(right))) right--;
        char a = Character.toLowerCase(s.charAt(left));
        char b = Character.toLowerCase(s.charAt(right));
        if (a != b) return false;
        left++;
        right--;
    }
    return true;
}`
    }),
    q("interview-prep", "Company Coding: FizzBuzz Variant", "Easy", ["TCS NQT", "Infosys", "Wipro"], {
      problem: "Print numbers from 1 to n, but print Fizz for multiples of 3, Buzz for multiples of 5, and FizzBuzz for multiples of both.",
      intuition: "The most specific condition must be checked first, otherwise multiples of both get captured too early.",
      approach: "Loop from 1 to n. Check divisibility by 15 first, then 3, then 5, otherwise print the number.",
      dryRun: "For 15, output FizzBuzz because it is divisible by both 3 and 5.",
      complexity: "O(n) time and O(1) extra space.",
      mistakes: ["Checking 3 before 15", "Using nested conditions unclearly", "Forgetting modulo means divisibility"],
      tip: "Condition ordering is the real interview point here.",
      tags: ["Company-wise", "Conditional", "Warm-up"],
      code: `static void fizzBuzz(int n) {
    for (int i = 1; i <= n; i++) {
        if (i % 15 == 0) System.out.println("FizzBuzz");
        else if (i % 3 == 0) System.out.println("Fizz");
        else if (i % 5 == 0) System.out.println("Buzz");
        else System.out.println(i);
    }
}`
    })
  );
})();

(function () {
  var q = window.CodeCrackData.helpers.q;
  var addQuestions = window.CodeCrackData.helpers.addQuestions;
  var javaCore = ["Infosys", "Wipro"];
  var product = ["Amazon-style OA", "General Product Companies"];

  addQuestions(
    q("oop", "Create a Student Class and Object", "Easy", javaCore, {
      problem: "Design a Student class with name and marks, then create an object and display its data.",
      intuition: "A class defines the blueprint, while the object stores actual values for one student.",
      approach: "Create fields, initialize them through a constructor, and write a display method to print object state.",
      dryRun: "Student('Asha', 92) creates one object whose name is Asha and marks is 92.",
      complexity: "O(1) time and O(1) space for one object.",
      mistakes: ["Calling class and object the same thing", "Not initializing fields", "Using static for instance-specific data"],
      tip: "Use this question to explain blueprint versus instance in simple words.",
      tags: ["Class", "Object", "Java core"],
      code: `class Student {
    String name;
    int marks;

    Student(String name, int marks) {
        this.name = name;
        this.marks = marks;
    }

    void display() {
        System.out.println(name + " scored " + marks);
    }
}`
    }),
    q("oop", "Constructor Overloading", "Easy", javaCore, {
      problem: "Show constructor overloading using a Book class.",
      intuition: "Overloading allows multiple constructors with different parameter lists for flexible object creation.",
      approach: "Create one no-argument constructor and one parameterized constructor. Both initialize the object in valid ways.",
      dryRun: "new Book() gives default values, while new Book('DSA', 499) sets custom values.",
      complexity: "O(1) time and O(1) space.",
      mistakes: ["Changing only return type", "Forgetting constructors have no return type", "Duplicating initialization logic unnecessarily"],
      tip: "Say overloading is compile-time polymorphism based on parameter signature.",
      tags: ["Constructor", "Overloading", "Theory plus code"],
      code: `class Book {
    String title;
    int price;

    Book() {
        this("Untitled", 0);
    }

    Book(String title, int price) {
        this.title = title;
        this.price = price;
    }
}`
    }),
    q("oop", "Single Inheritance Example", "Easy", javaCore, {
      problem: "Demonstrate single inheritance using an Employee and Developer class.",
      intuition: "A child class can reuse common fields and behavior from a parent class.",
      approach: "Put shared data in Employee and specialized behavior in Developer using extends.",
      dryRun: "Developer object can call work from Employee and code from Developer.",
      complexity: "O(1) for method calls; inheritance affects design rather than algorithmic complexity.",
      mistakes: ["Using inheritance without an IS-A relationship", "Trying multiple class inheritance in Java", "Overriding without intent"],
      tip: "Mention Java supports single class inheritance but multiple interface implementation.",
      tags: ["Inheritance", "extends", "Java interview"],
      code: `class Employee {
    void work() {
        System.out.println("Employee works");
    }
}

class Developer extends Employee {
    void code() {
        System.out.println("Developer writes code");
    }
}`
    }),
    q("oop", "Method Overloading", "Easy", javaCore, {
      problem: "Implement method overloading for an add method.",
      intuition: "The same method name can support different inputs when parameter lists differ.",
      approach: "Create add methods with different parameter counts or types. The compiler picks the correct method.",
      dryRun: "add(2, 3) calls the int version, while add(2.5, 3.1) calls the double version.",
      complexity: "O(1) time and O(1) space.",
      mistakes: ["Only changing return type", "Confusing overloading with overriding", "Ambiguous calls with mixed types"],
      tip: "Use the phrase same name, different signature.",
      tags: ["Polymorphism", "Compile-time", "OOP"],
      code: `class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
}`
    }),
    q("oop", "Method Overriding", "Easy", javaCore, {
      problem: "Show runtime polymorphism using method overriding.",
      intuition: "A child class can provide its own implementation of a parent method, and the runtime object decides the behavior.",
      approach: "Create a parent class Animal with sound, override sound in Dog, then call through an Animal reference.",
      dryRun: "Animal ref = new Dog(); ref.sound() prints Dog's version.",
      complexity: "O(1) time and O(1) space.",
      mistakes: ["Changing method signature accidentally", "Forgetting inheritance is required", "Calling it compile-time polymorphism"],
      tip: "Mention dynamic method dispatch to sound interview-ready.",
      tags: ["Overriding", "Runtime polymorphism", "Java core"],
      code: `class Animal {
    void sound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}`
    }),
    q("oop", "Encapsulation with Getters and Setters", "Easy", javaCore, {
      problem: "Create a BankAccount class that protects balance from direct access.",
      intuition: "Encapsulation hides data and allows controlled changes through methods.",
      approach: "Make balance private, expose getBalance, and validate deposits before changing the field.",
      dryRun: "deposit(500) increases balance, but direct balance assignment from outside is not allowed.",
      complexity: "O(1) time and O(1) space.",
      mistakes: ["Making fields public", "Skipping validation", "Thinking getters and setters alone guarantee encapsulation"],
      tip: "Say encapsulation is data hiding plus controlled access.",
      tags: ["Encapsulation", "private", "OOP pillar"],
      code: `class BankAccount {
    private double balance;

    public void deposit(double amount) {
        if (amount <= 0) throw new IllegalArgumentException("Invalid amount");
        balance += amount;
    }

    public double getBalance() {
        return balance;
    }
}`
    }),
    q("oop", "Abstraction with Abstract Class", "Medium", product, {
      problem: "Use an abstract Shape class and implement area calculation in child classes.",
      intuition: "Abstraction lets the parent define what must happen while child classes decide how it happens.",
      approach: "Create abstract method area in Shape and override it in Circle and Rectangle.",
      dryRun: "A Shape reference can point to Circle, and calling area executes Circle's formula.",
      complexity: "O(1) per area calculation and O(1) space.",
      mistakes: ["Trying to instantiate abstract class", "Forgetting to implement abstract method", "Confusing abstract class with interface"],
      tip: "Use what versus how as your abstraction explanation.",
      tags: ["Abstraction", "Abstract class", "Design"],
      code: `abstract class Shape {
    abstract double area();
}

class Circle extends Shape {
    double radius;
    Circle(double radius) { this.radius = radius; }
    double area() { return Math.PI * radius * radius; }
}

class Rectangle extends Shape {
    double length, width;
    Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }
    double area() { return length * width; }
}`
    }),
    q("oop", "Interface-Based Payment Design", "Medium", product, {
      problem: "Design a payment system where multiple payment types implement the same pay behavior.",
      intuition: "Interfaces define a capability, and different classes provide their own implementation.",
      approach: "Create Payment interface with pay method, then implement it in UpiPayment and CardPayment.",
      dryRun: "A Payment reference can call pay on either UPI or card object without knowing internal details.",
      complexity: "O(1) per payment call; the value is extensible design.",
      mistakes: ["Putting too much implementation in interface", "Confusing interface with class inheritance", "Not coding to interface type"],
      tip: "Say interface is best when unrelated classes share a capability.",
      tags: ["Interface", "Abstraction", "Design interview"],
      code: `interface Payment {
    void pay(double amount);
}

class UpiPayment implements Payment {
    public void pay(double amount) {
        System.out.println("Paid by UPI: " + amount);
    }
}

class CardPayment implements Payment {
    public void pay(double amount) {
        System.out.println("Paid by Card: " + amount);
    }
}`
    }),

    q("collections", "Remove Duplicates using HashSet", "Easy", javaCore, {
      problem: "Given an integer array, return unique elements without caring about sorted order.",
      intuition: "A set automatically keeps only one copy of each value.",
      approach: "Iterate through the array and add each element to a HashSet. Convert or print the set at the end.",
      dryRun: "[2, 3, 2, 5] -> set becomes 2, 3, 5.",
      complexity: "O(n) average time and O(n) space.",
      mistakes: ["Expecting HashSet to preserve order", "Using nested loops unnecessarily", "Forgetting duplicates are silently ignored"],
      tip: "If order matters, say LinkedHashSet instead of HashSet.",
      tags: ["HashSet", "Duplicates", "Interview basics"],
      code: `static Set<Integer> uniqueElements(int[] arr) {
    Set<Integer> set = new HashSet<>();
    for (int value : arr) {
        set.add(value);
    }
    return set;
}`
    }),
    q("collections", "Character Frequency using HashMap", "Easy", javaCore, {
      problem: "Count the frequency of each character in a string.",
      intuition: "A map stores each character as a key and its count as the value.",
      approach: "Traverse the string and update map count using getOrDefault.",
      dryRun: "banana -> b:1, a:3, n:2.",
      complexity: "O(n) time and O(k) space, where k is the number of distinct characters.",
      mistakes: ["Not using getOrDefault", "Ignoring spaces or case rules", "Using many if statements instead of a map"],
      tip: "For lowercase-only strings, an array of size 26 is faster; for general characters, HashMap is cleaner.",
      tags: ["HashMap", "Frequency", "String"],
      code: `static Map<Character, Integer> charFrequency(String s) {
    Map<Character, Integer> freq = new HashMap<>();
    for (char ch : s.toCharArray()) {
        freq.put(ch, freq.getOrDefault(ch, 0) + 1);
    }
    return freq;
}`
    }),
    q("collections", "Sort Students using Comparator", "Medium", product, {
      problem: "Sort a list of students by marks in descending order.",
      intuition: "Comparator lets us define custom ordering when natural order is not enough.",
      approach: "Create a Student class and use Collections.sort or list.sort with a comparator comparing marks.",
      dryRun: "Marks 70, 95, 82 become 95, 82, 70 after descending sort.",
      complexity: "O(n log n) time and O(1) to O(n) sorting space depending on implementation.",
      mistakes: ["Subtracting values and risking overflow", "Sorting ascending when descending is asked", "Not handling equal marks if tie-breaker is required"],
      tip: "Use Integer.compare for safer comparator code.",
      tags: ["Comparator", "Sorting", "Java collections"],
      code: `class Student {
    String name;
    int marks;
    Student(String name, int marks) {
        this.name = name;
        this.marks = marks;
    }
}

static void sortByMarksDesc(List<Student> students) {
    students.sort((a, b) -> Integer.compare(b.marks, a.marks));
}`
    }),
    q("collections", "ArrayList vs LinkedList Use Case", "Easy", javaCore, {
      problem: "Show how to choose between ArrayList and LinkedList for common operations.",
      intuition: "ArrayList is usually better for random access, while LinkedList can be useful for frequent insertions at ends or queue-like behavior.",
      approach: "Use ArrayList for indexed reads and LinkedList or ArrayDeque for queue operations. Demonstrate both with simple code.",
      dryRun: "list.get(2) is direct in ArrayList; queue.offer and queue.poll are natural for LinkedList.",
      complexity: "ArrayList get is O(1); LinkedList indexed get is O(n). Queue operations at ends are O(1).",
      mistakes: ["Assuming LinkedList is always faster", "Using LinkedList for random access", "Ignoring ArrayDeque for queues"],
      tip: "Say ArrayList is the default choice unless you have a clear reason otherwise.",
      tags: ["List", "Comparison", "Theory"],
      code: `static void listUseCases() {
    List<Integer> randomAccess = new ArrayList<>();
    randomAccess.add(10);
    randomAccess.add(20);
    System.out.println(randomAccess.get(1));

    Queue<Integer> queue = new LinkedList<>();
    queue.offer(10);
    queue.offer(20);
    System.out.println(queue.poll());
}`
    }),
    q("collections", "First Non-Repeating Number using LinkedHashMap", "Medium", javaCore, {
      problem: "Find the first non-repeating integer in an array while preserving insertion order.",
      intuition: "LinkedHashMap remembers insertion order and also stores frequency counts.",
      approach: "Count each number in a LinkedHashMap, then scan map entries and return the first key with count one.",
      dryRun: "[4, 5, 4, 6, 5, 7] -> frequencies in order are 4:2, 5:2, 6:1, 7:1 so answer is 6.",
      complexity: "O(n) time and O(n) space.",
      mistakes: ["Using HashMap when order matters", "Returning any non-repeating number instead of first", "Scanning the array repeatedly"],
      tip: "This is a strong example of choosing a collection based on behavior, not habit.",
      tags: ["LinkedHashMap", "Order", "Frequency"],
      code: `static int firstNonRepeating(int[] arr) {
    Map<Integer, Integer> freq = new LinkedHashMap<>();
    for (int value : arr) {
        freq.put(value, freq.getOrDefault(value, 0) + 1);
    }
    for (Map.Entry<Integer, Integer> entry : freq.entrySet()) {
        if (entry.getValue() == 1) return entry.getKey();
    }
    return -1;
}`
    }),
    q("collections", "Top K Largest using PriorityQueue", "Medium", product, {
      problem: "Find the k largest elements from an array.",
      intuition: "A min-heap of size k keeps only the k largest values seen so far.",
      approach: "Push each element into a PriorityQueue. If heap size exceeds k, remove the smallest. At the end, the heap contains k largest elements.",
      dryRun: "For k = 3, small elements get removed as bigger values arrive, leaving the top three.",
      complexity: "O(n log k) time and O(k) space.",
      mistakes: ["Using a max heap and storing all elements unnecessarily", "Not removing when size exceeds k", "Returning unordered heap as sorted output without sorting"],
      tip: "Explain why min-heap is used: the smallest among the current top k is easiest to discard.",
      tags: ["PriorityQueue", "Heap", "Product interview"],
      code: `static List<Integer> topK(int[] arr, int k) {
    PriorityQueue<Integer> minHeap = new PriorityQueue<>();
    for (int value : arr) {
        minHeap.offer(value);
        if (minHeap.size() > k) {
            minHeap.poll();
        }
    }
    return new ArrayList<>(minHeap);
}`
    }),
    q("collections", "Group Words by Length", "Medium", javaCore, {
      problem: "Group a list of words according to their length.",
      intuition: "A map from length to list of words represents the grouping naturally.",
      approach: "For each word, compute its length and use computeIfAbsent to create the bucket if it does not exist.",
      dryRun: "cat, dog, java -> length 3 has cat and dog, length 4 has java.",
      complexity: "O(n) time over words plus characters needed for length, and O(n) space for groups.",
      mistakes: ["Creating a new list but not putting it in the map", "Overwriting existing group", "Using raw types"],
      tip: "computeIfAbsent is a clean modern Java collections method to mention.",
      tags: ["HashMap", "Grouping", "Use-case"],
      code: `static Map<Integer, List<String>> groupByLength(List<String> words) {
    Map<Integer, List<String>> groups = new HashMap<>();
    for (String word : words) {
        groups.computeIfAbsent(word.length(), key -> new ArrayList<>()).add(word);
    }
    return groups;
}`
    }),
    q("collections", "Sorted Unique Scores using TreeSet", "Easy", javaCore, {
      problem: "Store scores uniquely and print them in sorted order.",
      intuition: "TreeSet automatically removes duplicates and maintains sorted order.",
      approach: "Insert all scores into a TreeSet and iterate through it.",
      dryRun: "[90, 80, 90, 75] -> TreeSet stores 75, 80, 90.",
      complexity: "O(n log n) time and O(n) space.",
      mistakes: ["Expecting insertion order", "Using HashSet when sorted output is required", "Not understanding duplicate removal"],
      tip: "TreeSet is useful when the output must be both unique and sorted.",
      tags: ["TreeSet", "Sorted unique", "Collections"],
      code: `static Set<Integer> sortedUniqueScores(int[] scores) {
    Set<Integer> set = new TreeSet<>();
    for (int score : scores) {
        set.add(score);
    }
    return set;
}`
    })
  );
})();
