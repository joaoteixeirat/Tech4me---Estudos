import React from "react";
import Assistido from "./Assistido";

export default class Filme extends React.Component {

    constructor(props) {

        super(props);

        this.state = { titulo: "Se Beber Não Case", assistido: false };
    }

    handleClick = () =>  {

        this.setState((prev) => { 

            return {assistido : !prev.assistido} 
        })
    }

    render() {

        return (
            <>
                <h3 style={{display: "inline-block"}}>
                    {this.state.titulo}
                </h3>

                <Assistido 
                    assistido={this.state.assistido}
                    mudar={this.handleClick}
                />
            </>
        )
    }

}