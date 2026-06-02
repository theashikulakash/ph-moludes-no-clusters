import { useState, Suspense } from 'react'
import './App.css'
import Nav from './components/nav'
import PricingOptions from './components/PricingOptions'
import ResultChart from './components/chart/ResultChart'


const pricingPromise = fetch('pricingdata.json').then(res => res.json());


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>

      <Nav></Nav>
    </header>

      <main>
        <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
        <ResultChart></ResultChart>
      </main>
    </>
  )
}

export default App
