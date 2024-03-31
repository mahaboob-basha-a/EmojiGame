/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {score: 0, totalscore: 0, idList: [], doubleClick: false}

  onEmojiClick = ids => {
    const {score, totalscore, idList} = this.state
    const isExist = idList.includes(ids)
    if (isExist) {
      this.setState({doubleClick: true, idList: []})
    } else {
      this.setState(prev => ({
        idList: [...prev.idList, ids],
        score: prev.score + 1,
      }))
    }
  }

  onPlayAgain = () => {
    const {score, totalscore} = this.state
    if (score > totalscore) {
      this.setState({totalscore: score})
    }
    this.setState({score: 0, doubleClick: false})
  }
  render() {
    const {score, totalscore, doubleClick} = this.state
    const {emojisList} = this.props
    const shuffledEmojisList = () => {
      const mbs = emojisList.sort(() => Math.random() - 0.5)
      return mbs
    }
    shuffledEmojisList()
    return (
      <div className="container">
        <NavBar
          score={score}
          totalscore={totalscore}
          doubleclicked={doubleClick}
        />
        <div className="container2">
          {doubleClick ? (
            <WinOrLoseCard
              winOrlose={score === 12}
              score={score}
              doubleClicked={this.onPlayAgain}
            />
          ) : (
            <ul className="cardsList">
              {emojisList.map(item => {
                const {id, emojiName, emojiUrl} = item
                return (
                  <li key={id}>
                    <EmojiCard
                      id={id}
                      emojiName={emojiName}
                      emojiUrl={emojiUrl}
                      emojiClick={this.onEmojiClick}
                    />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default EmojiGame
