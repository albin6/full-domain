class TrieNode {
    constructor() {
        this.children = {}
        this.endOfWord = false
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }
    insertWord(word) {
        let current = this.root
        for(let char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode()
            }
            current = current.children[char]
        }
        current.endOfWord = true
    }
    removeWord(word) {
        function removeWordHelper (node, word, depth) {
            if (!node) {
                return false
            }

            if (depth == word.length) {
                if (!node.endOfWord) {
                    return false
                }

                node.endOfWord = false

                return Object.keys(node.children).length == 0
            }

            const char  = word[depth]
            if (removeWordHelper(node.children[char], word, depth + 1)) {
                delete node.children[char]
            }

            return Object.keys(node.children).length == 0 && !node.endOfWord
        }
        removeWordHelper(this.root, word, 0)
    }
    search(word) {
        let current = this.root
        for (let char of word) {
            if (!current.children[char]) {
                return false
            }

            current = current.children[char]
        }
        return current.endOfWord
    }
    autoComplete(prefix) {
        const results = []

        let current = this.root
        for(let char of prefix) {
            if (!current.children[char]) {
                return []
            }
            current = current.children
        }
        
        function collectWords(node, prefix) {
            if (node.endOfWord) {
                results.push(prefix)
            }

            for(let char in node.children) {
                collectWords(node.children[char], prefix + char)
            }
        }

        collectWords(current, prefix)
        return results
    }
}