import { EventEmitter } from "events";
export class MyEventManager {
	private eventEmitter = new EventEmitter();

	on = (eventName:string, listener:any) => {
		this.eventEmitter.on(eventName, listener);
	}

	removeEventListener = (eventName:string, listener:any) => {
		this.eventEmitter.removeListener(eventName, listener);
	}

	emit = (event:any, playload:any, error = false) => {
		this.eventEmitter.emit(event, playload, error);
	}

	getEventEmitter = () => this.eventEmitter;
}
export default MyEventManager;