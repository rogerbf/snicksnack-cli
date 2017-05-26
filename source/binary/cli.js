#!/usr/bin/env node
const snicksnack = require(`snicksnack`)
const application = require(`commander`)
const clipboard = require(`clipboardy`)

const output = data =>
  application.clipboard
  ? clipboard.writeSync(data)
  : console.log(data)

application
.version(`1.0.0`)
.option(`-c, --clipboard`, `output to clipboard`)

application
.command(`words <number>`)
.alias(`w`)
.description(`output <number> of words`)
.action((number, options) => {
  output(snicksnack.words(parseInt(number, 10)).join(` `))
})

application
.command(`sentences <number>`)
.alias(`s`)
.description(`output <number> of sentences`)
.action((number, options) => {
  output(snicksnack.sentences(parseInt(number, 10)).join(` `).trim())
})

application.parse(process.argv)
