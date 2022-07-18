import { useState } from 'react'
import PropTypes from 'prop-types'

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value)

  const handleAdd = (event) => {
    // console.log(event)

    setCounter(counter + 1)
    // * Other way to do it:
    // setCounter((c) => c + 1)
  }

  const handleReset = () => {
    setCounter(value)
  }

  const handleSubtract = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>

      {/* <button onClick={ (event) => handleAdd(event) }>+1</button> */}
      <button onClick={ handleAdd }>+1</button>
      <button onClick={ handleReset }>Reset</button>
      <button aria-label="btn-reset" onClick={ handleSubtract }>-1</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}
