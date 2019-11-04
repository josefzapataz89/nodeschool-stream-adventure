'use strict'

const concat = require('concat-stream')

process.stdin.pipe(concat((data) => {
    let chunk = data.toString().split('').reverse().join('')

    console.log(chunk)
    
}))
