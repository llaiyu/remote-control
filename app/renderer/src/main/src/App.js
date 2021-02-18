import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {ipcRenderer} from 'electron'
//1、 webpack 不会去解析electron的依赖 ,篡改cra

//const {ipcRenderer} = window.require('electron')
// 2、修改Webpack的Target


function App() {
  const [remoteCode, setRemoteCode] = useState('')
  const [localCode, setLocalCode] = useState('')
  const [controlText, setControlText] = useState('')
  const login = async() => {
    let code = await ipcRenderer.invoke('login')
    setLocalCode(code)
  }

  // useEffect()

  return (
    <div className="App">
     {
       controlText === '' ? <>
        <div>你的控制码 {localCode}</div>
        <input type="text" value={remoteCode}/>
        <button>确认</button> 
        </> : <div>{controlText}</div>
     }
    </div>
  );
}

export default App;
