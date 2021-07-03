# Algorithms

## Greedy algorithms

- Prim (Jarnik)
- Kruskal
- Dijkstra
- “Reverse-Delete” Algorithm

Both Prim’s and Kruskal’s algorithm finds the Minimum Spanning Tree and follow the Greedy approach of problem-solving, but there are few major differences between them.

**Prim’s Algorithm**
- It starts to build the Minimum Spanning Tree from any vertex in the graph.
- It traverses one node more than one time to get the minimum distance.
- Prim’s algorithm has a time complexity of O(V^2), V being the number of vertices and can be improved up to O(E + log V) using Fibonacci heaps.
- Prim’s algorithm gives connected component as well as it works only on connected graph.
- Prim’s algorithm runs faster in dense graphs.

**Kruskal’s Algorithm**
- It starts to build the Minimum Spanning Tree from the vertex carrying minimum weight in the graph.
- It traverses one node only once.
- Kruskal’s algorithm’s time complexity is O(E * log V), V being the number of vertices.
- Kruskal’s algorithm can generate forest(disconnected components) at any instant as well as it can work on disconnected components
- Kruskal’s algorithm runs faster in sparse graphs.

**Prim’s and Dijkstra’s algorithms have three main differences:**

Dijkstra’s algorithm finds the shortest path, but Prim’s algorithm finds the MST
Dijkstra’s algorithm can work on both directed and undirected graphs, but Prim’s algorithm only works on undirected graphs
Prim’s algorithm can handle negative edge weights, but Dijkstra’s algorithm may fail to accurately compute distances if at least one negative edge weight exists
In practice, Dijkstra’s algorithm is used when we want to save time and fuel traveling from one point to another. Prim’s algorithm, on the other hand, is used when we want to minimize material costs in constructing roads that connect multiple points to each other.

### Dijkstra algorithm
This algorithm finds the shortest path from a source node to all nodes in a graph, producing the so called Shortest Path Tree (SPT).
It can be applied to both directed and undirected graphs.
It doesn't work for graphs with negative weight cycles.

Time complexity: O(V^2)

### Prim's algorithm
Also known as Jarník's algorithm, it is a greedy algorithm that finds a minimum spanning tree for a weighted undirected graph.

### Reverse-delete algorithm
Sorts all edges in descending order of weight and remove them one by one verifying that the removed edge is not a bridge (doesn't disconnect the graph).
