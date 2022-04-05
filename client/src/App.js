import React, { useState, useRef, useEffect } from 'react';
import PostLog from './PostLog';
import {v4 as uuidv4} from 'uuid';
import './style.css'

const LOCAL_STORAGE_KEY = 'PostApp.posts'

function App() {
  const [posts, setPosts] = useState([])
  const postNameRef = useRef()

  const [replys, setReply] = useState()

  

function toggleReply(){
   
    setReply(true);

}

function cancelHandler(){
  setReply(false)
}

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedPosts) setPosts(storedPosts)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts))
  }, [posts])

  function togglePost(id) {
    const newPosts = [...posts]
    const post = newPosts.find(post => post.id === id)
    post.complete = !post.complete
    setPosts(newPosts)
  }

  function handleAddPost(e) {
    const name = postNameRef.current.value
    if (name === '') return
    setPosts(prevPosts => {
      return [...prevPosts, { id: uuidv4(), name: name, complete: false}]
    })
    postNameRef.current.value = null
  }

  

  function handleClearPosts() {
    const newPosts = posts.filter(post => !post.complete)
    setPosts(newPosts)
  }


  return (
    <>
    
    <h1 className="Title">Hot Take</h1>
    <div className="logoContainer">
    <img  src="HotTakeLogo.png" alt="HotTakeLogo" width="100%" height="100%"/>
    </div>
    <div id="container1">
    <div id="container2">
      <div id="textContainer">
      <h2 style={{color: "white"}}>Post</h2>
    
      <input style={{width:"98%"}} ref={postNameRef} type="text" placeholder='Opinion on a topic?' />
      <div id="buttons">
        
      <button onClick={handleAddPost} >Post</button>
      <button onClick={handleClearPosts}>Delete</button>
      
      <div>Post(s): {posts.filter(post => !post.complete).length} </div> 
      
      <PostLog posts={posts} togglePost={togglePost} toggleReply={toggleReply} />
      
        {replys && <input style={{width:"98%"}} ref={postNameRef} type="text" placeholder='Opinion on a comment?' /> }
        {replys && <button onClick={handleAddPost} >Post</button>}
        {replys && <button onClick={cancelHandler}>Cancel</button>}
    
        </div>
</div>
  
    </div>
     </div>
    </>
  )
}

export default App;