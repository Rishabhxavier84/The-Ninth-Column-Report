import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav/Nav'
import NewsBox from './Components/NewsBox/NewsBox'

function App() {
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("us");

  return (
    <>
      <Nav setCategory={setCategory} setCountry={setCountry} />
      <NewsBox category={category} country={country} />
    </>
  )
}

export default App
