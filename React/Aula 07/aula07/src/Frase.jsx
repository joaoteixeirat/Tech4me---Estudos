import React from "react";

export default function Frase(props) {

    return (
        <>
            <span>{props.texto}</span>
            <br />
            <br />
            <button onClick={() => props.alterar()}>Alterar</button>
        </>
    )
}