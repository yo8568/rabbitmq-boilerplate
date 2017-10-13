const app = ({ brokers, consumers }, callback = () => {}) => {
  try {
    if (brokers && brokers.length) brokers.map(broker => require(`./brokers/${broker}`))
    if (consumers && consumers.length) consumers.map(consumer => require(`./consumers/${consumer}`))
    callback(null)
  } catch (err) {
    callback(err)
  }
}

export default app
