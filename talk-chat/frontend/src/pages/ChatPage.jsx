import React, { useEffect, useState } from 'react'
import { ChatState } from '../context/ChatProvider'
import SideDrawer from '../components/misc/SideDrawer'
import MyChats from '../components/MyChats'
import Chatbox from '../components/Chatbox'
import { Box } from '@chakra-ui/react'

const ChatPage = () => {
  const { user } = ChatState()
  return (
    <div style={{ width: '100%' }}>
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  )
}

export default ChatPage