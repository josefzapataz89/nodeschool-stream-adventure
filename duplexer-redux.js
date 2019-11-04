'use strict'

const duplexer = require('duplexer2')
const {obj} = require('through2')
  
module.exports = function (counter) {
    let counts = {}
    let input = obj(write, end)
    return duplexer({objectMode: true}, input, counter)
    
    function write (row, enc, next) {
        counts[row.country] = (counts[row.country] || 0) + 1
        next()
    }
    function end (done) {
        counter.setCounts(counts)
        done()
    }
}