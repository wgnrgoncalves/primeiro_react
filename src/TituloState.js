import React, {Component} from 'react';
class TituloState extends Component{
    constructor(props){
        super(props);
        this.state={
            texto: "Meu texto Padrao"
        }
    }
    render(){
        return (
            <h1 href={this.elementoH1}>
                Texto de exemplo com href
            </h1>
        )
    }
}
export default TituloState;