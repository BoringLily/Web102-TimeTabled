import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Calendar from './components/Calendar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <h1> 7 days of startup</h1>
    <h2> The average week of developing your dream SaaS startup.</h2>
    <Calendar />
    </div>
  )
}

export default App
