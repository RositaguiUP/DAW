import React, { Component } from 'react';
import Header from './components/header';
import Pokemones from './components/pokemones';

class App extends Component {
  render(){
     return (
      <React.Fragment>
        <header>
          <h1>Pokedex</h1>
        </header>
        <main>
          <Pokemones/>
        </main>
      </React.Fragment>
    );
  }
 
}

export default App;
