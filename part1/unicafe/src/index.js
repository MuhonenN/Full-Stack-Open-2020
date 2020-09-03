import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleClick}>
        plus
      </button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

















// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'

// const App = () => {
//   // save clicks of each button to own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//       code here
//     </div>
//   )
// }

// ReactDOM.render(<App />,
//   document.getElementById('root')
// )