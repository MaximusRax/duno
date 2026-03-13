
import { useEffect } from 'react'
import './App.css'
import UNOCard from './components/DunoCard'
import useCard from './store/cardStore'
import type { Card } from './store/types'

function App() {
  const cardStore = useCard();
  useEffect(()=>{
  const stackCard = cardStore.putCard;
  const card:Card = {
    color:"green",
    no:2,
    isPowerCard:false,
  }
  console.log(stackCard(card))
  const card2L:Card = {no:3, color:"red",isPowerCard:false}
  console.log(stackCard(card2L));}
  ,[])
  

  return (
    <>
      <UNOCard no={5} color='red' powerCard='reverse'/>

    </>
  )
}

export default App
