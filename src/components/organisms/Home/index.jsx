import React from 'react'
import './Home.scss'
import WordCard from '../../atoms/Wordcard'

const Home = () => {
  const cards = [
    {
      title: 'Kaka',
      explanation: 'When you take a good shit',
      examples:
        "explenation1 is going to be a bit longer in order to see how it behaves with card!\nexample 2 is ex 2\nexample 3 we'll see, need to use the ... operator",
      contribution: {
        name: 'Shpati',
        username: 'spahiush',
        timeOf: '15.04.1999'
      }
    },
    {
      title: 'More pshtjellan',
      explanation:
        'Njeri qe genjen, tu perzi muhabete tulifare, pshtjelle pshtjelle, ta hup realitetin e gjanave si profi!',
      examples:
        'Nejta ni dit me to, ama shum pshtjellan ke, krejt tjeter i kallxojke gjanat\nUuu pshtjellani nihere, aj e ka kallxu veq ni pjese trealitetit!',
      contribution: 'Object id from mongodb of the user doing the post'
    },
    {
      title: 'test',
      explanation: 'test',
      examples: 'daeadeedaedasdassda\nedaedaedaedeaaed\ndaedeadaeda',
      contribution: 'Object id from mongodb of the user doing the post'
    }
  ]

  return (
    <div className='home'>
      {cards.map((card, i) => {
        return (
          <WordCard
            key={i}
            title={card?.title}
            examples={card?.examples?.split('\n')}
            explanation={card?.explanation}
            contribution={card?.contribution}
          />
        )
      })}
    </div>
  )
}

export default Home
