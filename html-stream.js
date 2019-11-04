'use strict'

const trumpet = require('trumpet')
const through = require('through2')
const tr = trumpet()

let loud = tr.select('.loud').createStream()

loud.pipe(through(function (buf, enc, next) {
        this.push(buf.toString().toUpperCase())

        next()
    }))
    .pipe(loud)

process.stdin.pipe(tr).pipe(process.stdout)