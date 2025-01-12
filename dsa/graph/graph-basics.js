class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
    }
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const connectedVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, connectedVertex)
        }
        delete this.adjacencyList[vertex]
    }
    removeEdge(edgeToRemove, vertex ) {
        this.adjacencyList[vertex] = this.adjacencyList[vertex].filter(v => v != edgeToRemove)
    }
    bfs() {
        const queue = ["A"]
        const result = []
        const visistedVertices = new Set()
        while (queue.length) {
            const vertex = queue.shift()
            if (!visistedVertices.has(vertex)) {
                visistedVertices.add(vertex)
                result.push(vertex)
                this.adjacencyList[vertex].forEach(v => {
                    if (!visistedVertices.has(v)) {
                        queue.push(v)
                    }
                })
            }
        }
        return result
    }
    dfs() {
        const stack = ['A']
        const visistedVertices = new Set()
        const result = []
        while (stack.length) {
            const vertex = stack.pop()
            if(!visistedVertices.has(vertex)) {
                result.push(vertex)
                visistedVertices.add(vertex)
                this.adjacencyList[vertex].forEach(v => {
                    if (!visistedVertices.has(v)) {
                        stack.push(v)
                    }
                })
            }
        }
        return result
    }
}

const graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('C', 'D')
graph.addEdge('D', 'A')
graph.addEdge('E', 'D')
graph.addEdge('E', 'B')

console.log(graph.adjacencyList)

// graph.removeVertex("A")

// console.log(graph.adjacencyList)

console.log(graph.bfs())
console.log(graph.dfs())