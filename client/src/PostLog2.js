import Comment from './PostComment'

export default function QuestLog({ quests, toggleQuest, reply, toggleReply }) {
  
  
  return (
    quests.map(quest => {
      return <Comment key={quest.id} toggleQuest={toggleQuest} quest={quest} toggleReply={toggleReply} reply={reply} />
    })
  )
}