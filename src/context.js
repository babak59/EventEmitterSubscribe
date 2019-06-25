import {MyEventManager} from "./component/manager/eventManager";


class Context {
    constructor()
    {
      this.eventManager=new MyEventManager();
    }
}
let context=new Context();
export default context;