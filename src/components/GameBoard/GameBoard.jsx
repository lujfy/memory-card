
import React , {useState , useEffect} from 'react'

import chicken from "../../assets/Card/chicken.jpeg"
import deer from "../../assets/Card/deer.jpeg"
import giraffe from "../../assets/Card/graph.jpeg"
import fox from "../../assets/Card/koala.jpeg"
import seadog from "../../assets/Card/seadog.jpeg"
import zebra from "../../assets/Card/zebbra.jpeg"

import CardsGrid from '../Card/CardsGrid'


function GameBoard() {
  const ANIMAL = {
    Chicken : chicken ,
    Deer : deer ,
    Giraffe : giraffe ,
    Fox : fox ,
    "Sea dog" : seadog ,
    Zebra : zebra


  }

  const [animalName , setAnimalName] = useState(Object.keys(ANIMAL))
  const [animalClick , setAnimalClick] = useState([])
  const [currentScore , setCurrentScore ] = useState(0)
  const [bestScore , setBestScore ] = useState(0)

  const shuffleCard = () => {
    const Cardsshuff = [...animalName]

    for(let i = Cardsshuff.length ; i > 0 ; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1))
      let temp = Cardsshuff[randomIndex]
      Cardsshuff[randomIndex] = Cardsshuff[i]
      Cardsshuff[i] = temp
    } 

    setAnimalName(Cardsshuff)
  }

  const handleCardClick = animal => {
    if (animalClick.includes(animal)) {
      resetScore()
    } else {
      updateScore()
      setAnimalClick([...animalClick, animal])
    }
  }

  const updateScore = () => {
    setCurrentScore(currentScore + 1)
    if (currentScore >= bestScore) {
      setBestScore(currentScore + 1)
    }
  }

  const resetScore = () => {
    setCurrentScore(0)
    setClickedHeroes([])
  }

  useEffect(shuffleCard, [currentScore])


    
    
  return (
    <main className='main'>
      <div className='score'>
        <div className='current'>Current Score: {currentScore}</div>
        <div className='best'>Best Score: {bestScore}</div>
      </div>
      <CardsGrid animalArr={ANIMAL} animalName={animalName} onClick={handleCardClick} />
    </main>
  )
}

export default GameBoard
