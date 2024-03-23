import React from 'react'
import './Wordcard.scss'

const Wordcard = ({ title, examples, explanation, contribution }) => {
  return (
    <div className='wordcard'>
      <div className='title'>{title}</div>
      {explanation && <div className='explanation'>{explanation}</div>}
      {!!examples?.length && (
        <div className='example-container'>
          {examples?.map((eg, i) => {
            return (
              <div key={i} className='example'>
                {eg}
              </div>
            )
          })}
        </div>
      )}
      {contribution && (
        <div className='contribution'>
          by <span>{contribution?.username}</span> {contribution?.timeOf}
        </div>
      )}
    </div>
  )
}

export default Wordcard
