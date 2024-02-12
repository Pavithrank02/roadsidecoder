import React, { useEffect } from 'react'
import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import Signup from '../components/Authentication/Signup'
import Login from '../components/Authentication/Login'
import { useNavigate } from 'react-router-dom'
const Home = () => {

  const history = useNavigate()
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    if (!userInfo) {
      history('/chats')
    }
  }, [history])
  return (
    <Container maxW='xl' centerContent>
      <Box
        d='flex'
        justifyContent='center'
        p={1}
        bg={'white'}
        w='100%'
        m='40px 0 14px 0'
        borderRadius='lg'
        borderWidth='1px'
      >
        <Text fontSize='4xl' fontFamily='Work sans' color='black'>
          Chat-App
        </Text>
      </Box>
      <Box bg='white' w='100%' p={4} borderRadius='lg' borderWidth='1px'>
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab width='50%' >Login</Tab>
            <Tab width='50%'>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

    </Container>
  )
}

export default Home