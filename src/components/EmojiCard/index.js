// Write your code here.
import './index.css'

const EmojiCard = prop => {
  const {id, emojiName, emojiUrl, emojiClick} = prop
  return (
      <button className="card11" onClick={() => emojiClick(id)}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
  )
}

export default EmojiCard
