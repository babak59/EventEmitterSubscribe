import React, { Component} from 'react';
import context from '../../context'
import {CHILD_POCKED} from "../manager/consts";

export default class Child extends Component{
  constructor()
  {
    super();
   
  }
  state={childPublishValue:''}
   clickChild=(e)=>{
      alert('chiled raised an event');
      debugger;
      context.eventManager.emit(CHILD_POCKED, ` published Value=>${this.state.childPublishValue.childPublishValue}`);
  }
     getChildValue=()=>{
       return "child value";
   }
   handleChange=(event)=>{
    let target=event.target;
    let result=this.state;
    result[target.name]=target.value;
    this.setState({childPublishValue:result});
   }
    render()
    {
        return (<div>
          <input  type="button" value="Notify Parent" onClick={e=>this.clickChild(e)}></input>
          <input placeholder="Value to publish..." name="childPublishValue" onChange={this.handleChange} ></input>
          </div>)
    }
}



