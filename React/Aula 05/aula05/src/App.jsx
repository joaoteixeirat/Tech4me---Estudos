import './App.css'
import Filme from './Filmes'

function App() {

  const naoDisponivel = <span>🚫</span>
  const disponivel = <span>✅</span>

  return (
    <div className="App">

      <h1>Lista de Filmes</h1>

      <Filme titulo="Click" genero="Comédia" disponivel={disponivel}/>
      <Filme titulo="Iron Man" genero="Ação" disponivel={disponivel}/>
      <Filme titulo="Piratas do Caribe" genero="Aventura" disponivel={naoDisponivel}/>

    </div>
  )
}

export default App