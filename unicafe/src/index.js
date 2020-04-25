import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Button = (props) => {
  return <button onClick={() => props.handlePress(props.type)}>{props.type}</button>
}
const Feedback = (props) => {

  return (
    <>
      <h1>give feedback</h1>
      <Button handlePress={props.handlePress} type="good" />
      <Button handlePress={props.handlePress} type="neutral" />
      <Button handlePress={props.handlePress} type="bad" />
    </>
  )
}
const Statistic = (props) => {
  return (
    <tr>
      <td> {props.text} </td> <td> {props.value} </td>
    </tr>
  )

}

const Statitics = (props) => {
  const { good, neutral, bad } = props.stats
  const all = good + neutral + bad
  const average = (good - bad) / (all)
  const positive = (good / all * 100).toString() + " %"
  let theStats
  if (all === 0) {
    theStats = <p>No feedback given</p>
  } else {
    theStats =
      <table>
        <Statistic text='good' value={good} />
        <Statistic text='neutral' value={neutral} />
        <Statistic text='bad' value={bad} />
        <Statistic text='all' value={all} />
        <Statistic text='average' value={average} />
        <Statistic text='positive' value={positive} />
      </table>
  }

  return (
    <div>
      <h1>statistics</h1>
      {theStats}
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handlePress = (button) => {
    if (button === 'good') {
      setGood(good + 1)
    } else if (button === 'neutral') {
      setNeutral(neutral + 1)
    } else {
      setBad(bad + 1)
    }
  }

  return (
    <div>
      <Feedback handlePress={handlePress} />
      <Statitics stats={{ good, neutral, bad }} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
