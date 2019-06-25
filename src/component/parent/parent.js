import React, { Component, useState } from 'react';
import context from '../../context'
import {CHILD_POCKED} from "../manager/consts";
import { longStackSupport } from 'q';
let inputSizeStyle={width: "370px"}
let ParentFunctionComponent=()=>{
  let[publishedValueFromChild, setPublishedValue] = useState("...");
     context.eventManager.on(CHILD_POCKED, (eventValue)=>{
      alert(`parent catched an event from child In function Component=> ${eventValue}`);
      setPublishedValue(eventValue);
    });
    return (<div> Function Component Parent:<input type="button" readOnly="true" style={inputSizeStyle} value={publishedValueFromChild} ></input></div>)
}
 export {ParentFunctionComponent}
 export default class Parent extends Component{
   state=({publishValueFromChild:'...'});
  constructor()
  {
    super();
    debugger;
    context.eventManager.on(CHILD_POCKED, this.update);
  }
   parentClick=()=>{
    alert('test');
}
  update=(eventValue)=>{
    debugger;
    alert(`parent catched an event from child in class Component=> ${eventValue}`);
    this.setState({publishValueFromChild:eventValue})
    }
     getParentValue=()=>{
       return "parent raised an event";
   }
    render()
    {
        return (<div> Class Component Parent: <input readOnly="true"  value={this.state.publishValueFromChild} style={inputSizeStyle} ></input></div>)
    }
}

export  {Parent}



