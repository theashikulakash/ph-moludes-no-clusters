import { Suspense } from 'react'
import './App.css'
import Countries from './contries'


const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())

function App() {

  return (
    <>
      <Countries></Countries>
    
    </>
  )
}

export default App
