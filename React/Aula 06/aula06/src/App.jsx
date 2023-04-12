import './App.css'

class App extends React.Component {

  constructor() {

    super();
    this.state = { 
      page: 1, 
      styleButton: {opacity: 0.3} 
    }
  }

  handleVoltar = () => {

    if(this.state.page > 1){

      this.setState((oldState) => { return { page: oldState.page - 1 } })
    }

    if(this.state.page == 2){

      this.setState({ styleButton: {opacity: 0.3} })
    }
  }

  handleAvancar = () => {

    this.setState((oldState) => { 

      return { 
        page: oldState.page + 1,
        styleButton: { opacity: 1 }
      } 
    })
  }

  render() {

    return (
      <div style={{
          display: 'flex',
          gap:"50px",
          alignItems: "center"
        }}>

        <button style={this.state.styleButton} onClick={()=> {this.handleVoltar()}}>{"<"}</button>

        <span>{this.state.page}</span>

        <button onClick={()=> {this.handleAvancar()}}>{">"}</button>
        
      </div>
    )
  }
}

export default App
