import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = (e) => {
    console.log("theme", theme);
    setTheme(e.target.value)
  }

  return (
    <div className={'App ' + theme}>
      <h1>Hello!</h1>
      <Counter/>

      <select onChange={toggleTheme}>
        <option vlaue="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  )
}

export default App
