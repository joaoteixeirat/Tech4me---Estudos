import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const lista = [
    <li key={`key_${1}`} style={{fontSize : '36px'}}>Item</li>,
    <li key={`key_${2}`} style={{fontSize : '36px'}}>Item</li>,
    <li key={`key_${3}`} style={{fontSize : '36px'}}>Item</li>,
    <li key={`key_${4}`} style={{fontSize : '36px'}}>Item</li>,
    <li key={`key_${5}`} style={{fontSize : '36px'}}>Item</li>,
    <li key={`key_${6}`} style={{fontSize : '36px'}}>Item</li>
  ]

  return (
    <div className="App">
      {lista.filter(e => e.key !== "key_3")}
    </div>
  )
}

export default App