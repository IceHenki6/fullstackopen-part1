import { useState } from 'react'


const StatisticLine = ({text, value}) =>{

  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td> 
    </tr>
  )
}

const Statistics = ({good, neutral, bad, all, average}) => {

  return(
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good}/>
          <StatisticLine text="Neutral" value={neutral}/>
          <StatisticLine text="Bad" value={bad}/>
          <StatisticLine text="All" value={all}/>
          <StatisticLine text="Average" value={all?average/all:0}/>
          <StatisticLine text="Positive" value={all?good/all*100:0}/>
        </tbody>
      </table>
    </div>
  )
}

const Button = ({text, handler}) => {

  return(
    <button onClick={handler}>
      {text}
    </button>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1)
    setAll(all + 1)
    setAverage(average + 1)
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleClickBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setAverage(average - 1)
  }

  return (
    <div>
      <h1>give feedback</h1>

      <div>
        <Button handler={handleClickGood} text="good"/>
        <Button handler={handleClickNeutral} text="neutral"/>
        <Button handler={handleClickBad} text="bad"/>
      </div>

      
      {all?<Statistics good={good} neutral={neutral} bad={bad} all={all} average={average}/>:<p>No feedback given</p>}
    </div>
  )
}

export default App