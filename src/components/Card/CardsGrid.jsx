import React from 'react'
import Card from './Card'

function CardsGrid({ animalArr, animalName, onClick }) {
  return (
    <div className='cards'>
      {animalName.map((animal, index) => {
        return <Card key={index} title={animal} image={animalArr[animal]} onClick={onClick} />
      })}
    </div>
  )
}

export default CardsGrid