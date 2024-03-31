// Write your code here.
import './index.css'

const NavBar = prop => {
  const {score, totalscore, doubleclicked} = prop
  return (
    <div className="navbar">
      <div className="logo1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {doubleclicked ? (
        ''
      ) : (
        <div className="socringNav">
          <p>Score: {score}</p>
          <p>Top Score: {totalscore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
