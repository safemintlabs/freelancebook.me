import React, { useState, useEffect } from 'react'

import {
  VStack,
  Box,
  InputGroup,
  InputLeftAddon,
  Input,
  Button,
} from '@chakra-ui/react'
import { Spin } from 'antd'
import { FaTimesCircle } from 'react-icons/fa'

import { navigate, routes } from '@redwoodjs/router'

import { useProfile } from 'src/hooks/profiles'

import './styles.less'

const CreateUrlCard = () => {
  const { isSaving, profile: data, save, percentage = 0, error } = useProfile()
  const [profile, setProfile] = useState(data)
  const { username } = profile || { username: '' }

  useEffect(() => setProfile(data), [data])

  // Called whenever text input changes
  const handleUsernameInput = (event) => {
    const { name, value } = event.target
    setProfile((prev) => ({ ...prev, [name]: value.toLowerCase() }))
  }

  // Called upon clicking submit button
  const onContinue = async (e) => {
    e.preventDefault()
    // Save and Redirect to Profile if ALL username requirements are satisfied
    const result = await save({ ...profile, isActive: percentage === 100 })
    if (result === true) navigate(routes.profile())
  }

  // Enable submission using ENTER key
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onContinue(event)
    }
  }

  return (
    <div>
      <VStack
        className="create-url-card"
        spacing={3}
        p="5"
        backgroundColor="white"
        boxShadow={'0px 4px 35px rgba(0, 0, 0, 0.08)'}
        borderWidth="1px"
        borderRadius="15px"
        w={'539px'}
        h={'auto'}
        margin="20px"
        as="form"
        onSubmit={onContinue}
      >
        <Box h="auto">
          <h2> Create your Freelancebook URL </h2>
          <p>
            {' '}
            Enter your desired website url address that you want to be visited
            by your client. (minimum of 3 characters){' '}
          </p>
        </Box>

        {error && (
          <Box
            id="taken_message"
            className="invalid"
            h="auto"
            w="100%"
            bg={'#EDFAF9'}
            display="flex"
            lineHeight={'100%'}
            p="10px"
            alignItems={'center'}
            color="#ED1010"
          >
            <FaTimesCircle />
            <span>{error}</span>
          </Box>
        )}

        <Box h="auto" w="100%" paddingBottom={'50px'}>
          <InputGroup className="create-url-field">
            <InputLeftAddon>freelancebook.me/</InputLeftAddon>
            <Input
              type="text"
              name="username"
              value={username}
              onChange={handleUsernameInput}
              onKeyDown={handleKeyDown}
            />
          </InputGroup>
        </Box>

        <Box h="auto" w="100%">
          <Button
            w="100%"
            h="50px"
            borderRadius="10px"
            colorScheme={'green'}
            color={'white'}
            type="submit"
            disabled={isSaving}
            onClick={onContinue}
          >
            {!isSaving ? (
              <span className="continue"> Continue </span>
            ) : (
              <>
                <span className="continue"> Setting Up... </span>
                <Spin className="continue" size="small" />
              </>
            )}
          </Button>
        </Box>
      </VStack>
    </div>
  )
}

export default CreateUrlCard
