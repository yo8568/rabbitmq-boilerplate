import amqp from 'amqplib/callback_api'
import { amqpUri } from './config'
import { Buffer } from 'safe-buffer'

const broker = amqp.connect(amqpUri, (err, conn) => {
  if (err) throw Error()
  conn.createChannel((err, ch) => {
    if (err) throw Error()
    const queue = 'hello'
    ch.assertQueue(queue, { durable: false })
    ch.sendToQueue(queue, new Buffer('Hello World!'))
    console.log(" [x] Sent 'Hello World!'")
  })
  setTimeout(() => { conn.close(); process.exit(0) }, 500)
})

export default broker
