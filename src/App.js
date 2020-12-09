import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import x from './variaveis.js'; // esse é para os casos do default
import { x, y } from './variaveis.js';
import Titulo from './Titulo.js';
import TituloExtend from './TituloExtend.js';
import TituloAttr from './TituloAttr.js';
import TituloHref from './TituloHref.js';
import TituloState from './TituloState.js'
import TituloClick from './TituloClick.js';
import MeuComponent from './MeuComponente.js';

class App extends Component { //transformei a função em class extendendo de componente
  acaoDoBotao() {
    alert('Evento disparado');
  }
  //function App() {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Titulo></Titulo>
          <TituloExtend></TituloExtend>
          <TituloAttr texto='Titulo com atributo'></TituloAttr>
          <TituloHref texto="TASDF"></TituloHref>
          <TituloState></TituloState>
          <TituloClick></TituloClick>
          <MeuComponent texto="Clique aqui" funcao={this.acaoDoBotao}>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>item 3</li>
              
            </ul>
          </MeuComponent>
          <p>
            {/* Edit <code>src/App.js</code> and save to reload. */}
          Esse é meu novo texto. {x} <br />
            {y}

          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}//adicionado depois
export default App;
