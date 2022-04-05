import React from 'react'

export default function Quest({ post, togglePost, reply, toggleReply}) {
  function handlePostClick() {
    togglePost(post.id)
  }

function handleReplyClick() {
    toggleReply(reply)
  }
  
  
  return (
    <div>
      <label>
        
       <h3 className='PostLog'> {post.name}</h3>
       
        <button onClick={handleReplyClick} >Reply</button>
      <button onClick={handlePostClick}>Select</button>
        <input type="checkbox"  checked={post.complete} onChange={handlePostClick} />
        
      </label>
    </div>
  )
}