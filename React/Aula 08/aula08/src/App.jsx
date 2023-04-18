import React from 'react'
import './App.css'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount() {
    document.title = "New title"
  }

  componentDidUpdate() {

    alert("Atualizou")
  }

  componentWillUnmount() {

    alert("Desmontou")
  }
  
  render() {

    return (

      <div className="App">

        <h3>Clique para atualizar</h3>
        <button onClick={() => this.setState({})}>👁️‍🗨️</button>

      </div>
    )
  }
}

export default App