import React, { Component } from 'react';
class TituloClick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            texto: "Clique aqui 2"
        }
        this.funcao2 = this.funcao2.bind(this);
    }
    funcao(){
        alert('Você clicou no título');
    }
    funcao2(){
        this.setState({texto: "Voce clicou aqui"})
    }
    render() {
        return (
            <div>
                <h1 onClick={this.funcao}>Clique aqui 1</h1>
                <h1 onClick={this.funcao2}>{this.state.texto}</h1>
            </div>
        )
    }
}
export default TituloClick;