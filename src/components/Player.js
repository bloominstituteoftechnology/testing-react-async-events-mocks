import React, { useContext } from 'react'
import Display from './Display'
import Controls from './Controls'
import playerContext from '../contexts/player'

// imagine this is a deeply nested component
// and we don't want to hand down the props manually
export default function Player() {
  const { scores, name } = useContext(playerContext)
  return (
    <div className='Player'>
      <h4>Player's name is&nbsp;
        <span className='fancy'>{name}</span>
      </h4>

      <Display
        type='Health'
        data={scores.health}
      />

      <Display
        type='Morale'
        data={scores.morale}
      />

      <Controls />
    </div>
  )
}
