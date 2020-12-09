import React, {Component} from 'react';
class TituloAttr extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <h1>
                {this.props.texto}
            </h1>
        )
    }
}
export default TituloAttr;