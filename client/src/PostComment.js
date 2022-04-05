import React from 'react'

export default function Quest({ quest, toggleQuest, reply, toggleReply}) {
  function handleQuestClick() {
    toggleQuest(quest.id)
  }

function handleReplyClick() {
    toggleReply(reply)
  }
  
  
  return (
    <div>
      <label>
        <input type="checkbox"  checked={quest.complete} onChange={handleQuestClick} />
       <p style={{color:"white"}}> {quest.name}</p>
        <button onClick={handleReplyClick} >Reply</button>
      <button onClick={handleQuestClick}>Select</button>  
      </label>
    </div>
  )
}