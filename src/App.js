import React from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './component/child/child'
import  { Parent } from './component/parent/parent'
import  {ParentFunctionComponent} from './component/parent/parent'

function App2() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <Child></Child>
        <ParentFunctionComponent></ParentFunctionComponent>
        <Parent></Parent>
      </header>
     
    </div>
    
  );
}

export default App2;
