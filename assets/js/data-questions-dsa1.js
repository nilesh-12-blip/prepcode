(function () {
  var q = window.CodeCrackData.helpers.q;
  var addQuestions = window.CodeCrackData.helpers.addQuestions;
  var service = ["TCS NQT", "Infosys"];
  var product = ["Amazon-style OA", "General Product Companies"];

  addQuestions(
    q("arrays", "Find the Largest Element", "Easy", service, {
      problem: "Given an array, return the largest element.",
      intuition: "One scan is enough because each element can be compared against the best answer seen so far.",
      approach: "Initialize max with the first element and update it whenever a bigger element appears.",
      dryRun: "[4, 9, 1, 7] -> max starts 4, becomes 9, and remains 9.",
      complexity: "O(n) time and O(1) space.",
      mistakes: ["Initializing max as zero when all values can be negative", "Ignoring empty arrays", "Using sorting unnecessarily"],
      tip: "For max or min questions, first-element initialization is safer than arbitrary constants.",
      tags: ["Array traversal", "Warm-up", "NQT"],
      code: `static int largest(int[] arr) {
    if (arr.length == 0) throw new IllegalArgumentException("Empty array");
    int max = arr[0];
    for (int i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}`
    }),
    q("arrays", "Second Largest Element", "Easy", service, {
      problem: "Return the second largest distinct element in an array.",
      intuition: "Track the best and second-best values while scanning once.",
      approach: "When a value beats largest, move largest to second. If it lies between largest and second, update second.",
      dryRun: "[10, 5, 10, 8] -> largest 10, second 8.",
      complexity: "O(n) time and O(1) space.",
      mistakes: ["Returning duplicate largest as second largest", "Not handling arrays with no second distinct value", "Sorting when one pass is enough"],
      tip: "Clarify whether the interviewer wants distinct second largest.",
      tags: ["One pass", "Distinct values", "Service-based"],
      code: `static int secondLargest(int[] arr) {
    int largest = Integer.MIN_VALUE;
    int second = Integer.MIN_VALUE;
    for (int value : arr) {
        if (value > largest) {
            second = largest;
            largest = value;
        } else if (value < largest && value > second) {
            second = value;
        }
    }
    if (second == Integer.MIN_VALUE) return -1;
    return second;
}`
    }),
    q("arrays", "Reverse an Array In-Place", "Easy", service, {
      problem: "Reverse an array without using another array.",
      intuition: "The first and last values swap, then the second and second-last swap, and so on.",
      approach: "Use two pointers, left and right. Swap values while left is before right, then move both pointers inward.",
      dryRun: "[1, 2, 3, 4] -> swap 1 and 4, then 2 and 3 -> [4, 3, 2, 1].",
      complexity: "O(n) time and O(1) space.",
      mistakes: ["Using extra array unnecessarily", "Wrong loop condition", "Forgetting to move both pointers"],
      tip: "This is the simplest two-pointer pattern. Say that each swap fixes two positions.",
      tags: ["Two pointers", "In-place", "Basics"],
      code: `static void reverse(int[] arr) {
    int left = 0, right = arr.length - 1;
    while (left < right) {
        int temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}`
    }),
    q("arrays", "Rotate Array by K", "Medium", product, {
      problem: "Rotate an array to the right by k positions.",
      intuition: "Rotation can be done by reversing parts of the array instead of shifting one-by-one.",
      approach: "Reduce k using modulo n. Reverse the whole array, reverse the first k elements, then reverse the remaining elements.",
      dryRun: "[1,2,3,4,5], k=2 -> reverse all [5,4,3,2,1], first two [4,5,3,2,1], rest [4,5,1,2,3].",
      complexity: "O(n) time and O(1) space.",
      mistakes: ["Not applying k modulo n", "Using O(k*n) repeated shifts", "Wrong boundaries in reverse helper"],
      tip: "The three-reversal trick is a clean interview answer for in-place rotation.",
      tags: ["Rotation", "In-place", "Two pointers"],
      code: `static void rotateRight(int[] arr, int k) {
    int n = arr.length;
    if (n == 0) return;
    k %= n;
    reverse(arr, 0, n - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);
}

static void reverse(int[] arr, int left, int right) {
    while (left < right) {
        int temp = arr[left];
        arr[left++] = arr[right];
        arr[right--] = temp;
    }
}`
    }),
    q("arrays", "Move Zeroes to End", "Easy", service, {
      problem: "Move all zeroes to the end while preserving the order of non-zero elements.",
      intuition: "Keep a pointer for where the next non-zero value should be placed.",
      approach: "Scan the array. Whenever a non-zero value appears, write it at insert position. Fill the remaining positions with zero.",
      dryRun: "[0,1,0,3,12] -> non-zero part becomes [1,3,12], rest zeroes -> [1,3,12,0,0].",
      complexity: "O(n) time and O(1) space.",
      mistakes: ["Changing relative order", "Using extra array without need", "Forgetting to fill trailing zeroes"],
      tip: "This is a stable compaction problem.",
      tags: ["Two pointers", "In-place", "Common"],
      code: `static void moveZeroes(int[] arr) {
    int insert = 0;
    for (int value : arr) {
        if (value != 0) arr[insert++] = value;
    }
    while (insert < arr.length) {
        arr[insert++] = 0;
    }
}`
    }),
    q("arrays", "Maximum Subarray Sum", "Medium", product, {
      problem: "Find the maximum possible sum of a contiguous subarray.",
      intuition: "If the running sum becomes worse than starting fresh, drop it and restart from the current element.",
      approach: "Use Kadane's algorithm: current is max of current element and current plus element; best tracks the maximum current seen.",
      dryRun: "[-2,1,-3,4,-1,2,1] -> best becomes 6 for subarray [4,-1,2,1].",
      complexity: "O(n) time and O(1) space.",
      mistakes: ["Returning zero for all-negative arrays", "Resetting current too aggressively", "Using nested loops"],
      tip: "State whether empty subarray is allowed. Standard interview version usually requires non-empty subarray.",
      tags: ["Kadane", "Subarray", "Product favorite"],
      code: `static int maxSubArray(int[] arr) {
    int current = arr[0];
    int best = arr[0];
    for (int i = 1; i < arr.length; i++) {
        current = Math.max(arr[i], current + arr[i]);
        best = Math.max(best, current);
    }
    return best;
}`
    }),
    q("arrays", "Best Time to Buy and Sell Stock", "Easy", product, {
      problem: "Given prices, return the maximum profit from one buy and one sell.",
      intuition: "For every selling day, the best buying day is the minimum price seen before it.",
      approach: "Track minPrice while scanning. At each price, update profit as price minus minPrice.",
      dryRun: "[7,1,5,3,6,4] -> buy at 1 and sell at 6 for profit 5.",
      complexity: "O(n) time and O(1) space.",
      mistakes: ["Selling before buying", "Using nested loops", "Not returning zero when no profit exists"],
      tip: "This is a running minimum problem disguised as a stock problem.",
      tags: ["Greedy", "Array", "LeetCode"],
      code: `static int maxProfit(int[] prices) {
    int minPrice = Integer.MAX_VALUE;
    int best = 0;
    for (int price : prices) {
        minPrice = Math.min(minPrice, price);
        best = Math.max(best, price - minPrice);
    }
    return best;
}`
    }),
    q("arrays", "Range Sum Query using Prefix Sum", "Medium", product, {
      problem: "Answer multiple range sum queries on a static array.",
      intuition: "If prefix[i] stores sum up to i, then any range sum can be built from two prefix values.",
      approach: "Precompute prefix sums once. For query l to r, return prefix[r] minus prefix[l-1] when l is not zero.",
      dryRun: "arr [2,4,6,8], prefix [2,6,12,20], sum 1 to 3 is 20 minus 2 = 18.",
      complexity: "O(n) preprocessing, O(1) per query, O(n) space.",
      mistakes: ["Wrong handling of l = 0", "Off-by-one in prefix meaning", "Using int when sums may overflow"],
      tip: "Define prefix[i] verbally before writing formula.",
      tags: ["Prefix sum", "Range query", "Optimization"],
      code: `static int[] buildPrefix(int[] arr) {
    int[] prefix = new int[arr.length];
    if (arr.length == 0) return prefix;
    prefix[0] = arr[0];
    for (int i = 1; i < arr.length; i++) {
        prefix[i] = prefix[i - 1] + arr[i];
    }
    return prefix;
}

static int rangeSum(int[] prefix, int left, int right) {
    return left == 0 ? prefix[right] : prefix[right] - prefix[left - 1];
}`
    }),
    q("arrays", "Two Sum using HashMap", "Easy", product, {
      problem: "Return indices of two numbers whose sum equals target.",
      intuition: "For each number, check whether the required complement has already appeared.",
      approach: "Use a HashMap from value to index. For each element, compute target minus value and check the map.",
      dryRun: "[2,7,11], target 9 -> at 7, complement 2 exists at index 0.",
      complexity: "O(n) time and O(n) space.",
      mistakes: ["Using same element twice", "Adding current value before complement check without care", "Returning values when indices are asked"],
      tip: "This is the classic reason HashMap appears in array interviews.",
      tags: ["HashMap", "LeetCode", "Pair sum"],
      code: `static int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int need = target - nums[i];
        if (map.containsKey(need)) {
            return new int[] { map.get(need), i };
        }
        map.put(nums[i], i);
    }
    return new int[] { -1, -1 };
}`
    }),
    q("arrays", "Majority Element", "Medium", product, {
      problem: "Find the element that appears more than n/2 times, assuming it exists.",
      intuition: "The majority element can cancel out all other elements and still remain.",
      approach: "Use Boyer-Moore voting. Maintain candidate and count. Reset candidate when count becomes zero.",
      dryRun: "[2,2,1,1,2] -> candidate ends as 2.",
      complexity: "O(n) time and O(1) space.",
      mistakes: ["Using HashMap when O(1) space is asked", "Not verifying candidate when existence is not guaranteed", "Forgetting count reset"],
      tip: "Explain cancellation: one majority vote cancels one non-majority vote.",
      tags: ["Boyer-Moore", "Voting", "Medium"],
      code: `static int majorityElement(int[] nums) {
    int candidate = 0, count = 0;
    for (int value : nums) {
        if (count == 0) candidate = value;
        count += (value == candidate) ? 1 : -1;
    }
    return candidate;
}`
    }),

    q("strings", "Reverse a String", "Easy", service, {
      problem: "Reverse the characters of a string.",
      intuition: "A StringBuilder can append characters from the end to the beginning efficiently.",
      approach: "Loop from the last index down to zero and append each character to a StringBuilder.",
      dryRun: "code -> e, d, o, c -> edoc.",
      complexity: "O(n) time and O(n) space.",
      mistakes: ["Using repeated string concatenation in a loop", "Starting from wrong index", "Ignoring empty string"],
      tip: "Mention StringBuilder to show Java-specific efficiency.",
      tags: ["StringBuilder", "Basic", "Service-based"],
      code: `static String reverse(String s) {
    StringBuilder sb = new StringBuilder();
    for (int i = s.length() - 1; i >= 0; i--) {
        sb.append(s.charAt(i));
    }
    return sb.toString();
}`
    }),
    q("strings", "Palindrome String", "Easy", service, {
      problem: "Check whether a string is a palindrome.",
      intuition: "Characters from both ends should match while pointers move inward.",
      approach: "Use left and right pointers. If any pair differs, return false. If the loop finishes, return true.",
      dryRun: "madam -> m=m, a=a, middle d ignored -> true.",
      complexity: "O(n) time and O(1) space.",
      mistakes: ["Creating a reversed copy when O(1) space is easy", "Not clarifying case sensitivity", "Wrong pointer update"],
      tip: "Ask whether to ignore spaces, punctuation, or case before coding.",
      tags: ["Two pointers", "Palindrome", "TCS"],
      code: `static boolean isPalindrome(String s) {
    int left = 0, right = s.length() - 1;
    while (left < right) {
        if (s.charAt(left) != s.charAt(right)) return false;
        left++;
        right--;
    }
    return true;
}`
    }),
    q("strings", "Valid Anagram", "Easy", product, {
      problem: "Check whether two lowercase strings are anagrams of each other.",
      intuition: "Two anagrams must have identical character frequencies.",
      approach: "Use an array of size 26. Increment for characters in the first string and decrement for the second.",
      dryRun: "listen and silent produce all zero frequency differences.",
      complexity: "O(n) time and O(1) space because alphabet size is fixed.",
      mistakes: ["Not checking lengths first", "Wrong char index calculation", "Assuming lowercase without reading constraints"],
      tip: "If characters are general Unicode, switch from array to HashMap.",
      tags: ["Frequency", "Anagram", "LeetCode"],
      code: `static boolean isAnagram(String a, String b) {
    if (a.length() != b.length()) return false;
    int[] freq = new int[26];
    for (int i = 0; i < a.length(); i++) {
        freq[a.charAt(i) - 'a']++;
        freq[b.charAt(i) - 'a']--;
    }
    for (int count : freq) {
        if (count != 0) return false;
    }
    return true;
}`
    }),
    q("strings", "Count Vowels and Consonants", "Easy", service, {
      problem: "Count vowels and consonants in a string containing letters and spaces.",
      intuition: "A single traversal can classify each alphabetic character.",
      approach: "Convert each character to lowercase, skip non-letters, and check membership in the vowel set.",
      dryRun: "Java -> vowels a,a are 2 and consonants j,v are 2.",
      complexity: "O(n) time and O(1) space.",
      mistakes: ["Counting spaces as consonants", "Ignoring uppercase letters", "Writing repeated conditions unclearly"],
      tip: "Character.isLetter makes the solution more robust.",
      tags: ["Traversal", "Character logic", "NQT"],
      code: `static int[] countVowelsConsonants(String s) {
    int vowels = 0, consonants = 0;
    for (char ch : s.toCharArray()) {
        ch = Character.toLowerCase(ch);
        if (!Character.isLetter(ch)) continue;
        if ("aeiou".indexOf(ch) >= 0) vowels++;
        else consonants++;
    }
    return new int[] { vowels, consonants };
}`
    }),
    q("strings", "First Non-Repeating Character", "Easy", product, {
      problem: "Return the first character that appears exactly once in a string.",
      intuition: "We need both frequency and original order.",
      approach: "Count character frequencies in one pass, then scan the string again and return the first character with count one.",
      dryRun: "swiss -> s appears twice, w appears once, so answer is w.",
      complexity: "O(n) time and O(1) space for ASCII-sized frequency.",
      mistakes: ["Returning any unique character instead of first", "Using HashSet and losing counts", "Not handling no-answer case"],
      tip: "The second scan is what preserves first occurrence order.",
      tags: ["Frequency", "Order", "Common"],
      code: `static char firstUniqueChar(String s) {
    int[] freq = new int[256];
    for (char ch : s.toCharArray()) freq[ch]++;
    for (char ch : s.toCharArray()) {
        if (freq[ch] == 1) return ch;
    }
    return '#';
}`
    }),
    q("strings", "Remove Duplicate Characters", "Easy", service, {
      problem: "Remove duplicate characters from a string while preserving first occurrence order.",
      intuition: "A boolean seen array can tell whether a character was already added.",
      approach: "Traverse the string, append a character only the first time it appears, and mark it seen.",
      dryRun: "banana -> b, a, n are kept -> ban.",
      complexity: "O(n) time and O(1) space for fixed ASCII set.",
      mistakes: ["Using HashSet and then printing unordered output", "Appending duplicates", "Not preserving order"],
      tip: "If order matters, do not depend on plain HashSet iteration order.",
      tags: ["Deduplication", "StringBuilder", "Order"],
      code: `static String removeDuplicates(String s) {
    boolean[] seen = new boolean[256];
    StringBuilder ans = new StringBuilder();
    for (char ch : s.toCharArray()) {
        if (!seen[ch]) {
            seen[ch] = true;
            ans.append(ch);
        }
    }
    return ans.toString();
}`
    }),
    q("strings", "Longest Common Prefix", "Easy", product, {
      problem: "Given an array of strings, find the longest prefix common to all strings.",
      intuition: "The prefix cannot be longer than the first string, and it can be shortened until every word matches.",
      approach: "Start with the first string as prefix. While a word does not start with prefix, remove the last character of prefix.",
      dryRun: "flower, flow, flight -> prefix shrinks from flower to flow to fl.",
      complexity: "O(total characters compared) time and O(1) extra space.",
      mistakes: ["Not handling empty array", "Comparing only first two strings", "Using substring bounds incorrectly"],
      tip: "This problem rewards simple clean logic more than overengineering.",
      tags: ["Prefix", "String array", "LeetCode"],
      code: `static String longestCommonPrefix(String[] words) {
    if (words.length == 0) return "";
    String prefix = words[0];
    for (int i = 1; i < words.length; i++) {
        while (!words[i].startsWith(prefix)) {
            prefix = prefix.substring(0, prefix.length() - 1);
            if (prefix.isEmpty()) return "";
        }
    }
    return prefix;
}`
    }),
    q("strings", "Longest Substring Without Repeating Characters", "Medium", product, {
      problem: "Find the length of the longest substring with no repeated characters.",
      intuition: "Maintain a valid sliding window where every character appears at most once.",
      approach: "Use a map of last seen positions. Move left pointer past the previous occurrence whenever a duplicate enters the window.",
      dryRun: "abcabcbb -> best window abc has length 3.",
      complexity: "O(n) time and O(k) space for distinct characters.",
      mistakes: ["Moving left backward", "Updating answer before fixing duplicate", "Using substring when only length is needed"],
      tip: "State the window invariant: no duplicate characters inside left to right.",
      tags: ["Sliding window", "HashMap", "Product favorite"],
      code: `static int lengthOfLongestUniqueSubstring(String s) {
    Map<Character, Integer> last = new HashMap<>();
    int left = 0, best = 0;
    for (int right = 0; right < s.length(); right++) {
        char ch = s.charAt(right);
        if (last.containsKey(ch)) {
            left = Math.max(left, last.get(ch) + 1);
        }
        last.put(ch, right);
        best = Math.max(best, right - left + 1);
    }
    return best;
}`
    }),
    q("strings", "String Compression", "Medium", product, {
      problem: "Compress consecutive repeated characters by writing the character followed by its count.",
      intuition: "A run of identical characters can be represented by one character and a frequency count.",
      approach: "Traverse with index i, count how many same characters continue, append character and count, then jump to the next run.",
      dryRun: "aaabbc -> a3b2c1.",
      complexity: "O(n) time and O(n) space for the compressed string.",
      mistakes: ["Forgetting the final run", "Using plus concatenation repeatedly", "Changing format when count is one without confirming requirement"],
      tip: "Clarify whether single characters should show count one or remain as the character only.",
      tags: ["Run length", "StringBuilder", "Medium"],
      code: `static String compress(String s) {
    StringBuilder ans = new StringBuilder();
    int i = 0;
    while (i < s.length()) {
        char ch = s.charAt(i);
        int count = 0;
        while (i < s.length() && s.charAt(i) == ch) {
            count++;
            i++;
        }
        ans.append(ch).append(count);
    }
    return ans.toString();
}`
    }),
    q("strings", "Check Rotation of String", "Medium", product, {
      problem: "Check whether one string is a rotation of another string.",
      intuition: "If b is a rotation of a, then b must appear inside a+a.",
      approach: "Check equal length first, then return whether the doubled first string contains the second string.",
      dryRun: "waterbottle and erbottlewat -> waterbottlewaterbottle contains erbottlewat.",
      complexity: "O(n) to O(n squared) depending on contains implementation, O(n) space for doubled string.",
      mistakes: ["Skipping length check", "Trying all rotations manually", "Confusing rotation with anagram"],
      tip: "This is a compact trick question. Explain why doubling captures every rotation.",
      tags: ["Rotation", "String trick", "Interview"],
      code: `static boolean isRotation(String a, String b) {
    if (a.length() != b.length()) return false;
    return (a + a).contains(b);
}`
    })
  );
})();

(function () {
  var q = window.CodeCrackData.helpers.q;
  var addQuestions = window.CodeCrackData.helpers.addQuestions;
  var product = ["Amazon-style OA", "General Product Companies"];
  var service = ["TCS NQT", "Infosys"];

  addQuestions(
    q("linked-list", "Find Length of Linked List", "Easy", service, {
      problem: "Given the head of a linked list, return the number of nodes.",
      intuition: "Linked lists do not have direct length, so we count nodes while walking through next references.",
      approach: "Start count at zero and move a pointer from head to null, incrementing count for every node visited.",
      dryRun: "1 -> 2 -> 3 -> null visits three nodes, so length is 3.",
      complexity: "O(n) time and O(1) space.",
      mistakes: ["Accessing next after pointer becomes null", "Forgetting empty list returns zero", "Trying index-based access"],
      tip: "Say traversal is sequential because linked lists do not support random access.",
      tags: ["Traversal", "Linked list basics", "Warm-up"],
      code: `// ListNode has int val and ListNode next.
static int length(ListNode head) {
    int count = 0;
    ListNode current = head;
    while (current != null) {
        count++;
        current = current.next;
    }
    return count;
}`
    }),
    q("linked-list", "Reverse a Linked List", "Easy", product, {
      problem: "Reverse a singly linked list and return the new head.",
      intuition: "Each node's next pointer must be redirected to the previous node.",
      approach: "Use prev, curr, and next pointers. Save next, reverse curr.next, then advance prev and curr.",
      dryRun: "1 -> 2 -> 3 becomes 3 -> 2 -> 1 after links are reversed one by one.",
      complexity: "O(n) time and O(1) space.",
      mistakes: ["Losing the next node", "Returning old head", "Updating pointers in the wrong order"],
      tip: "The mantra save, reverse, advance is easy to say and remember.",
      tags: ["Pointer reversal", "Classic", "Interview"],
      code: `static ListNode reverseList(ListNode head) {
    ListNode prev = null;
    ListNode curr = head;
    while (curr != null) {
        ListNode next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}`
    }),
    q("linked-list", "Middle of Linked List", "Easy", product, {
      problem: "Return the middle node of a linked list.",
      intuition: "If fast moves two steps and slow moves one step, slow reaches the middle when fast reaches the end.",
      approach: "Initialize slow and fast at head. Move slow by one and fast by two while fast can move.",
      dryRun: "1 -> 2 -> 3 -> 4 -> 5 gives slow at 3 when fast reaches the end.",
      complexity: "O(n) time and O(1) space.",
      mistakes: ["Missing fast.next null check", "Not clarifying first or second middle for even length", "Using two passes unnecessarily"],
      tip: "For even length, this version returns the second middle.",
      tags: ["Slow-fast", "Pointer", "LeetCode"],
      code: `static ListNode middleNode(ListNode head) {
    ListNode slow = head, fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}`
    }),
    q("linked-list", "Detect Cycle in Linked List", "Medium", product, {
      problem: "Check whether a linked list contains a cycle.",
      intuition: "If a fast pointer and slow pointer run inside a cycle, they must eventually meet.",
      approach: "Move slow one step and fast two steps. If they meet, return true. If fast reaches null, no cycle exists.",
      dryRun: "In a cyclic list, fast keeps looping and eventually catches slow.",
      complexity: "O(n) time and O(1) space.",
      mistakes: ["Using HashSet when O(1) space is asked", "Not checking fast.next", "Returning true too early"],
      tip: "Call it Floyd's cycle detection algorithm to sound precise.",
      tags: ["Floyd cycle", "Slow-fast", "Product"],
      code: `static boolean hasCycle(ListNode head) {
    ListNode slow = head, fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) return true;
    }
    return false;
}`
    }),
    q("linked-list", "Merge Two Sorted Lists", "Easy", product, {
      problem: "Merge two sorted linked lists into one sorted linked list.",
      intuition: "Always attach the smaller current node to the result and advance that list.",
      approach: "Use a dummy node to simplify head handling. Compare list nodes and attach the smaller one until one list ends, then attach the remainder.",
      dryRun: "1->3 and 2->4 merge as 1->2->3->4.",
      complexity: "O(n + m) time and O(1) extra space.",
      mistakes: ["Not using dummy and overcomplicating head", "Forgetting leftover nodes", "Breaking original links incorrectly"],
      tip: "Dummy nodes are a clean way to avoid special casing the first insertion.",
      tags: ["Merge", "Dummy node", "Sorted list"],
      code: `static ListNode mergeTwoLists(ListNode a, ListNode b) {
    ListNode dummy = new ListNode(0);
    ListNode tail = dummy;
    while (a != null && b != null) {
        if (a.val <= b.val) {
            tail.next = a;
            a = a.next;
        } else {
            tail.next = b;
            b = b.next;
        }
        tail = tail.next;
    }
    tail.next = (a != null) ? a : b;
    return dummy.next;
}`
    }),
    q("linked-list", "Remove Nth Node from End", "Medium", product, {
      problem: "Remove the nth node from the end of a linked list.",
      intuition: "A gap of n nodes between fast and slow makes slow land before the node to delete.",
      approach: "Use a dummy node. Move fast n steps, then move fast and slow together until fast reaches the end. Delete slow.next.",
      dryRun: "For 1->2->3->4->5 and n=2, delete 4.",
      complexity: "O(n) time and O(1) space.",
      mistakes: ["Deleting head incorrectly", "Moving fast one step too many", "Not using dummy for edge cases"],
      tip: "The dummy node makes removing the first real node safe.",
      tags: ["Two pointers", "Dummy node", "Medium"],
      code: `static ListNode removeNthFromEnd(ListNode head, int n) {
    ListNode dummy = new ListNode(0);
    dummy.next = head;
    ListNode fast = dummy, slow = dummy;
    for (int i = 0; i < n; i++) fast = fast.next;
    while (fast.next != null) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
}`
    }),
    q("linked-list", "Intersection of Two Linked Lists", "Medium", product, {
      problem: "Find the node where two singly linked lists intersect by reference.",
      intuition: "If two pointers switch lists at the end, they travel equal total distance and meet at the intersection.",
      approach: "Run pointer a on list A and pointer b on list B. When a reaches null, move it to headB; when b reaches null, move it to headA.",
      dryRun: "Different length prefixes get balanced after pointers switch heads.",
      complexity: "O(n + m) time and O(1) space.",
      mistakes: ["Comparing values instead of node references", "Not handling no intersection", "Using length math when pointer switching is simpler"],
      tip: "Emphasize reference equality, not equal node values.",
      tags: ["Two pointers", "Intersection", "Interview"],
      code: `static ListNode getIntersectionNode(ListNode headA, ListNode headB) {
    ListNode a = headA, b = headB;
    while (a != b) {
        a = (a == null) ? headB : a.next;
        b = (b == null) ? headA : b.next;
    }
    return a;
}`
    }),
    q("linked-list", "Palindrome Linked List", "Medium", product, {
      problem: "Check whether a linked list is a palindrome.",
      intuition: "Compare the first half with the reversed second half.",
      approach: "Find the middle using slow-fast pointers, reverse the second half, then compare values from both halves.",
      dryRun: "1->2->2->1 has second half reversed as 1->2, matching the first half.",
      complexity: "O(n) time and O(1) extra space.",
      mistakes: ["Using extra array when O(1) is expected", "Not handling odd length", "Forgetting to compare values, not nodes"],
      tip: "If time permits, mention you can restore the second half after checking.",
      tags: ["Slow-fast", "Reverse", "Palindrome"],
      code: `static boolean isPalindrome(ListNode head) {
    ListNode slow = head, fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    ListNode second = reverseList(slow);
    ListNode first = head;
    while (second != null) {
        if (first.val != second.val) return false;
        first = first.next;
        second = second.next;
    }
    return true;
}

static ListNode reverseList(ListNode head) {
    ListNode prev = null, curr = head;
    while (curr != null) {
        ListNode next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}`
    }),
    q("linked-list", "Odd Even Linked List", "Medium", product, {
      problem: "Group nodes at odd positions first, followed by nodes at even positions.",
      intuition: "Maintain separate odd and even chains while preserving relative order inside each group.",
      approach: "Keep odd, even, and evenHead pointers. Rewire odd.next and even.next alternately, then attach evenHead after odd.",
      dryRun: "1->2->3->4->5 becomes 1->3->5->2->4.",
      complexity: "O(n) time and O(1) space.",
      mistakes: ["Confusing node values with positions", "Losing evenHead", "Breaking links in the wrong order"],
      tip: "Clarify that odd and even refer to positions, not values.",
      tags: ["Pointer rewiring", "Medium", "LeetCode"],
      code: `static ListNode oddEvenList(ListNode head) {
    if (head == null) return null;
    ListNode odd = head;
    ListNode even = head.next;
    ListNode evenHead = even;
    while (even != null && even.next != null) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
}`
    }),
    q("linked-list", "Sort Linked List of 0s, 1s, and 2s", "Medium", product, {
      problem: "Sort a linked list containing only 0, 1, and 2 values.",
      intuition: "Because values are limited, counting occurrences is simpler than general sorting.",
      approach: "Count zeros, ones, and twos, then traverse again and overwrite node values in sorted order.",
      dryRun: "2->1->0->1 becomes counts 0:1, 1:2, 2:1 and output 0->1->1->2.",
      complexity: "O(n) time and O(1) space.",
      mistakes: ["Using merge sort unnecessarily", "Not preserving nodes when only values can be changed", "Wrong count decrement logic"],
      tip: "Mention that this solution changes values; if values cannot change, use three dummy lists.",
      tags: ["Counting", "Linked list", "Service-to-product"],
      code: `static ListNode sort012(ListNode head) {
    int[] count = new int[3];
    for (ListNode cur = head; cur != null; cur = cur.next) {
        count[cur.val]++;
    }
    ListNode cur = head;
    for (int value = 0; value <= 2; value++) {
        while (count[value]-- > 0) {
            cur.val = value;
            cur = cur.next;
        }
    }
    return head;
}`
    }),

    q("stack-queue", "Valid Parentheses", "Easy", product, {
      problem: "Check whether a string of brackets is valid.",
      intuition: "The most recent opening bracket must be closed first, which is exactly stack behavior.",
      approach: "Push opening brackets. For closing brackets, stack top must match the expected opening bracket.",
      dryRun: "({[]}) pushes (, {, [, then closes in reverse order.",
      complexity: "O(n) time and O(n) space.",
      mistakes: ["Popping empty stack", "Not checking bracket type", "Returning true before stack is empty"],
      tip: "Use stack for nested structure problems.",
      tags: ["Stack", "Parsing", "LeetCode"],
      code: `static boolean isValid(String s) {
    Stack<Character> st = new Stack<>();
    for (char ch : s.toCharArray()) {
        if (ch == '(' || ch == '{' || ch == '[') {
            st.push(ch);
        } else {
            if (st.isEmpty()) return false;
            char top = st.pop();
            if (ch == ')' && top != '(') return false;
            if (ch == '}' && top != '{') return false;
            if (ch == ']' && top != '[') return false;
        }
    }
    return st.isEmpty();
}`
    }),
    q("stack-queue", "Next Greater Element", "Medium", product, {
      problem: "For each element, find the next greater element on its right.",
      intuition: "A decreasing stack stores elements waiting for a greater value.",
      approach: "Traverse from right to left. Pop smaller or equal values, answer is stack top if present, then push current value.",
      dryRun: "[4,5,2,10] -> answers [5,10,10,-1].",
      complexity: "O(n) time and O(n) space.",
      mistakes: ["Using nested loops", "Wrong comparison in pop condition", "Forgetting to push current value"],
      tip: "Each element is pushed and popped at most once, which explains linear time.",
      tags: ["Monotonic stack", "Next greater", "Medium"],
      code: `static int[] nextGreater(int[] arr) {
    int n = arr.length;
    int[] ans = new int[n];
    Stack<Integer> st = new Stack<>();
    for (int i = n - 1; i >= 0; i--) {
        while (!st.isEmpty() && st.peek() <= arr[i]) st.pop();
        ans[i] = st.isEmpty() ? -1 : st.peek();
        st.push(arr[i]);
    }
    return ans;
}`
    }),
    q("stack-queue", "Design Min Stack", "Medium", product, {
      problem: "Design a stack that supports push, pop, top, and getMin in constant time.",
      intuition: "Store the minimum value so far alongside every pushed value.",
      approach: "Use two stacks: one for values and one for minimums. On push, min stack receives the smaller of new value and current minimum.",
      dryRun: "Push 5, 2, 7 -> min stack stores 5, 2, 2, so getMin is 2.",
      complexity: "O(1) time for each operation and O(n) space.",
      mistakes: ["Updating min only when smaller but not duplicating it", "Not popping from both stacks", "Ignoring empty stack calls"],
      tip: "This design question tests API thinking, not just one method.",
      tags: ["Design", "Stack", "Product"],
      code: `class MinStack {
    Stack<Integer> values = new Stack<>();
    Stack<Integer> mins = new Stack<>();

    void push(int x) {
        values.push(x);
        mins.push(mins.isEmpty() ? x : Math.min(x, mins.peek()));
    }

    int pop() {
        mins.pop();
        return values.pop();
    }

    int top() {
        return values.peek();
    }

    int getMin() {
        return mins.peek();
    }
}`
    }),
    q("stack-queue", "Implement Queue using Two Stacks", "Medium", product, {
      problem: "Implement queue operations using two stacks.",
      intuition: "One stack receives new values, and the second stack reverses order when we need the front.",
      approach: "Push into input stack. For pop or peek, if output stack is empty, move all input elements to output stack, then read output top.",
      dryRun: "Push 1,2,3. Move to output gives top 1, preserving FIFO order.",
      complexity: "Amortized O(1) per operation and O(n) space.",
      mistakes: ["Moving elements on every pop", "Popping from input directly", "Not handling empty queue"],
      tip: "Use amortized analysis: each item moves from input to output only once.",
      tags: ["Design", "Two stacks", "Queue"],
      code: `class MyQueue {
    Stack<Integer> in = new Stack<>();
    Stack<Integer> out = new Stack<>();

    void push(int x) {
        in.push(x);
    }

    int pop() {
        moveIfNeeded();
        return out.pop();
    }

    int peek() {
        moveIfNeeded();
        return out.peek();
    }

    void moveIfNeeded() {
        if (out.isEmpty()) {
            while (!in.isEmpty()) out.push(in.pop());
        }
    }
}`
    }),
    q("stack-queue", "Implement Stack using Queues", "Medium", product, {
      problem: "Implement stack operations using a queue.",
      intuition: "To make the newest element come out first, rotate older elements behind it after every push.",
      approach: "Offer the new value, then rotate the queue size minus one times so the new value becomes the front.",
      dryRun: "Push 1 then 2. Rotate 1 behind 2, so pop returns 2.",
      complexity: "Push is O(n), pop and top are O(1), space is O(n).",
      mistakes: ["Returning oldest element", "Rotating wrong number of times", "Using two queues when one queue is enough"],
      tip: "State the trade-off: this version makes pop cheap by making push costlier.",
      tags: ["Design", "Queue", "Stack"],
      code: `class MyStack {
    Queue<Integer> q = new LinkedList<>();

    void push(int x) {
        q.offer(x);
        for (int i = 0; i < q.size() - 1; i++) {
            q.offer(q.poll());
        }
    }

    int pop() {
        return q.poll();
    }

    int top() {
        return q.peek();
    }
}`
    }),
    q("stack-queue", "Stock Span Problem", "Medium", product, {
      problem: "For each day, find how many consecutive previous days had price less than or equal to today's price.",
      intuition: "A monotonic stack of indices keeps previous greater prices that can block the span.",
      approach: "For each price, pop indices with price not greater than current. Span is i+1 if stack is empty, otherwise i minus stack top.",
      dryRun: "[100,80,60,70,60,75,85] -> spans [1,1,1,2,1,4,6].",
      complexity: "O(n) time and O(n) space.",
      mistakes: ["Storing values when index is needed", "Wrong pop condition", "Using nested loops"],
      tip: "Stock span is the same family as next greater element.",
      tags: ["Monotonic stack", "Stock span", "Classic"],
      code: `static int[] stockSpan(int[] prices) {
    int n = prices.length;
    int[] span = new int[n];
    Stack<Integer> st = new Stack<>();
    for (int i = 0; i < n; i++) {
        while (!st.isEmpty() && prices[st.peek()] <= prices[i]) st.pop();
        span[i] = st.isEmpty() ? i + 1 : i - st.peek();
        st.push(i);
    }
    return span;
}`
    }),
    q("stack-queue", "Sliding Window Maximum", "Hard", product, {
      problem: "Find the maximum value in every window of size k.",
      intuition: "A deque can store only useful candidate indices in decreasing value order.",
      approach: "Remove out-of-window indices from front. Remove smaller values from back. Add current index, and front gives max for each full window.",
      dryRun: "[1,3,-1,-3,5,3,6,7], k=3 -> [3,3,5,5,6,7].",
      complexity: "O(n) time and O(k) space.",
      mistakes: ["Storing values instead of indices", "Not removing old indices", "Using priority queue when deque is expected"],
      tip: "Emphasize that each index enters and leaves the deque once.",
      tags: ["Deque", "Sliding window", "Hard"],
      code: `static int[] maxSlidingWindow(int[] nums, int k) {
    int n = nums.length;
    int[] ans = new int[n - k + 1];
    Deque<Integer> dq = new ArrayDeque<>();
    for (int i = 0; i < n; i++) {
        while (!dq.isEmpty() && dq.peekFirst() <= i - k) dq.pollFirst();
        while (!dq.isEmpty() && nums[dq.peekLast()] <= nums[i]) dq.pollLast();
        dq.offerLast(i);
        if (i >= k - 1) ans[i - k + 1] = nums[dq.peekFirst()];
    }
    return ans;
}`
    }),
    q("stack-queue", "First Non-Repeating Character in Stream", "Medium", product, {
      problem: "For every character arriving in a stream, print the first non-repeating character so far.",
      intuition: "A queue preserves arrival order, while frequency tells whether a character is still unique.",
      approach: "Increase frequency, add character to queue, and remove queue front while its frequency is more than one.",
      dryRun: "aabc -> outputs a, #, b, b.",
      complexity: "O(n) time and O(k) space for distinct characters.",
      mistakes: ["Scanning the full stream after every character", "Not removing repeated front characters", "Using queue without frequency"],
      tip: "This is a beautiful queue plus frequency map use-case.",
      tags: ["Queue", "Stream", "Frequency"],
      code: `static String firstNonRepeatingStream(String s) {
    int[] freq = new int[256];
    Queue<Character> q = new LinkedList<>();
    StringBuilder ans = new StringBuilder();
    for (char ch : s.toCharArray()) {
        freq[ch]++;
        q.offer(ch);
        while (!q.isEmpty() && freq[q.peek()] > 1) q.poll();
        ans.append(q.isEmpty() ? '#' : q.peek());
    }
    return ans.toString();
}`
    }),
    q("stack-queue", "Design Circular Queue", "Medium", product, {
      problem: "Implement a circular queue with fixed capacity.",
      intuition: "Modulo arithmetic wraps front and rear indices back to the beginning of the array.",
      approach: "Maintain array, front, rear, size, and capacity. Enqueue at rear, dequeue from front, and wrap indices using modulo.",
      dryRun: "With capacity 3, after rear reaches index 2, the next enqueue can wrap to index 0 if space exists.",
      complexity: "O(1) time for enqueue and dequeue, O(k) space.",
      mistakes: ["Confusing full and empty states", "Not wrapping indices", "Forgetting to update size"],
      tip: "Using size avoids ambiguity between full and empty states.",
      tags: ["Design", "Circular queue", "Modulo"],
      code: `class CircularQueue {
    int[] data;
    int front = 0, rear = 0, size = 0;

    CircularQueue(int k) {
        data = new int[k];
    }

    boolean enQueue(int value) {
        if (size == data.length) return false;
        data[rear] = value;
        rear = (rear + 1) % data.length;
        size++;
        return true;
    }

    boolean deQueue() {
        if (size == 0) return false;
        front = (front + 1) % data.length;
        size--;
        return true;
    }
}`
    }),
    q("stack-queue", "Rotten Oranges", "Medium", product, {
      problem: "Given a grid of fresh and rotten oranges, find the minimum minutes to rot all fresh oranges.",
      intuition: "Rot spreads level by level from all initially rotten oranges, so multi-source BFS fits perfectly.",
      approach: "Push all rotten cells into a queue. For each minute, process one BFS layer and rot adjacent fresh oranges.",
      dryRun: "All starting rotten cells spread together in minute 1, then newly rotten cells spread in minute 2.",
      complexity: "O(rows * cols) time and O(rows * cols) space.",
      mistakes: ["Starting BFS from only one rotten orange", "Not counting fresh oranges", "Incrementing time after no new orange rots"],
      tip: "Call it multi-source BFS; that phrase is very interview-friendly.",
      tags: ["Queue", "BFS", "Grid"],
      code: `static int orangesRotting(int[][] grid) {
    int rows = grid.length, cols = grid[0].length;
    Queue<int[]> q = new LinkedList<>();
    int fresh = 0;
    for (int r = 0; r < rows; r++) {
        for (int c = 0; c < cols; c++) {
            if (grid[r][c] == 2) q.offer(new int[] { r, c });
            if (grid[r][c] == 1) fresh++;
        }
    }
    int[][] dirs = {{1,0},{-1,0},{0,1},{0,-1}};
    int minutes = 0;
    while (!q.isEmpty() && fresh > 0) {
        int size = q.size();
        minutes++;
        for (int i = 0; i < size; i++) {
            int[] cell = q.poll();
            for (int[] d : dirs) {
                int nr = cell[0] + d[0], nc = cell[1] + d[1];
                if (nr < 0 || nc < 0 || nr >= rows || nc >= cols || grid[nr][nc] != 1) continue;
                grid[nr][nc] = 2;
                fresh--;
                q.offer(new int[] { nr, nc });
            }
        }
    }
    return fresh == 0 ? minutes : -1;
}`
    })
  );
})();
