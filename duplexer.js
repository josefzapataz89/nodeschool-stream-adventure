'use strict'

const {spawn} = require('child_process')
const duplexer = require('duplexer2')

module.exports = function (cmd, args) {
    let proc = spawn(cmd, args)
    
    return duplexer(proc.stdin, proc.stdout)
};