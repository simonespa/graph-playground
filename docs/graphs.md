# Graphs
A graph G is an ordered pair G = (V, E) where V is a set of vertices and E a set of edges.
A graph can have directed or undirected edges. A graph with directed edges is also called Digraph.
Edges can also have a label that represents a weight or a cost. Graphs with weighted edges are called Weighted Graphs.
If both ends of an edge link to the same node, the edge is called loop.
Multiedge or parallel edge.
A simple graph is a graph without loops and multi edges.

## Types of Graphs

### Undirected graphs
(u, v) = (v, u)

### Digraphs
(u, v) != (v, u)

### Weighted graphs
(u, v, w)

### Trees
Undirected and acyclic graph. it is a connected graph with N vertices and N-1 edges.

### Rooted trees
In-tree (anti-arborescence) when edges point towards the designated root node.
Out-tree (arborescence) when the edges point away from the designated root node.

### DAGs
Directed Acyclic Graphs are ordering Digraphs with no cycles.
All arborescences are DAGs but not viceversa.
These graphs often represents structures with dependencies.

### Bipartite Graphs
When the set of vertices can be split in two independent sets such that every edge of one set is connected with one or more edges of the other set and viceversa, but no connection exists between the edges of the same set.

### Complete Graphs
In a complete graphs, each node is connected with every one.

A complete graph with N nodes is denoted Kn and the number of edges is equal to <img src="https://render.githubusercontent.com/render/math?math=\frac{N (N - 1)}{2}"> edges.

## Graph representation

### Adjacency matrix
The pros are:
- Space efficient for dense graphs
- Edge weight lookup is O(1)
- Simple graph representation

The cons are:
- Requires O(V^2) space
- Requires O(V^2) time to iterate over all edges
- Waste of space when the graph is sparse

### Adjacency list
It is a map of nodes to a list of other edges

The pros are:
- Space efficient for representing sparse graphs
- Iterating over all edges is efficient

The cons are:
- Less space efficient for dense graphs
- Edge weight lookup is O(E)
- More complext representation

### Edge list
It is an unordered list of edges.

## Common problems

### Shortest path problem
This is the most famous and common problem in graph theory.
Given a weighted graph, find the shortest path from node A to node B.
Algorithms:
- BFS on unweighted graph
- Dijkstra's algorithm
- Bellman–Ford algorithm
- A* search algorithm
- Floyd–Warshall algorithm
- Johnson's algorithm
- Viterbi algorithm
### Connectivity
Does a path from A to B exists?

Algorithms: union find, or any graph traversal algorithms (BFS, DFS, etc)

### Negatives cycles
Does a weighted digraph have any negative cycles?

Algorithms: Bellman-Ford and Floyd-Warshall

### Strongly connected components
Self-contained cycles within a digraph.

Algorithms Tarjan's and Kosaraju's

### Travel Salesman Problem (TSP)
Given a list of cities and the distances between them, find the shortest route that visits all cities exactly once, by returning to the origin.

Algorithms: Held-Karp (dynamic programming), Branch & Bound, approximation algorithms

This problem is NP-hard

### Bridges
A bridge is any edge in a graph whose removal increases the number of connected components.

This property is important because it helps in detecting single points of failure in a network.

### Articulation pointes
Same as the bridge, an articulation point is a node in a graph whose removal increases the number of connected components.

### Minimum Spanning Tree
A MST is subset of the edges of a connected, edge-weighted graph. The resulting graph is a tree with the minimum possible total edge weight.

Algorithms: Kruskal's, Prim's & Boruvka

### Network flos
The problem is represented by a weighted digraph, where the label on each edge represent the capacity of the link.

Algorithms: Ford-Fulkerson, Edmonds-Karp, Dinic

## Algorithms

### Depth-First Search
Time complexity: O(V+E)
