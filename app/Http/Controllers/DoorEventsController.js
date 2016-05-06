'use strict'

class DoorEventsController {
	constructor(){
		this.DoorEvents = {
			state = 'open',
			timestamp = new Date().now();
		}
	}
	DoorEvents 
  
  * index (request, response) {
    const view = yield response.view('index')
    response.send(view)
  }

}
 
 * store (request, response) {

    response.send(view)
  }

}

module.exports = DoorEventsController
