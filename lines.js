'use strict'

const split = require('split2')
const through = require('through2')
const stream = through(write, end)

var lineNumber = 0

function write(buf, encoding, next) {
    let chunk = ((lineNumber % 2 === 0) 
                ? buf.toString().toLowerCase()
                : buf.toString().toUpperCase()) + "\n"
    this.push( chunk )

    lineNumber++

    next()
}

function end(done) {
    done()
}

process.stdin
    .pipe(split())
    .pipe(stream)
    .pipe(process.stdout)