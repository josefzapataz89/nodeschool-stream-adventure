'use strict'

const crypto = require('crypto')
const cipher = process.argv[2]
const pw = process.argv[3]

const zlib = require('zlib')
const concat = require('concat-stream')

const tar = require('tar')
const parser = new tar.Parse()
parser.on('entry', function (e) {
    if (e.type !== 'File') return e.resume()

    var h = crypto.createHash('md5', { encoding: 'hex' })
    e.pipe(h).pipe(concat(function (hash) {
        console.log(`${hash} ${e.path}`)
    }))
})

process.stdin
    .pipe(crypto.createDecipher(cipher, pw))
    .pipe(zlib.createGunzip())
    .pipe(parser)
