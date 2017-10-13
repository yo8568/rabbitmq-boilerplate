#!/usr/bin/env node

require('dotenv').config()

var program = require('commander')
var env = process.env.NODE_ENV || 'development'

program
  .option('-b, --brokers [name,...]', 'Run brokers')
  .option('-c, --consumers [name,...]', 'Run consumers')
  .option('-p, --ui-port [port]', 'Port for toureiro to listen to')
  .parse(process.argv)

if (program.brokers) runBrokers()
if (program.consumers) runConsumers()

function runBrokers () {
  var brokers = program.brokers ? program.brokers.split(',') : []
  var worker = (env === 'development') ? require('babel-register') && require('../src/app') : require('../dist/app')

  worker({ brokers }, function (err) {
    if (err) {
      console.log(err)
      process.exit(1)
    } else {
      console.log('Broker is running!')
    }
  })
}

function runConsumers () {
  var consumers = program.consumers ? program.consumers.split(',') : []
  var worker = (env === 'development') ? require('babel-register') && require('../src/app') : require('../dist/app')

  worker({ consumers }, function (err) {
    if (err) {
      console.log(err)
      process.exit(1)
    } else {
      console.log('Consumer is running!')
    }
  })
}
