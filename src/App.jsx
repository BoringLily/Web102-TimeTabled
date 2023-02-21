import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Calendar from './components/Calendar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <h1> 7 days to startup</h1>
    <h2> Here is a week plan for how to build your dream SaaS startup.</h2>
    <Calendar />
    </div>
  )
}

export default App
