import React from 'react'

import {
  Center,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

import { navigate, routes } from '@redwoodjs/router'

import './styles.less'
import { IUser } from 'src/hooks/profiles'

import Avatar from '../Avatar'

interface IProps {
  user: IUser
}

const UserCard = ({ user }: IProps): JSX.Element => {
  console.log('user: ', user)
  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'green.400')}
        boxShadow={'2xl'}
        padding={2}
      >
        <Flex>
          <Avatar url={user.avatar_url} size={100} />
        </Flex>
        <Stack
          flexDirection="column"
          justifyContent="center"
          p={1}
          pt={2}
          onClick={() => {
            navigate(routes.publicProfile({ username: user.username }))
          }}
        >
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {`${user.first_name} ${user.last_name}`}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
            {`@${user.username}`}
          </Text>
        </Stack>
      </Stack>
    </Center>
  )
}

export default UserCard
