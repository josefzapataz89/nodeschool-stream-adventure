'use strict'

const http = require('http')
const through = require('through2')

const PORT = Number(process.argv[2])

http.createServer((req, res) => {
        if(req.method === 'POST') {
            req.pipe(through(function (buf, enc, next) {
                    this.push(buf.toString().toUpperCase())
                    next()
                }))
                .pipe(res)
        }
        else {
            res.end('Send me a POST\n')
        }
    })
    .listen(PORT)