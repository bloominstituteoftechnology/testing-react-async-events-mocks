import React, { useState, useEffect } from 'react'
import Player from './Player'
import playerContext from '../contexts/player'
import axios from 'axios'

const apiURL = 'http://localhost:4000/api/friends'

export default function App() {
  const [health, setHealth] = useState(100)
  const [morale, setMorale] = useState(100)
  const [name, setName] = useState('')

  useEffect(() => {
    axios.get(apiURL + '/1')
      .then(res => {
        setName(`${res.data.fname} ${res.data.lname}`)
      })
  }, [])

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
