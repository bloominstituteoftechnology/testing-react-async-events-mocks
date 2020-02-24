import React, { useState } from 'react'
import Player from './Player'
import playerContext from '../contexts/player'

export default function App({ name }) {
  const [health, setHealth] = useState(100)
  const [morale, setMorale] = useState(100)

  const actions = {
    exercise() {
      setHealth(health => health + 20)
      setMorale(morale => morale + 10)
    },

    eatJunkFood() {
      setHealth(health => health - 10)
      setMorale(morale => morale + 1)
    },

    catchUpWithFriends() {
      setMorale(morale => morale + 10)
    },
  }

  const playerData = {
    name,
    actions,
    scores: { health, morale },
  }

  return (
    <div className='App'>
      <playerContext.Provider value={playerData}>
        <Player />
      </playerContext.Provider>
    </div>
  )
}
