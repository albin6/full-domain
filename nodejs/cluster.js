const http = require('http')
const cluster = require('cluster')
const totalCPUs = require('os').cpus().length

if (cluster.isMaster) {
    for (let i = 0; i < totalCPUs; i++) {
        cluster.fork()
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(worker)
        console.log(code)
        console.log(signal)
    })
} else {
    http.createServer((req, res) => {
        if (req.url == '/slow') {
            let start = new Date()
            for (let i = 0; i < 10000000000; i++) {
                
            }
            let end = new Date() - start
            res.end(`Response after ${end} seconds`)
        }
        if (req.url == '/fast') {
            res.end('fast page')
        }
    }).listen(3000)
}