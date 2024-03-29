import React, { useState } from 'react'
import './CardForm.scss'

// eslint-disable-next-line
// const result = {
//   title: 'More pshtjellan',
//   explanation:
//     'Njeri qe genjen, tu perzi muhabete tulifare, pshtjelle pshtjelle, ta hup realitetin e gjanave si profi!',
//   examples: [
//     'Nejta ni dit me to, ama shum pshtjellan ke, krejt tjeter i kallxojke gjanat',
//     'Uuu pshtjellani nihere, aj e ka kallxu veq ni pjese trealitetit!',
//     ''
//   ],
//   contribution: 'Object id from mongodb of the user doing the post'
// }

const CardForm = () => {
  const [card, setCard] = useState({
    title: '',
    explanation: '',
    examples: '',
    contributor: 'userId'
  })

  const changeHandler = e => {
    setCard({
      ...card,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className='cardForm'>
      <div className='form'>
        <input
          type='text'
          name='title'
          id='title'
          placeholder='Fjala e re'
          onChange={changeHandler}
          value={card?.title}
        />

        <textarea
          placeholder='Shpjegimi i fjalës...'
          id='explanation'
          name='explanation'
          rows='4'
          cols='50'
          onChange={changeHandler}
        />

        <textarea
          placeholder="Shembull i përdorimit t'fjalës..."
          id='examples'
          name='examples'
          rows='4'
          cols='50'
          onChange={changeHandler}
        />

        <div
          onClick={() => {
            console.log(card)
          }}
          className='submitBtn'
        >
          Dërgo për shqyrtim{' '}
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M5 12l14 0' />
            <path d='M13 18l6 -6' />
            <path d='M13 6l6 6' />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default CardForm
