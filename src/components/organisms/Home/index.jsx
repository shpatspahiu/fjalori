import React from 'react'
import './Home.scss'
import WordCard from '../../atoms/Wordcard'

const Home = () => {
  const title = 'Kaka'
  const example = 'When you take a good shit'
  const arrOfExplenations = [
    'explenation1 is going to be a bit longer in order to see how it behaves with card!',
    'example 2 is ex 2 ',
    "example 3 we'll see, need to use the ... operator"
  ]
  const mockPerson = {
    name: 'Shpati',
    username: 'spahiush',
    time_of_contribution: '15.04.1999'
  }
  
  return (
    <div className='home'>
      <WordCard
        title={title}
        explanation={arrOfExplenations}
        example={example}
        contributor={mockPerson}
      />
    </div>
  )
}

export default Home
