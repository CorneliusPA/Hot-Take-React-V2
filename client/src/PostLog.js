import Post from './Post'

export default function PostLog({ posts, togglePost, reply, toggleReply }) {
  
  
  return (
    posts.map(post => {
      return <Post key={post.id} togglePost={togglePost} post={post} toggleReply={toggleReply} reply={reply} />
    })
  )
}