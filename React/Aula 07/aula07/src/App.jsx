import React from 'react';
import './App.css'
import Frase from './Frase'
import Filme from './Filme';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { msg: "Hello, World!" }
  }

  handleClick = () => {

    this.setState({ msg: "Nova frase!" })
  }

  render() {
    return (
      <div className="App">
        <Filme />
      </div>
    )
  }
}

export default App
