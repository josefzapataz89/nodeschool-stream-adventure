'use strict'

const through = require('through2')
const stream = through(write, end)

function write(buf, encoding, next) {
    this.push(buf.toString().toUpperCase())
    next()
}

function end(done) {
    done()
}

process.stdin.pipe(stream).pipe(process.stdout)