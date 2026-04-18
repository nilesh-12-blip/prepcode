(function () {
  var q = window.CodeCrackData.helpers.q;
  var addQuestions = window.CodeCrackData.helpers.addQuestions;
  var product = ["Amazon-style OA", "General Product Companies"];

  addQuestions(
    q("trees", "Inorder Traversal", "Easy", product, {
      problem: "Return the inorder traversal of a binary tree.",
      intuition: "Inorder traversal visits left subtree, then root, then right subtree.",
      approach: "Use recursion. If root is null, return. Traverse left, add root value, then traverse right.",
      dryRun: "For root 2 with left 1 and right 3, inorder gives 1, 2, 3.",
      complexity: "O(n) time and O(h) recursion space, where h is tree height.",
      mistakes: ["Forgetting null base case", "Mixing traversal order", "Assuming inorder is sorted for every binary tree"],
      tip: "Mention that inorder is sorted only for a valid BST.",
      tags: ["DFS", "Traversal", "Tree basics"],
      code: `// TreeNode has int val, TreeNode left, and TreeNode right.
static List<Integer> inorderTraversal(TreeNode root) {
    List<Integer> ans = new ArrayList<>();
    inorder(root, ans);
    return ans;
}

static void inorder(TreeNode root, List<Integer> ans) {
    if (root == null) return;
    inorder(root.left, ans);
    ans.add(root.val);
    inorder(root.right, ans);
}`
    }),
    q("trees", "Level Order Traversal", "Medium", product, {
      problem: "Return the level order traversal of a binary tree.",
      intuition: "Level order processes nodes breadth first, so a queue is the natural structure.",
      approach: "Push root into queue. For each level, process queue size nodes and push their children.",
      dryRun: "Tree 1 with children 2 and 3 returns levels [1], [2,3].",
      complexity: "O(n) time and O(w) space, where w is maximum width.",
      mistakes: ["Not separating levels", "Adding null children", "Forgetting empty tree"],
      tip: "The queue size at the start of a loop gives the exact current level size.",
      tags: ["BFS", "Queue", "Tree"],
      code: `static List<List<Integer>> levelOrder(TreeNode root) {
    List<List<Integer>> ans = new ArrayList<>();
    if (root == null) return ans;
    Queue<TreeNode> q = new LinkedList<>();
    q.offer(root);
    while (!q.isEmpty()) {
        int size = q.size();
        List<Integer> level = new ArrayList<>();
        for (int i = 0; i < size; i++) {
            TreeNode node = q.poll();
            level.add(node.val);
            if (node.left != null) q.offer(node.left);
            if (node.right != null) q.offer(node.right);
        }
        ans.add(level);
    }
    return ans;
}`
    }),
    q("trees", "Height of Binary Tree", "Easy", product, {
      problem: "Find the height or maximum depth of a binary tree.",
      intuition: "The height of a node is one plus the maximum height of its children.",
      approach: "Use recursion. Null height is zero. Return one plus max height of left and right subtree.",
      dryRun: "A single-node tree has height 1.",
      complexity: "O(n) time and O(h) space.",
      mistakes: ["Confusing edge count and node count", "Missing null base case", "Recomputing unnecessarily in related problems"],
      tip: "Clarify whether height is measured in nodes or edges before coding.",
      tags: ["Recursion", "Depth", "Tree"],
      code: `static int height(TreeNode root) {
    if (root == null) return 0;
    return 1 + Math.max(height(root.left), height(root.right));
}`
    }),
    q("trees", "Diameter of Binary Tree", "Medium", product, {
      problem: "Find the diameter of a binary tree, measured as the number of edges in the longest path between any two nodes.",
      intuition: "At each node, the longest path passing through it is left height plus right height.",
      approach: "Compute heights recursively and update a global best diameter at each node.",
      dryRun: "If left height is 2 and right height is 3 at a node, path through that node has 5 edges.",
      complexity: "O(n) time and O(h) space.",
      mistakes: ["Recomputing height for every node", "Returning diameter instead of height from helper", "Mixing edge and node definitions"],
      tip: "The helper returns height, while the external variable stores best diameter.",
      tags: ["Tree DP", "Height", "Medium"],
      code: `static int diameter(TreeNode root) {
    int[] best = new int[1];
    heightForDiameter(root, best);
    return best[0];
}

static int heightForDiameter(TreeNode root, int[] best) {
    if (root == null) return 0;
    int left = heightForDiameter(root.left, best);
    int right = heightForDiameter(root.right, best);
    best[0] = Math.max(best[0], left + right);
    return 1 + Math.max(left, right);
}`
    }),
    q("trees", "Check Balanced Binary Tree", "Medium", product, {
      problem: "Check whether a binary tree is height-balanced.",
      intuition: "A tree is balanced if every node has left and right subtree heights differing by at most one.",
      approach: "Use postorder recursion. Return height if balanced; return -1 as a signal when any subtree is unbalanced.",
      dryRun: "If one subtree returns -1, the entire tree is immediately unbalanced.",
      complexity: "O(n) time and O(h) space.",
      mistakes: ["Calculating height repeatedly for every node", "Checking only the root", "Forgetting absolute height difference"],
      tip: "The -1 sentinel is a clean way to combine validation and height calculation.",
      tags: ["Postorder", "Balanced tree", "Optimization"],
      code: `static boolean isBalanced(TreeNode root) {
    return checkHeight(root) != -1;
}

static int checkHeight(TreeNode root) {
    if (root == null) return 0;
    int left = checkHeight(root.left);
    if (left == -1) return -1;
    int right = checkHeight(root.right);
    if (right == -1) return -1;
    if (Math.abs(left - right) > 1) return -1;
    return 1 + Math.max(left, right);
}`
    }),
    q("trees", "Validate Binary Search Tree", "Medium", product, {
      problem: "Check whether a binary tree is a valid BST.",
      intuition: "Every node must lie inside a valid range, not just compare with its direct children.",
      approach: "Pass low and high bounds recursively. Left child must be below root, and right child must be above root.",
      dryRun: "A right child inside the left subtree must still be less than the original root bound.",
      complexity: "O(n) time and O(h) space.",
      mistakes: ["Comparing only parent and child", "Ignoring duplicate policy", "Using int bounds when node values may be extreme"],
      tip: "Range propagation is the safest explanation for BST validation.",
      tags: ["BST", "DFS", "Medium"],
      code: `static boolean isValidBST(TreeNode root) {
    return valid(root, Long.MIN_VALUE, Long.MAX_VALUE);
}

static boolean valid(TreeNode root, long low, long high) {
    if (root == null) return true;
    if (root.val <= low || root.val >= high) return false;
    return valid(root.left, low, root.val) && valid(root.right, root.val, high);
}`
    }),
    q("trees", "Lowest Common Ancestor", "Medium", product, {
      problem: "Find the lowest common ancestor of two nodes in a binary tree.",
      intuition: "If one target is found in the left subtree and the other in the right subtree, the current node is the answer.",
      approach: "Return root if it is null or one of the target nodes. Recursively search left and right. If both return non-null, root is LCA.",
      dryRun: "If p is under left child and q is under right child, current root is their lowest shared ancestor.",
      complexity: "O(n) time and O(h) space.",
      mistakes: ["Assuming BST property when it is a normal binary tree", "Returning too early incorrectly", "Comparing values when node references are expected"],
      tip: "Ask whether the tree is binary tree or BST because the optimized BST solution is different.",
      tags: ["DFS", "LCA", "Tree interview"],
      code: `static TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
    if (root == null || root == p || root == q) return root;
    TreeNode left = lowestCommonAncestor(root.left, p, q);
    TreeNode right = lowestCommonAncestor(root.right, p, q);
    if (left != null && right != null) return root;
    return left != null ? left : right;
}`
    }),
    q("trees", "Left View of Binary Tree", "Medium", product, {
      problem: "Return the nodes visible from the left side of a binary tree.",
      intuition: "The first node encountered at each level is visible from the left.",
      approach: "Use BFS level order and add the first node of every level to the answer.",
      dryRun: "For levels [1], [2,3], [4,5], left view is 1,2,4.",
      complexity: "O(n) time and O(w) space.",
      mistakes: ["Adding the last node instead of first", "Not separating levels", "Confusing left view with preorder traversal"],
      tip: "Right view is the same idea but uses the last node of each level.",
      tags: ["BFS", "View", "Tree"],
      code: `static List<Integer> leftView(TreeNode root) {
    List<Integer> ans = new ArrayList<>();
    if (root == null) return ans;
    Queue<TreeNode> q = new LinkedList<>();
    q.offer(root);
    while (!q.isEmpty()) {
        int size = q.size();
        for (int i = 0; i < size; i++) {
            TreeNode node = q.poll();
            if (i == 0) ans.add(node.val);
            if (node.left != null) q.offer(node.left);
            if (node.right != null) q.offer(node.right);
        }
    }
    return ans;
}`
    }),
    q("trees", "Kth Smallest in BST", "Medium", product, {
      problem: "Find the kth smallest value in a BST.",
      intuition: "Inorder traversal of a BST visits values in sorted order.",
      approach: "Perform inorder traversal and decrement k when visiting a node. The node that makes k zero is the answer.",
      dryRun: "For BST values 1,2,3,4 and k=3, answer is 3.",
      complexity: "O(h + k) time in early-stop traversal and O(h) space.",
      mistakes: ["Traversing the whole tree unnecessarily", "Forgetting BST inorder property", "Using global variables carelessly"],
      tip: "This question is a direct application of inorder traversal on BST.",
      tags: ["BST", "Inorder", "Medium"],
      code: `static int kthSmallest(TreeNode root, int k) {
    Stack<TreeNode> st = new Stack<>();
    TreeNode curr = root;
    while (curr != null || !st.isEmpty()) {
        while (curr != null) {
            st.push(curr);
            curr = curr.left;
        }
        curr = st.pop();
        if (--k == 0) return curr.val;
        curr = curr.right;
    }
    return -1;
}`
    }),
    q("trees", "Maximum Path Sum", "Hard", product, {
      problem: "Find the maximum path sum in a binary tree, where a path may start and end at any nodes.",
      intuition: "Each node can contribute one best downward path to its parent, but it can use both children to update the global answer.",
      approach: "Use postorder recursion. Ignore negative child gains, update best as left gain plus node value plus right gain, and return node value plus max child gain.",
      dryRun: "At node 10 with gains 7 and 12, a path through node gives 29.",
      complexity: "O(n) time and O(h) space.",
      mistakes: ["Returning both branches to parent", "Not ignoring negative gains", "Initializing best as zero when all values can be negative"],
      tip: "Separate the path used for global answer from the path returned to the parent.",
      tags: ["Tree DP", "Hard", "Product"],
      code: `static int maxPathSum(TreeNode root) {
    int[] best = { Integer.MIN_VALUE };
    maxGain(root, best);
    return best[0];
}

static int maxGain(TreeNode root, int[] best) {
    if (root == null) return 0;
    int left = Math.max(0, maxGain(root.left, best));
    int right = Math.max(0, maxGain(root.right, best));
    best[0] = Math.max(best[0], root.val + left + right);
    return root.val + Math.max(left, right);
}`
    }),

    q("graphs", "BFS Traversal", "Easy", product, {
      problem: "Perform BFS traversal of a graph from a source node.",
      intuition: "BFS visits nodes level by level using a queue.",
      approach: "Mark source visited, push it into queue, then repeatedly pop and push unvisited neighbors.",
      dryRun: "From node 0, all direct neighbors are visited before neighbors of those neighbors.",
      complexity: "O(V + E) time and O(V) space.",
      mistakes: ["Marking visited after polling instead of before enqueueing", "Forgetting disconnected components", "Using stack accidentally"],
      tip: "Visit when enqueuing to avoid adding the same node multiple times.",
      tags: ["BFS", "Queue", "Graph basics"],
      code: `static List<Integer> bfs(List<List<Integer>> graph, int source) {
    boolean[] visited = new boolean[graph.size()];
    List<Integer> order = new ArrayList<>();
    Queue<Integer> q = new LinkedList<>();
    visited[source] = true;
    q.offer(source);
    while (!q.isEmpty()) {
        int node = q.poll();
        order.add(node);
        for (int next : graph.get(node)) {
            if (!visited[next]) {
                visited[next] = true;
                q.offer(next);
            }
        }
    }
    return order;
}`
    }),
    q("graphs", "DFS Traversal", "Easy", product, {
      problem: "Perform DFS traversal of a graph from a source node.",
      intuition: "DFS explores one path deeply before backtracking.",
      approach: "Mark the node visited, add it to order, then recursively visit every unvisited neighbor.",
      dryRun: "From 0, DFS may visit 0 -> 1 -> 3 before returning to explore another branch.",
      complexity: "O(V + E) time and O(V) recursion space.",
      mistakes: ["Forgetting visited array", "Infinite recursion on cycles", "Assuming one DFS covers disconnected graph"],
      tip: "DFS order depends on adjacency list order, so do not overpromise one exact order unless edges are ordered.",
      tags: ["DFS", "Recursion", "Graph basics"],
      code: `static List<Integer> dfsTraversal(List<List<Integer>> graph, int source) {
    boolean[] visited = new boolean[graph.size()];
    List<Integer> order = new ArrayList<>();
    dfs(source, graph, visited, order);
    return order;
}

static void dfs(int node, List<List<Integer>> graph, boolean[] visited, List<Integer> order) {
    visited[node] = true;
    order.add(node);
    for (int next : graph.get(node)) {
        if (!visited[next]) dfs(next, graph, visited, order);
    }
}`
    }),
    q("graphs", "Number of Islands", "Medium", product, {
      problem: "Count islands in a grid of land and water.",
      intuition: "Every unvisited land cell starts a new island, and DFS marks all connected land in that island.",
      approach: "Scan the grid. When land is found, increment count and run DFS in four directions to mark the island.",
      dryRun: "A block of connected 1 cells is counted once because DFS marks all of them.",
      complexity: "O(rows * cols) time and O(rows * cols) recursion space in worst case.",
      mistakes: ["Not marking visited before recursive calls", "Missing boundary checks", "Counting diagonal cells when only four directions are allowed"],
      tip: "This is a graph problem disguised as a matrix problem.",
      tags: ["Grid DFS", "Connected components", "Product"],
      code: `static int numIslands(char[][] grid) {
    int count = 0;
    for (int r = 0; r < grid.length; r++) {
        for (int c = 0; c < grid[0].length; c++) {
            if (grid[r][c] == '1') {
                count++;
                sink(grid, r, c);
            }
        }
    }
    return count;
}

static void sink(char[][] grid, int r, int c) {
    if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] != '1') return;
    grid[r][c] = '0';
    sink(grid, r + 1, c);
    sink(grid, r - 1, c);
    sink(grid, r, c + 1);
    sink(grid, r, c - 1);
}`
    }),
    q("graphs", "Cycle Detection in Undirected Graph", "Medium", product, {
      problem: "Detect whether an undirected graph contains a cycle.",
      intuition: "During DFS, visiting an already visited neighbor that is not the parent means a cycle exists.",
      approach: "Run DFS from every unvisited node. Pass parent along with current node and check visited neighbors.",
      dryRun: "If node 2 sees visited node 0 and parent is 1, the graph has a cycle.",
      complexity: "O(V + E) time and O(V) space.",
      mistakes: ["Not tracking parent", "Only checking from node zero", "Treating the parent edge as a cycle"],
      tip: "Disconnected graphs require starting DFS from every unvisited node.",
      tags: ["DFS", "Cycle", "Undirected"],
      code: `static boolean hasCycleUndirected(List<List<Integer>> graph) {
    boolean[] visited = new boolean[graph.size()];
    for (int i = 0; i < graph.size(); i++) {
        if (!visited[i] && cycleDfs(i, -1, graph, visited)) return true;
    }
    return false;
}

static boolean cycleDfs(int node, int parent, List<List<Integer>> graph, boolean[] visited) {
    visited[node] = true;
    for (int next : graph.get(node)) {
        if (!visited[next]) {
            if (cycleDfs(next, node, graph, visited)) return true;
        } else if (next != parent) {
            return true;
        }
    }
    return false;
}`
    }),
    q("graphs", "Cycle Detection in Directed Graph", "Medium", product, {
      problem: "Detect whether a directed graph contains a cycle.",
      intuition: "A cycle exists if DFS reaches a node already in the current recursion path.",
      approach: "Use visited and pathVisited arrays. Mark node in current path before exploring and unmark after returning.",
      dryRun: "If 0 -> 1 -> 2 and 2 points back to 1, node 1 is still in the recursion path, so cycle exists.",
      complexity: "O(V + E) time and O(V) space.",
      mistakes: ["Using undirected parent logic", "Forgetting to unmark pathVisited", "Not checking disconnected components"],
      tip: "For directed graphs, current path matters more than parent.",
      tags: ["Directed graph", "DFS", "Cycle"],
      code: `static boolean hasCycleDirected(List<List<Integer>> graph) {
    boolean[] visited = new boolean[graph.size()];
    boolean[] path = new boolean[graph.size()];
    for (int i = 0; i < graph.size(); i++) {
        if (!visited[i] && directedDfs(i, graph, visited, path)) return true;
    }
    return false;
}

static boolean directedDfs(int node, List<List<Integer>> graph, boolean[] visited, boolean[] path) {
    visited[node] = true;
    path[node] = true;
    for (int next : graph.get(node)) {
        if (!visited[next] && directedDfs(next, graph, visited, path)) return true;
        if (path[next]) return true;
    }
    path[node] = false;
    return false;
}`
    }),
    q("graphs", "Topological Sort using Kahn's Algorithm", "Medium", product, {
      problem: "Return a topological ordering of a directed acyclic graph.",
      intuition: "Nodes with zero indegree have no pending prerequisites and can be processed first.",
      approach: "Compute indegree, push zero-indegree nodes into queue, pop nodes and reduce indegree of neighbors.",
      dryRun: "If course A has no prerequisite, it enters the queue before courses depending on it.",
      complexity: "O(V + E) time and O(V) space.",
      mistakes: ["Trying topological sort on undirected graph", "Forgetting to update indegree", "Not detecting cycle when result size is smaller than V"],
      tip: "Kahn's algorithm is BFS-style topological sorting.",
      tags: ["Topological sort", "Kahn", "DAG"],
      code: `static List<Integer> topoSort(int n, List<List<Integer>> graph) {
    int[] indegree = new int[n];
    for (int u = 0; u < n; u++) {
        for (int v : graph.get(u)) indegree[v]++;
    }
    Queue<Integer> q = new LinkedList<>();
    for (int i = 0; i < n; i++) if (indegree[i] == 0) q.offer(i);
    List<Integer> order = new ArrayList<>();
    while (!q.isEmpty()) {
        int node = q.poll();
        order.add(node);
        for (int next : graph.get(node)) {
            if (--indegree[next] == 0) q.offer(next);
        }
    }
    return order;
}`
    }),
    q("graphs", "Shortest Path in Unweighted Graph", "Medium", product, {
      problem: "Find shortest distance from a source node to every node in an unweighted graph.",
      intuition: "BFS reaches nodes in increasing number of edges, so the first distance assigned is shortest.",
      approach: "Initialize distances as -1, set source distance to zero, and BFS through neighbors while assigning distance plus one.",
      dryRun: "Source neighbors get distance 1, their unvisited neighbors get distance 2.",
      complexity: "O(V + E) time and O(V) space.",
      mistakes: ["Using DFS for shortest unweighted path", "Not initializing unreachable nodes", "Updating a visited distance repeatedly"],
      tip: "Use BFS for unweighted shortest path; use Dijkstra when edge weights matter.",
      tags: ["BFS", "Shortest path", "Unweighted"],
      code: `static int[] shortestPathUnweighted(List<List<Integer>> graph, int source) {
    int[] dist = new int[graph.size()];
    Arrays.fill(dist, -1);
    Queue<Integer> q = new LinkedList<>();
    dist[source] = 0;
    q.offer(source);
    while (!q.isEmpty()) {
        int node = q.poll();
        for (int next : graph.get(node)) {
            if (dist[next] == -1) {
                dist[next] = dist[node] + 1;
                q.offer(next);
            }
        }
    }
    return dist;
}`
    }),
    q("graphs", "Dijkstra's Algorithm", "Hard", product, {
      problem: "Find shortest distances from a source in a graph with non-negative edge weights.",
      intuition: "Always expand the currently known closest node first using a priority queue.",
      approach: "Initialize distances as infinity, push source with distance zero, and relax edges whenever a shorter path is found.",
      dryRun: "If source reaches node 2 with cost 5 and later cost 3, update distance and push the improved state.",
      complexity: "O((V + E) log V) time and O(V + E) space.",
      mistakes: ["Using Dijkstra with negative edges", "Not skipping stale priority queue entries", "Forgetting relaxation condition"],
      tip: "Say non-negative weights explicitly. That is a key correctness condition.",
      tags: ["Dijkstra", "PriorityQueue", "Hard"],
      code: `static int[] dijkstra(int n, List<List<int[]>> graph, int source) {
    int[] dist = new int[n];
    Arrays.fill(dist, Integer.MAX_VALUE);
    PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[1]));
    dist[source] = 0;
    pq.offer(new int[] { source, 0 });
    while (!pq.isEmpty()) {
        int[] cur = pq.poll();
        int node = cur[0], d = cur[1];
        if (d != dist[node]) continue;
        for (int[] edge : graph.get(node)) {
            int next = edge[0], weight = edge[1];
            if (dist[node] + weight < dist[next]) {
                dist[next] = dist[node] + weight;
                pq.offer(new int[] { next, dist[next] });
            }
        }
    }
    return dist;
}`
    }),
    q("graphs", "Check Bipartite Graph", "Medium", product, {
      problem: "Check whether a graph can be colored using two colors so that adjacent nodes have different colors.",
      intuition: "A graph is bipartite if BFS or DFS can assign alternating colors without conflict.",
      approach: "Use a color array initialized to -1. For each component, BFS and assign opposite color to neighbors.",
      dryRun: "A triangle fails because the third edge connects two nodes that need the same color.",
      complexity: "O(V + E) time and O(V) space.",
      mistakes: ["Checking only one component", "Not detecting same-color neighbor conflict", "Using visited only without color"],
      tip: "Bipartite checking is often hidden inside possible grouping problems.",
      tags: ["BFS", "Coloring", "Medium"],
      code: `static boolean isBipartite(List<List<Integer>> graph) {
    int n = graph.size();
    int[] color = new int[n];
    Arrays.fill(color, -1);
    for (int start = 0; start < n; start++) {
        if (color[start] != -1) continue;
        Queue<Integer> q = new LinkedList<>();
        color[start] = 0;
        q.offer(start);
        while (!q.isEmpty()) {
            int node = q.poll();
            for (int next : graph.get(node)) {
                if (color[next] == -1) {
                    color[next] = 1 - color[node];
                    q.offer(next);
                } else if (color[next] == color[node]) {
                    return false;
                }
            }
        }
    }
    return true;
}`
    }),
    q("graphs", "Flood Fill", "Easy", product, {
      problem: "Change the color of a connected region in an image starting from a given cell.",
      intuition: "The connected region is found by DFS or BFS over cells with the original color.",
      approach: "Store original color. If it is already the new color, return. Otherwise DFS in four directions and recolor matching cells.",
      dryRun: "Starting at a blue cell recolors every connected blue neighbor but stops at different colors.",
      complexity: "O(rows * cols) time in worst case and O(rows * cols) recursion space.",
      mistakes: ["Infinite recursion when new color equals original color", "Missing bounds checks", "Recoloring diagonal cells when not allowed"],
      tip: "Flood fill is matrix DFS with a color condition.",
      tags: ["Grid DFS", "Flood fill", "Easy"],
      code: `static int[][] floodFill(int[][] image, int sr, int sc, int newColor) {
    int oldColor = image[sr][sc];
    if (oldColor == newColor) return image;
    fill(image, sr, sc, oldColor, newColor);
    return image;
}

static void fill(int[][] image, int r, int c, int oldColor, int newColor) {
    if (r < 0 || c < 0 || r >= image.length || c >= image[0].length) return;
    if (image[r][c] != oldColor) return;
    image[r][c] = newColor;
    fill(image, r + 1, c, oldColor, newColor);
    fill(image, r - 1, c, oldColor, newColor);
    fill(image, r, c + 1, oldColor, newColor);
    fill(image, r, c - 1, oldColor, newColor);
}`
    })
  );
})();

(function () {
  var q = window.CodeCrackData.helpers.q;
  var addQuestions = window.CodeCrackData.helpers.addQuestions;
  var product = ["Amazon-style OA", "General Product Companies"];
  var service = ["Capgemini", "TCS NQT"];

  addQuestions(
    q("recursion", "Factorial using Recursion", "Easy", service, {
      problem: "Compute factorial of n using recursion.",
      intuition: "n factorial equals n multiplied by factorial of n minus one.",
      approach: "Base case is n equal to zero or one. Recursive case returns n times factorial of n minus one.",
      dryRun: "fact(4) -> 4 * fact(3) -> 4 * 3 * 2 * 1 = 24.",
      complexity: "O(n) time and O(n) recursion space.",
      mistakes: ["Missing base case", "Using base case n equal to zero incorrectly", "Not reducing n"],
      tip: "This is the cleanest way to explain base case plus smaller problem.",
      tags: ["Base case", "Recursion basics", "Service"],
      code: `static long factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}`
    }),
    q("recursion", "Recursive Power", "Easy", service, {
      problem: "Compute x raised to n using recursion.",
      intuition: "Power can be split into smaller powers; if n is even, use half power twice.",
      approach: "Use divide-and-conquer recursion. Compute half power once, square it, and multiply by x if n is odd.",
      dryRun: "2^5 -> half is 2^2 = 4, answer is 4 * 4 * 2 = 32.",
      complexity: "O(log n) time and O(log n) recursion space.",
      mistakes: ["Calling power twice for the same half", "Not handling n equal to zero", "Ignoring negative powers if asked"],
      tip: "This is recursion plus optimization, not plain repeated multiplication.",
      tags: ["Divide and conquer", "Power", "Math"],
      code: `static long power(long x, int n) {
    if (n == 0) return 1;
    long half = power(x, n / 2);
    long ans = half * half;
    if (n % 2 == 1) ans *= x;
    return ans;
}`
    }),
    q("recursion", "Sum of Array Recursively", "Easy", service, {
      problem: "Find the sum of all elements in an array using recursion.",
      intuition: "The sum from index i is arr[i] plus the sum from index i plus one.",
      approach: "Use index as recursion state. Base case returns zero when index reaches array length.",
      dryRun: "[2,4,6] -> 2 + sum(1), 4 + sum(2), 6 + sum(3), then zero.",
      complexity: "O(n) time and O(n) recursion space.",
      mistakes: ["Wrong index base case", "Skipping first or last element", "Changing array state unnecessarily"],
      tip: "This question teaches how recursion state can be an index.",
      tags: ["Array", "Recursion", "Easy"],
      code: `static int sumArray(int[] arr) {
    return sumFrom(arr, 0);
}

static int sumFrom(int[] arr, int index) {
    if (index == arr.length) return 0;
    return arr[index] + sumFrom(arr, index + 1);
}`
    }),
    q("recursion", "Reverse String Recursively", "Easy", service, {
      problem: "Reverse a string using recursion.",
      intuition: "Reverse of a string is reverse of the suffix followed by the first character.",
      approach: "If string length is at most one, return it. Otherwise recursively reverse substring from index one and append first character.",
      dryRun: "abc -> reverse(bc) + a -> cb + a -> cba.",
      complexity: "O(n^2) time with substring in Java and O(n) recursion space.",
      mistakes: ["Missing base case", "Creating too many substrings without noting cost", "Appending in wrong order"],
      tip: "For production efficiency use StringBuilder, but this version demonstrates recursive thinking.",
      tags: ["String", "Recursion", "Warm-up"],
      code: `static String reverseRecursive(String s) {
    if (s.length() <= 1) return s;
    return reverseRecursive(s.substring(1)) + s.charAt(0);
}`
    }),
    q("recursion", "Generate All Subsets", "Medium", product, {
      problem: "Generate all subsets of an integer array.",
      intuition: "For every element, we have two choices: include it or skip it.",
      approach: "Use backtracking with index and current list. At each index, explore skip choice and include choice.",
      dryRun: "[1,2] -> [], [2], [1], [1,2] depending on choice path.",
      complexity: "O(2^n * n) time and O(n) recursion path space excluding output.",
      mistakes: ["Adding the same list reference to answer", "Forgetting to remove after include choice", "Missing empty subset"],
      tip: "Say choose, recurse, unchoose for backtracking.",
      tags: ["Backtracking", "Subsets", "Product"],
      code: `static List<List<Integer>> subsets(int[] nums) {
    List<List<Integer>> ans = new ArrayList<>();
    backtrackSubsets(nums, 0, new ArrayList<>(), ans);
    return ans;
}

static void backtrackSubsets(int[] nums, int index, List<Integer> path, List<List<Integer>> ans) {
    if (index == nums.length) {
        ans.add(new ArrayList<>(path));
        return;
    }
    backtrackSubsets(nums, index + 1, path, ans);
    path.add(nums[index]);
    backtrackSubsets(nums, index + 1, path, ans);
    path.remove(path.size() - 1);
}`
    }),
    q("recursion", "Generate Permutations", "Medium", product, {
      problem: "Generate all permutations of distinct integers.",
      intuition: "At each position, choose one unused number and continue.",
      approach: "Use a boolean used array and path list. When path size equals nums length, add a copy to answer.",
      dryRun: "[1,2,3] branches by choosing 1 first, then 2 or 3, and so on.",
      complexity: "O(n! * n) time and O(n) recursion path space excluding output.",
      mistakes: ["Not marking and unmarking used values", "Adding path reference directly", "Forgetting distinct input assumption"],
      tip: "Permutation backtracking is about positions and unused choices.",
      tags: ["Backtracking", "Permutations", "Interview"],
      code: `static List<List<Integer>> permute(int[] nums) {
    List<List<Integer>> ans = new ArrayList<>();
    boolean[] used = new boolean[nums.length];
    permuteDfs(nums, used, new ArrayList<>(), ans);
    return ans;
}

static void permuteDfs(int[] nums, boolean[] used, List<Integer> path, List<List<Integer>> ans) {
    if (path.size() == nums.length) {
        ans.add(new ArrayList<>(path));
        return;
    }
    for (int i = 0; i < nums.length; i++) {
        if (used[i]) continue;
        used[i] = true;
        path.add(nums[i]);
        permuteDfs(nums, used, path, ans);
        path.remove(path.size() - 1);
        used[i] = false;
    }
}`
    }),
    q("recursion", "Tower of Hanoi", "Medium", service, {
      problem: "Print steps to move n disks from source rod to destination rod using an auxiliary rod.",
      intuition: "Move n-1 disks away, move the largest disk, then move n-1 disks onto it.",
      approach: "Base case moves one disk. Recursive case performs source-to-aux, source-to-destination, and aux-to-destination.",
      dryRun: "For n = 2, move disk 1 to aux, disk 2 to destination, then disk 1 to destination.",
      complexity: "O(2^n) moves and O(n) recursion space.",
      mistakes: ["Wrong rod order", "Missing base case", "Underestimating exponential moves"],
      tip: "This is a recursion classic; focus on faith in moving n-1 disks.",
      tags: ["Recursion classic", "Hanoi", "Service"],
      code: `static void towerOfHanoi(int n, char source, char aux, char dest) {
    if (n == 1) {
        System.out.println("Move disk 1 from " + source + " to " + dest);
        return;
    }
    towerOfHanoi(n - 1, source, dest, aux);
    System.out.println("Move disk " + n + " from " + source + " to " + dest);
    towerOfHanoi(n - 1, aux, source, dest);
}`
    }),
    q("recursion", "N-Queens Problem", "Hard", product, {
      problem: "Place n queens on an n by n chessboard so that no two queens attack each other.",
      intuition: "Place one queen per row and backtrack whenever a column or diagonal conflict occurs.",
      approach: "Use sets or boolean arrays for used columns and diagonals. Try every column in the current row, recurse, then undo the choice.",
      dryRun: "For each row, invalid columns are skipped because another queen already attacks them.",
      complexity: "O(n!) time in search space and O(n) path space excluding output.",
      mistakes: ["Checking the whole board repeatedly", "Forgetting diagonal formulas", "Not undoing state after recursion"],
      tip: "Diagonal identities are row-col and row+col.",
      tags: ["Backtracking", "Hard", "N Queens"],
      code: `static int totalNQueens(int n) {
    return placeQueen(0, n, new boolean[n], new boolean[2 * n], new boolean[2 * n]);
}

static int placeQueen(int row, int n, boolean[] col, boolean[] diag1, boolean[] diag2) {
    if (row == n) return 1;
    int count = 0;
    for (int c = 0; c < n; c++) {
        int d1 = row - c + n;
        int d2 = row + c;
        if (col[c] || diag1[d1] || diag2[d2]) continue;
        col[c] = diag1[d1] = diag2[d2] = true;
        count += placeQueen(row + 1, n, col, diag1, diag2);
        col[c] = diag1[d1] = diag2[d2] = false;
    }
    return count;
}`
    }),
    q("recursion", "Combination Sum", "Medium", product, {
      problem: "Find combinations where chosen numbers sum to target. A number may be reused.",
      intuition: "At each step, choose a candidate and reduce the remaining target.",
      approach: "Backtrack from a start index. Reuse is allowed, so after choosing i, recurse again with i as start.",
      dryRun: "Candidates [2,3,6,7], target 7 gives [2,2,3] and [7].",
      complexity: "Exponential time in number of combinations and O(target) recursion depth in worst case.",
      mistakes: ["Moving to i+1 when reuse is allowed", "Not stopping when target becomes negative", "Adding path reference directly"],
      tip: "Clarify whether reuse is allowed because it changes the recursive call.",
      tags: ["Backtracking", "Combination", "Medium"],
      code: `static List<List<Integer>> combinationSum(int[] candidates, int target) {
    List<List<Integer>> ans = new ArrayList<>();
    Arrays.sort(candidates);
    combDfs(candidates, target, 0, new ArrayList<>(), ans);
    return ans;
}

static void combDfs(int[] cand, int target, int start, List<Integer> path, List<List<Integer>> ans) {
    if (target == 0) {
        ans.add(new ArrayList<>(path));
        return;
    }
    for (int i = start; i < cand.length && cand[i] <= target; i++) {
        path.add(cand[i]);
        combDfs(cand, target - cand[i], i, path, ans);
        path.remove(path.size() - 1);
    }
}`
    }),
    q("recursion", "Recursive Binary Search", "Easy", service, {
      problem: "Search a sorted array using recursive binary search.",
      intuition: "Every comparison discards half of the search range.",
      approach: "If low is greater than high, return -1. Compare target with middle, then recurse into the correct half.",
      dryRun: "[1,3,5,7,9], target 7 -> mid 5, search right, mid 7 found.",
      complexity: "O(log n) time and O(log n) recursion space.",
      mistakes: ["Using binary search on unsorted data", "Overflow-prone mid calculation", "Wrong low and high update"],
      tip: "Use low + (high-low)/2 for safer midpoint.",
      tags: ["Binary search", "Recursion", "Easy"],
      code: `static int binarySearch(int[] arr, int target) {
    return search(arr, target, 0, arr.length - 1);
}

static int search(int[] arr, int target, int low, int high) {
    if (low > high) return -1;
    int mid = low + (high - low) / 2;
    if (arr[mid] == target) return mid;
    if (arr[mid] < target) return search(arr, target, mid + 1, high);
    return search(arr, target, low, mid - 1);
}`
    }),

    q("dynamic-programming", "Climbing Stairs", "Easy", product, {
      problem: "Count the number of ways to reach step n when you can climb 1 or 2 steps at a time.",
      intuition: "To reach step i, you could come from i-1 or i-2.",
      approach: "Use rolling variables for dp[i-2] and dp[i-1], then compute current ways.",
      dryRun: "n = 4 -> ways are 1, 2, 3, 5.",
      complexity: "O(n) time and O(1) space.",
      mistakes: ["Wrong base cases", "Returning Fibonacci index incorrectly", "Using recursion without memoization"],
      tip: "This is the simplest DP state transition: dp[i] = dp[i-1] + dp[i-2].",
      tags: ["DP basics", "Fibonacci pattern", "Easy"],
      code: `static int climbStairs(int n) {
    if (n <= 2) return n;
    int prev2 = 1, prev1 = 2;
    for (int i = 3; i <= n; i++) {
        int cur = prev1 + prev2;
        prev2 = prev1;
        prev1 = cur;
    }
    return prev1;
}`
    }),
    q("dynamic-programming", "House Robber", "Medium", product, {
      problem: "Find the maximum money you can rob without robbing adjacent houses.",
      intuition: "At every house, choose between skipping it or taking it plus best answer two houses back.",
      approach: "Track prev2 and prev1, where prev1 is best up to previous house and prev2 is best up to house before previous.",
      dryRun: "[2,7,9,3,1] -> best becomes 2, 7, 11, 11, 12.",
      complexity: "O(n) time and O(1) space.",
      mistakes: ["Greedily taking larger neighbor", "Wrong initialization for small arrays", "Forgetting adjacency constraint"],
      tip: "List the two choices: take or skip. That creates the transition.",
      tags: ["DP choice", "Optimization", "Medium"],
      code: `static int rob(int[] nums) {
    int prev2 = 0, prev1 = 0;
    for (int money : nums) {
        int take = money + prev2;
        int skip = prev1;
        int cur = Math.max(take, skip);
        prev2 = prev1;
        prev1 = cur;
    }
    return prev1;
}`
    }),
    q("dynamic-programming", "0/1 Knapsack", "Medium", product, {
      problem: "Maximize value with items that can be taken at most once and a capacity limit.",
      intuition: "For each item and capacity, choose whether to skip the item or take it if it fits.",
      approach: "Let dp[i][w] be max value using first i items and capacity w. Transition compares skip and take choices.",
      dryRun: "If item weight fits, answer is max(previous value, item value plus remaining capacity value).",
      complexity: "O(n * capacity) time and O(n * capacity) space.",
      mistakes: ["Using unbounded logic for 0/1 problem", "Wrong item index", "Not handling capacity zero"],
      tip: "This is the template for many pick-or-skip DP problems.",
      tags: ["Knapsack", "2D DP", "Classic"],
      code: `static int knapsack(int[] wt, int[] val, int capacity) {
    int n = wt.length;
    int[][] dp = new int[n + 1][capacity + 1];
    for (int i = 1; i <= n; i++) {
        for (int w = 0; w <= capacity; w++) {
            dp[i][w] = dp[i - 1][w];
            if (wt[i - 1] <= w) {
                dp[i][w] = Math.max(dp[i][w], val[i - 1] + dp[i - 1][w - wt[i - 1]]);
            }
        }
    }
    return dp[n][capacity];
}`
    }),
    q("dynamic-programming", "Coin Change Minimum Coins", "Medium", product, {
      problem: "Find the minimum number of coins needed to make a given amount.",
      intuition: "For every amount, try every coin and choose the best previous state.",
      approach: "Initialize dp[0] = 0 and all others as a large value. For each amount, relax using every coin that fits.",
      dryRun: "Coins 1,2,5 and amount 11 -> 5+5+1 uses 3 coins.",
      complexity: "O(amount * number of coins) time and O(amount) space.",
      mistakes: ["Not using infinity value", "Returning large value instead of -1", "Confusing minimum coins with number of ways"],
      tip: "This is minimization DP, not counting DP.",
      tags: ["Coin change", "1D DP", "Medium"],
      code: `static int coinChange(int[] coins, int amount) {
    int[] dp = new int[amount + 1];
    Arrays.fill(dp, amount + 1);
    dp[0] = 0;
    for (int a = 1; a <= amount; a++) {
        for (int coin : coins) {
            if (coin <= a) {
                dp[a] = Math.min(dp[a], 1 + dp[a - coin]);
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
}`
    }),
    q("dynamic-programming", "Longest Increasing Subsequence", "Medium", product, {
      problem: "Find the length of the longest strictly increasing subsequence.",
      intuition: "For each index, the best subsequence ending there can extend earlier smaller elements.",
      approach: "Set dp[i] = 1. For every previous j, if nums[j] is smaller than nums[i], update dp[i].",
      dryRun: "[10,9,2,5,3,7,101,18] -> LIS length is 4.",
      complexity: "O(n^2) time and O(n) space.",
      mistakes: ["Confusing subsequence with subarray", "Using non-strict comparison", "Returning last dp value instead of max over all dp"],
      tip: "Mention the O(n log n) optimized method if asked, but this DP is interview-readable.",
      tags: ["LIS", "Subsequence", "Medium"],
      code: `static int lengthOfLIS(int[] nums) {
    int n = nums.length;
    int[] dp = new int[n];
    Arrays.fill(dp, 1);
    int best = 0;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        best = Math.max(best, dp[i]);
    }
    return best;
}`
    }),
    q("dynamic-programming", "Longest Common Subsequence", "Medium", product, {
      problem: "Find the length of the longest subsequence common to two strings.",
      intuition: "If characters match, they contribute one plus the previous diagonal state; otherwise take the better of skipping one character.",
      approach: "Use dp[i][j] for prefixes of lengths i and j. Fill table row by row.",
      dryRun: "abcde and ace have LCS length 3 for ace.",
      complexity: "O(n * m) time and O(n * m) space.",
      mistakes: ["Confusing subsequence with substring", "Wrong indexing into strings", "Not handling empty prefix base cases"],
      tip: "LCS is the parent pattern for many string DP problems.",
      tags: ["String DP", "LCS", "Medium"],
      code: `static int lcs(String a, String b) {
    int n = a.length(), m = b.length();
    int[][] dp = new int[n + 1][m + 1];
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            if (a.charAt(i - 1) == b.charAt(j - 1)) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[n][m];
}`
    }),
    q("dynamic-programming", "Edit Distance", "Hard", product, {
      problem: "Find the minimum operations to convert one string to another using insert, delete, or replace.",
      intuition: "If last characters match, no operation is needed; otherwise try all three operations and take the minimum.",
      approach: "Use dp[i][j] for converting first i characters of word1 to first j characters of word2.",
      dryRun: "horse to ros needs 3 operations.",
      complexity: "O(n * m) time and O(n * m) space.",
      mistakes: ["Forgetting base cases for empty strings", "Mixing insert and delete indices", "Not adding one operation for mismatch"],
      tip: "Edit distance is a classic hard DP because the transition has three choices.",
      tags: ["String DP", "Hard", "Product"],
      code: `static int minDistance(String a, String b) {
    int n = a.length(), m = b.length();
    int[][] dp = new int[n + 1][m + 1];
    for (int i = 0; i <= n; i++) dp[i][0] = i;
    for (int j = 0; j <= m; j++) dp[0][j] = j;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            if (a.charAt(i - 1) == b.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], Math.min(dp[i - 1][j], dp[i][j - 1]));
            }
        }
    }
    return dp[n][m];
}`
    }),
    q("dynamic-programming", "Subset Sum", "Medium", product, {
      problem: "Check whether any subset of the array sums to target.",
      intuition: "For each value, choose to include it or skip it.",
      approach: "Use boolean dp where dp[s] tells whether sum s is possible. Traverse sums backward for every number.",
      dryRun: "nums [3,4,5], target 9 -> 4+5 makes target possible.",
      complexity: "O(n * target) time and O(target) space.",
      mistakes: ["Traversing sums forward and reusing an item multiple times", "Missing dp[0] true", "Confusing with contiguous subarray sum"],
      tip: "Backward traversal preserves 0/1 choice.",
      tags: ["Subset DP", "Boolean DP", "Medium"],
      code: `static boolean subsetSum(int[] nums, int target) {
    boolean[] dp = new boolean[target + 1];
    dp[0] = true;
    for (int num : nums) {
        for (int sum = target; sum >= num; sum--) {
            dp[sum] = dp[sum] || dp[sum - num];
        }
    }
    return dp[target];
}`
    }),
    q("dynamic-programming", "Unique Paths in Grid", "Medium", product, {
      problem: "Count the number of ways to move from top-left to bottom-right using only right and down moves.",
      intuition: "Every cell can be reached from the cell above it or the cell to its left.",
      approach: "Initialize first row and first column as one. Fill each cell as top plus left.",
      dryRun: "For 3 by 2 grid, paths count is 3.",
      complexity: "O(rows * cols) time and O(cols) space with rolling array.",
      mistakes: ["Wrong initialization", "Mixing rows and columns", "Not considering obstacle variant separately"],
      tip: "This is grid DP with movement constraints.",
      tags: ["Grid DP", "Counting", "Medium"],
      code: `static int uniquePaths(int rows, int cols) {
    int[] dp = new int[cols];
    Arrays.fill(dp, 1);
    for (int r = 1; r < rows; r++) {
        for (int c = 1; c < cols; c++) {
            dp[c] += dp[c - 1];
        }
    }
    return dp[cols - 1];
}`
    }),
    q("dynamic-programming", "Partition Equal Subset Sum", "Medium", product, {
      problem: "Check whether an array can be partitioned into two subsets with equal sum.",
      intuition: "If total sum is even, we only need to know whether any subset reaches half of the total.",
      approach: "Compute total. If odd, return false. Then run subset sum DP for target total divided by two.",
      dryRun: "[1,5,11,5] has total 22 and subset 11, so partition is possible.",
      complexity: "O(n * target) time and O(target) space.",
      mistakes: ["Trying to build both subsets explicitly", "Ignoring odd total sum", "Using forward sum loop and reusing items"],
      tip: "Reduce equal partition to subset sum. That reduction is the main insight.",
      tags: ["Knapsack pattern", "Subset sum", "Medium"],
      code: `static boolean canPartition(int[] nums) {
    int total = 0;
    for (int num : nums) total += num;
    if (total % 2 != 0) return false;
    int target = total / 2;
    boolean[] dp = new boolean[target + 1];
    dp[0] = true;
    for (int num : nums) {
        for (int sum = target; sum >= num; sum--) {
            dp[sum] = dp[sum] || dp[sum - num];
        }
    }
    return dp[target];
}`
    })
  );
})();
