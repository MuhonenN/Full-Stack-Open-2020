import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Display = props => <tr><td>{props.name}</td><td> {props.value}</td></tr>

const Title = props => <h1>{props.text}</h1>

const Positive = props => <tr><td>positive</td><td> {props.values} %</td></tr>

const Average = props => <tr><td>average</td><td>{props.values}</td></tr>

const Statistics = (props) => {
  if (props.all === 0) {
    return (      
      <div>No feedback given</div>
    )
  }

  return (
    <table>
      <thead>
      <Display name="good" value={props.good} />
      <Display name="neutral" value={props.neutral} />
      <Display name="bad" value={props.bad} />
      <Display name="all" value={props.all} />
      <Average values={(props.good - props.bad) / props.all} />
      <Positive values={props.good / props.all * 100} />
      </thead>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    setAll(all + 1)
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setAll(all + 1)
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setAll(all + 1)
    setBad(bad + 1)
  }

  return (
    <React.Fragment>
      <Title text="give feedback" />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Title text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </React.Fragment>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)