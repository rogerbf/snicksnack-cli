#!/usr/bin/env node
const snicksnack = require(`snicksnack`)
const application = require(`commander`)
const clipboard = require(`clipboardy`)
const { version } = require(`../../package`)

const output = data =>
  application.clipboard
  ? clipboard.writeSync(data)
  : console.log(data)

application
.version(version)
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

process.argv.length < 3 && application.help()

application.parse(process.argv)
