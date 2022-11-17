import { useEffect, useState } from 'react'

import AdviceCard from './AdviceCard'
import './css/App.css'

function App() {
  const [cardData, updateCardData] = useState({

  })

  const [quoteTrigger, updateQuoteStatus] = useState(true)

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
    .then((res) => res.json())
    .then((data) => {
      return updateCardData(data.slip)
    })
  }, [quoteTrigger])

  const updateQuote = () => {
    updateQuoteStatus(!quoteTrigger)
  }

  return (
    <main className="App">
      <AdviceCard adviceId={cardData.id} advice={cardData.advice} toggleAdvice={updateQuote}/>
    </main>
  )
}

export default App
