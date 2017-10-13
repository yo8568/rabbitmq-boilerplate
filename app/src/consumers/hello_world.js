
import amqp from 'amqplib/callback_api'
import { amqpUri } from './config'

const consumer = amqp.connect(amqpUri, (err, conn) => {
  if (err) throw Error(err)
  conn.createChannel((err, ch) => {
    if (err) throw Error(err)
    const queue = 'hello'

    ch.assertQueue(queue, {durable: false})
    console.log(' [*] Waiting for messages in %s. To exit press CTRL+C', queue)
    ch.consume(queue, msg => {
      console.log('[x] Received %s', msg.content.toString())
    }, { noAck: true })
  })
})

export default consumer
