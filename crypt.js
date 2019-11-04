'use strict'

const crypto = require('crypto')

const passphrase = process.argv[2]

const stream = crypto.createDecipher('aes256', passphrase)

process.stdin
    .pipe(stream)
    .pipe(process.stdout)