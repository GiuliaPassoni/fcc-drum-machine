import React, { Component } from 'react';
import './App.css';
import MyTest from "./MyTest";

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const keyToTrigger = {67:'C', 88:'X', 90:'Z', 68:'D', 83:'S', 65:'A', 69:'E', 87:'W',81:'Q'};

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      name:'hello'
    }
    this.handleKeyPress=this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown',this.handleKeyPress);
  }

  handleKeyPress(event){
    let q = document.getElementById(keyToTrigger[event.keyCode]);
    document.getElementById("b-"+event.keyCode).focus();
    q.currentTime = 0;
    q.play();
    const something = bankOne.find(element => element.keyCode === event.keyCode);
    this.setState({
      name:something.id
    })
  }

  changeName(name){
    this.setState({
      name:name
    });
  }

  render() {
    let buttons = bankOne.map((i,idx)=><MyTest f={this.changeName.bind(this)} data={bankOne[idx]}/>);
    console.log('buttons',buttons);
    let names = bankOne.map((i,idx)=>bankOne[idx].id);
    console.log('names',names);
    return (
        <div>
          <main>
            <div id='drum-machine'>
              <div id='display'>{this.state.name}</div>
              <div id='b-container'>
                {buttons}
              </div>
              {/* {bankOne.map((i,idx)=>{<Test data={bankOne[idx]}/>})} */}
            </div>
          </main>
          <footer>Coded by Giulia Passoni 2022</footer>
        </div>


    );
  }
}
export default App;
