import React from 'react';
import axios from 'axios';
import NavBar from './components/NavBar';
import PlayerCards from './components/PlayerCards';
import './App.scss';

class App extends React.Component {
  constructor(){
    super();
    this.state = { data: [] }
  }

  componentDidMount(){
    axios
        .get(`http://localhost:5000/api/players`)
        .then(response => {
            //console.log(response.data)
            this.setState({
                data: response.data
            })
        })
  }

  render(){
    return (
      <div className="App"> 
        <NavBar />
        <h1>Hello World</h1>
        <PlayerCards players={this.state.data} />
      </div>
    );
  }
}

export default App;
