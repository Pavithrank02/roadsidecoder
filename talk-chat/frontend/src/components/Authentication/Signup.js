import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Signup = () => {
  const [show, setShow] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [pic, setPic] = useState("")

  const handleClick = () => {
    setShow(!show)
  }
  const submitHandler = (pics) => { }
  const postDetails = () => { }
  return (
    <VStack spacing='5px' >
      <FormControl id='first-name' isRequired>
        <FormLabel>
          First Name
        </FormLabel>
        <Input
          placeholder='Enter your name'
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id='email' isRequired>
        <FormLabel>
          Email
        </FormLabel>
        <Input
          placeholder='Enter your email'
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id='first-name' isRequired>
        <FormLabel>
          Password
        </FormLabel>
        <InputGroup>

          <Input
            type={show ? "text" : 'password'}
            placeholder='Enter your name'
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement w='4rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id='confirm-password' isRequired>
        <FormLabel>
          Confirm Password
        </FormLabel>
        <InputGroup>

          <Input
            type={show ? "text" : 'password'}
            placeholder='Enter your name'
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <InputRightElement w='4rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id='pic' isRequired>
        <FormLabel>
          Upload your pic
        </FormLabel>
        <InputGroup>

          <Input
            type="file"
            p={1.5}
            accept='image/*'
            onChange={(e) => postDetails(e.target.files[0])}
          />
          <InputRightElement w='4rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme='blue'
        width='100%'
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Sign Up
      </Button>
    </VStack>
  )
}

export default Signup