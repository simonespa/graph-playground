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

A complete graph with N nodes is denoted Kn and the number of edges is equal to `n(n − 1)/2 edges`

<img src="https://render.githubusercontent.com/render/math?math=\frac{3}{2}">
