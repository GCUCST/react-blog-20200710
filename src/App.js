import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header'

function App() {

  return (
    <div className="App" >
        <Header name="thisnameisme..." func={func} />
    </div>
  );
}

function func(){
  console.log("你在开玩笑")
}

export default App;
