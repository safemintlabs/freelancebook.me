import React, { useState } from 'react'

// import getProfileByUsername  from "src/hooks/profiles"

import {
  VStack,
  Box,
  InputGroup,
  InputLeftAddon,
  Input,
  Button,
} from '@chakra-ui/react'

import { FaTimesCircle } from 'react-icons/fa'

import "./styles.less"


const CreateUrlCard = () => {

  const [username, setUsername] = useState<string>()

  const [isTaken, setIsTaken] = useState<boolean>(false)
  const [isEmpty, setIsEmpty] = useState<boolean>(false)
  const [hasSpecial, setHasSpecial] = useState<boolean>(false)
  const [exceedsCharactersLimit, setExceedsCharactersLimit] = useState<boolean>(false)

  const handleUsername = (event) => {
    const { value } = event.target
    setUsername(value)
  }

  console.log("Username: " + username);

  const onContinue = async () => {
    if (!username) {
      setIsEmpty(true)
      setExceedsCharactersLimit(false)
      setHasSpecial(false)
    } else {
      setIsEmpty(false)
      const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~ ]/;
      setHasSpecial(specialChars.test(username))
      
      if (username.length < 3 || username.length > 20) {
        setExceedsCharactersLimit(true)
      } else {
        setExceedsCharactersLimit(false)
      }

      // const user = getProfileByUsername(username)
      // console.log(user)
      // if (user != null) {
      //   setIsTaken(true)
      // } else {
      //   setIsTaken(false)
      // }
    }
  }
  
  return (
    <div>
      <VStack
        spacing={3}
        p="5"
        backgroundColor="white"
        boxShadow={"0px 4px 35px rgba(0, 0, 0, 0.08)"}
        borderWidth="1px"
        borderRadius="15px"
        w={'539px'}
        h={'auto'}
        margin="20px"
      >
        <Box 
          h='auto'
        >
          <h2> Create your Freelancebook URL </h2>
          <p> Enter your desired website url address that you want to be visited by your client. (minimum of 3 characters) </p>
        </Box>

        {isEmpty?
          <Box
            id='empty_message'
            className='invalid'

            h='auto'
            w='100%'
            bg={'#EDFAF9'}
            display="flex"
            lineHeight={'100%'}
            p="10px"
            alignItems={'center'}
            color="#ED1010"
          >
            <FaTimesCircle /> <span> Please provide your username. </span>
          </Box> : ''
        }

        {hasSpecial?
          <Box
            id='spacial_message'
            className='invalid'

            h='auto'
            w='100%'
            bg={'#EDFAF9'}
            display="flex"
            lineHeight={'100%'}
            p="10px"
            alignItems={'center'}
            color="#ED1010"
          >
            <FaTimesCircle /> <span> Space and special characters are not allowed. </span>
          </Box> : ''
        }

        {exceedsCharactersLimit?
          <Box
            id='spacial_message'
            className='invalid'

            h='auto'
            w='100%'
            bg={'#EDFAF9'}
            display="flex"
            lineHeight={'100%'}
            p="10px"
            alignItems={'center'}
            color="#ED1010"
          >
            <FaTimesCircle /> <span> Your username should be at least 3 characters, with a maximum of 20 characters. </span>
          </Box> : <></>
        }
        
        {isTaken?
          <Box
            id='spacial_message'
            className='invalid'

            h='auto'
            w='100%'
            bg={'#EDFAF9'}
            display="flex"
            lineHeight={'100%'}
            p="10px"
            alignItems={'center'}
            color="#ED1010"
          >
            <FaTimesCircle /> <span> Ooops. Username already exists. Please try again. </span>
          </Box> : ''
        }
        <Box
          h='auto'
          w='100%'
          paddingBottom={'50px'}
        >
          <InputGroup>
            <InputLeftAddon children='freelancebook.me/'/>
            <Input onChange={handleUsername}/>
          </InputGroup>
        </Box>

        <Box
          h='auto'
          w='100%'
        >
          <Button
            w='100%'
            h='50px'
            borderRadius="10px"
            colorScheme={'green'}
            color={'white'}

            onClick={onContinue}
          >
            <span id='continue'> Continue </span>
          </Button>
        </Box>

      </VStack>
    </div>
  )
}

export default CreateUrlCard
