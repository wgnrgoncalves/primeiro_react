import React, {Component} from 'react';

class MeuComponente extends Component{
    constructor(props){
        super(props);
        this.clicou = this.clicou.bind(this);
    }
    clicou(){
        if(this.props.funcao !== undefined){
            this.props.funcao();
        }
    }
    criarLink(nome, url){
        return <a href={url}>{nome}</a>
    }
    render(){
        let f = <a href="http://www.fiap.com.br">fiap</a>
        let v = [1,2,3,4,5,6];
        let h = v.map((valor, indice) =>{ //aeron function 2 passo
            return <li key={indice}>{valor}</li>

        });
        return <div>
            <div>O link da {f}</div>
            <div>Outro link da {f}</div>
            <div>{this.criarLink("Google", "http://google.com.br")}</div>
            <ul>{h}</ul>

            <input type="button" value={this.props.texto} onClick={this.clicou}></input>
            <div>
                <h6>{this.props.children}</h6>
            </div>
            
        </div>
    }
}

export default MeuComponente