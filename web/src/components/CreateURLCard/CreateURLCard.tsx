import React, { useState, useEffect } from 'react'

import { checkIfUsernameExists } from "src/hooks/profiles"

import {
  VStack,
  Box,
  InputGroup,
  InputLeftAddon,
  Input,
  Button,
} from '@chakra-ui/react'

import { useProfile } from 'src/hooks/profiles'

import { FaTimesCircle } from 'react-icons/fa'

import "./styles.less"
import { navigate, routes } from '@redwoodjs/router'

const CreateUrlCard = () => {

  const { data, save, isSaving, percentage = 0 } = useProfile()
  const [profile, setProfile] = useState(data)
  const {
    username: usernameInput
  } = profile || {}

  useEffect(() => setProfile(data), [data])
  
  // ff. states must be all FALSE for URL creation
  const [isTaken, setIsTaken] = useState<boolean>(false)
  const [isEmpty, setIsEmpty] = useState<boolean>(usernameInput === "")
  const [hasSpecial, setHasSpecial] = useState<boolean>(false)
  const [exceedsCharactersLimit, setExceedsCharactersLimit] = useState<boolean>(false)

  // Shows warning based on triggering event
  const [showWarnings, setShowWarnings] = useState<Array<boolean>>
    ([
      false, /* For isTaken */
      false, /* For isEmpty */
      false, /* For hasSpecial */
      false, /* For exceedsCharactersLimit */
    ])
  
  const handleUsername = async (event) => {
    const { name, value } = event.target
    setProfile((prev) => ({ ...prev, [name]: value.toLowerCase() }))

    // Trigger isEmpty state if input is empty
    if (!value) {
      setIsEmpty(true)
      setExceedsCharactersLimit(false)
      setHasSpecial(false)
      setIsTaken(false)
    } 
    
    // If input is non-empty, ensure that other reqs are satisfied.
    else {
      setIsEmpty(false)

      // Ensure that the input is alphanumeric (i.e. does not contain special characters)
      const alphanumeric = /^[a-z0-9]+$/i
      setHasSpecial(!alphanumeric.test(value))
      
      if (value.length < 3 || value.length > 20) {
        setExceedsCharactersLimit(true)
      } else {
        setExceedsCharactersLimit(false)
      }

      // Ensure username is not yet taken
      const exists = await checkIfUsernameExists(value)
      if (exists) {
        if (usernameInput === data.username) {
          setIsTaken(false)
        } else {
          setIsTaken(true)
        }
      } else {
        setIsTaken(false)
      }
    }
  }

  const onContinue = () => {
      
    // Show warnings for each triggering conditions satisfied
    const newShowWarnings = [false, false, false, false]
    if (isTaken) {
      newShowWarnings[0] = true
    }
    if (isEmpty) {
      newShowWarnings[1] = true
    }
    if (hasSpecial) {
      newShowWarnings[2] = true
    }
    if (exceedsCharactersLimit) {
      newShowWarnings[3] = true
    }
    
    setShowWarnings(newShowWarnings)

    // Save and Redirect to Profile if ALL username requirements are satisfied
    if ((!isEmpty) && (!exceedsCharactersLimit) && (!hasSpecial) && (!isTaken)) {
      console.log("Username Requirements Satisfied!")
      save({ ...profile, isActive: percentage === 100 })
      navigate(routes.profile())
    }
  }

  return (
    <div>
      <VStack
        className='create-url-card'
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

        {showWarnings[0]?
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
            <FaTimesCircle /> <span> Ooops. Username already exists. Please try again. </span>
          </Box> : ''
        }

        {showWarnings[1]?
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
            <FaTimesCircle /> <span> Please provide your username. </span>
          </Box> : ''
        }

        {showWarnings[2]?
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
        
        {showWarnings[3]?
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
          </Box> : ''
        }

        <Box
          h='auto'
          w='100%'
          paddingBottom={'50px'}
        >
          <InputGroup className='create-url-field'>
            <InputLeftAddon children='freelancebook.me/'/>
            <Input 
              type='text'
              name="username"
              value={usernameInput}
              onChange={handleUsername}
            />
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
