// Write your code here.
import './index.css'

const WinOrLoseCard = prop => {
  const {winOrlose, doubleClicked, score} = prop
  const imgUrl = winOrlose
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const text = winOrlose ? 'You Won' : 'You Lose'
  const txt = winOrlose ? 'Best Score' : 'Score'
  return (
    <div className="wincontainer">
      <div className="wincontainerInner">
        {winOrlose ? <h1>You Won</h1> : <h1>You Lose</h1>}
        {winOrlose ? <p>Best Score</p> : <p>Score</p>}
        {winOrlose ? <p className="result">12/12</p> : <p>{score}/12</p>}
        <button onClick={doubleClicked}>Play Again</button>
      </div>
      <img src={imgUrl} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
