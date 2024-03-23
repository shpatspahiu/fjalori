import React from 'react'
import './Home.scss'
import WordCard from '../../atoms/Wordcard'

const Home = () => {
  const card = {
    title: 'Kaka',
    explanation: 'When you take a good shit',
    arrOfExamples: [
      'explenation1 is going to be a bit longer in order to see how it behaves with card!',
      'example 2 is ex 2 ',
      "example 3 we'll see, need to use the ... operator"
    ],
    contribution: {
      name: 'Shpati',
      username: 'spahiush',
      timeOf: '15.04.1999'
    }
  }

  return (
    <div className='home'>
      <WordCard
        title={card?.title}
        examples={card?.arrOfExamples}
        explanation={card?.explanation}
        contribution={card?.contribution}
      />
      <WordCard
        title={card?.title}
        examples={card?.arrOfExamples}
        explanation={card?.explanation}
        contribution={card?.contribution}
      />
      <WordCard
        title={card?.title}
        examples={card?.arrOfExamples}
        explanation={card?.explanation}
        contribution={card?.contribution}
      />
    </div>
  )
}

export default Home
