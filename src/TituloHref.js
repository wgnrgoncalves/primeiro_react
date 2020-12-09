import React, {Component} from 'react';
class TituloHref extends Component{
    constructor(props){
        super(props);
        this.elementoH1 = React.createRef();
    }
    componentDidMount(){
        //this.elementoH1.current.innerHTML = "Outro texto";
        //this.elementoH1.current.innerHTML = "aaaa";
    }
    render(){
        return (
            <h1 href={this.elementoH1}>
                Texto de exemplo com href
            </h1>
        )
    }
}
export default TituloHref;