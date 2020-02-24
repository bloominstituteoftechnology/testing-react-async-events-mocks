import React, { useContext } from 'react'
import playerContext from "../contexts/player"

// hoc
function withActions(Component)  {
  return function Wrapper(props) {
    const { actions } = useContext(playerContext)
    return <Component {...props} actions={actions}/>
  }
}

export default withActions(Controls)

export function Controls({ actions }) {
  return (
    <div className='Controls'>
      {
        Object.keys(actions).map(actionName => {
          return (
            <button
              key={actionName}
              onClick={actions[actionName]}
            >
              {actionName}
            </button>
          )
        })
      }
    </div>
  )
}
