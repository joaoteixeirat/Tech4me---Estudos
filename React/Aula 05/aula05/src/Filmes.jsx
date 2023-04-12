const Filme = (props) => {

    return(

        <div className="filmes-container" 
            style={{
                backgroundColor: "darkslateblue",
                borderRadius: "20px",
                padding: "20px 60px",
                marginBottom: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
            }}>
    
            <span style={{fontSize: 36}}>Titúlo: {props.titulo}</span>
            <span style={{fontSize: 24}}>Gênero: {props.genero}</span>
            <span style={{fontSize: 24}}>Disponível: {props.disponivel}</span>
        
        </div>
    )
}

export default Filme;