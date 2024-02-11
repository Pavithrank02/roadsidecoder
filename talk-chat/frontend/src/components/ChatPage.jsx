import React, { useEffect, useState } from 'react'

const ChatPage = () => {

  const [chats, setChats] = useState([])
  const fetchChats = async () => {
    const data = await fetch("/api/chat")
    const json = await data.json()

    setChats(json)
  }

  useEffect(() => {
    fetchChats()
  }, [])
  return (
    <div>
      {chats.map(c => {
        return (
          <div key={c.id}> {c.chatName}</div>
        )
      })}
    </div>
  )
}

export default ChatPage