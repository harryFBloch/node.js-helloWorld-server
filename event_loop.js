var events = require('events')

var eventEmitter = new events.EventEmitter()

var connectHandler = function connected() {
  console.log('connection succesful')

  //fire the data_recieved event
  eventEmitter.emit('data_recieved')
}

//Bind the connection even with the handler
eventEmitter.on('connection', connectHandler)

//Bind the data_recieved event with the anonymous function
eventEmitter.on('data_recieved', () => {
  console.log('data_recieved success')
})

//Fire the connection event
eventEmitter.emit('connection')

console.log('end')
