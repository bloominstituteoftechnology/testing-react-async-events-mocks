import React from 'react'

const getStyle = points => ({
  color: `${points > 50 ? 'rgb(91, 134, 27)' : 'rgb(163, 0, 0)'}`
})

export default function Display({ type, data }) {
  return (
    <div className='Display'>
      {type} is at&nbsp;

      <span
        style={getStyle(data)}
        className='points'>{data}
      </span>
    </div>
  )
}
