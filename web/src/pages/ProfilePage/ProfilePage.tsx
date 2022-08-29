import { useEffect, useState } from 'react'

import {
  SkeletonCircle,
  Skeleton,
  Container,
  Flex,
  Box,
  Stack,
  Text,
  Heading,
  Button,
  UnorderedList,
  ListItem,
  Wrap,
  WrapItem,
  Center,
} from '@chakra-ui/react'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Avatar from 'src/components/Avatar'
import { useProfile } from 'src/hooks/profiles'

import './styles.less'
import { Affix } from 'antd'

import Navbar from 'src/components/Navbar/Navbar'

const ProfilePage = ({ username: u }: { username?: string }) => {
  const { profile: data, isLoading } = useProfile(u)
  const [profile, setProfile] = useState(data)
  const { avatar_url, first_name, last_name, about, service, username } =
    profile || {}

  useEffect(() => setProfile(data), [data])

  return (
    <>
      <MetaTags
        title={`User Profile | ${first_name} ${last_name}`}
        description={`User Profile of ${first_name} ${last_name} in Freelancebook.me`}
      />
      <Affix offsetTop={0}>
        <Navbar username={u || profile?.username} />
      </Affix>
      <Container maxW={'70%'} paddingTop={'20px'}>
        <Flex padding="30px" boxShadow="md" bg={'#FFF'} mb={'20px'}>
          <Box borderRadius={'full'}>
            {isLoading ? (
              <SkeletonCircle size="20" />
            ) : (
              <Avatar url={avatar_url} size="40px" />
            )}
          </Box>
          <Stack marginLeft={'20px'} direction={{ xl: 'row', base: 'column' }}>
            {isLoading ? (
              <Skeleton height="20px" />
            ) : (
              <Heading>{`${first_name} ${last_name}`}</Heading>
            )}
            <Text>{service}</Text>
            <Button
              minW={200}
              onClick={() => {
                navigate(routes.publicSchedule({ username }))
              }}
              colorScheme={'green'}
            >
              Book a Call Now
            </Button>
          </Stack>
        </Flex>
        <Flex padding="30px" boxShadow="md" bg={'#FFF'} mb={'20px'}>
          <Stack>
            <Heading>What is my business all about?</Heading>
            <Text>{about}</Text>
          </Stack>
        </Flex>
        <Flex padding="30px" boxShadow="md" bg={'#FFF'} mb={'20px'}>
          <Stack>
            <Heading>My Services</Heading>
            <UnorderedList>
              <ListItem>Lorem ipsum dolor sit amet</ListItem>
              <ListItem>Consectetur adipiscing elit</ListItem>
              <ListItem>Integer molestie lorem at massa</ListItem>
              <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </UnorderedList>
          </Stack>
        </Flex>
        <Flex padding="30px" boxShadow="md" bg={'#FFF'} mb={'20px'}>
          <Stack>
            <Heading>My Projects</Heading>
            <Wrap>
              <WrapItem>
                <Center w="180px" h="80px" bg="green.200">
                  Project 1
                </Center>
              </WrapItem>
              <WrapItem>
                <Center w="180px" h="80px" bg="green.200">
                  Project 1
                </Center>
              </WrapItem>
              <WrapItem>
                <Center w="180px" h="80px" bg="green.200">
                  Project 1
                </Center>
              </WrapItem>
              <WrapItem>
                <Center w="180px" h="80px" bg="green.200">
                  Project 1
                </Center>
              </WrapItem>
              <WrapItem>
                <Center w="180px" h="80px" bg="green.200">
                  Project 1
                </Center>
              </WrapItem>
              <WrapItem>
                <Center w="180px" h="80px" bg="green.200">
                  Project 1
                </Center>
              </WrapItem>
            </Wrap>
          </Stack>
        </Flex>
        <Flex padding="30px" boxShadow="md" bg={'#FFF'} mb={'20px'}>
          <Stack>
            <Heading>Testimonials</Heading>
            <Wrap>
              <WrapItem>
                <Center w="180px" h="80px" bg="green.200">
                  Project 1
                </Center>
              </WrapItem>
              <WrapItem>
                <Center w="180px" h="80px" bg="green.200">
                  Project 1
                </Center>
              </WrapItem>
              <WrapItem>
                <Center w="180px" h="80px" bg="green.200">
                  Project 1
                </Center>
              </WrapItem>
              <WrapItem>
                <Center w="180px" h="80px" bg="green.200">
                  Project 1
                </Center>
              </WrapItem>
              <WrapItem>
                <Center w="180px" h="80px" bg="green.200">
                  Project 1
                </Center>
              </WrapItem>
              <WrapItem>
                <Center w="180px" h="80px" bg="green.200">
                  Project 1
                </Center>
              </WrapItem>
            </Wrap>
          </Stack>
        </Flex>
      </Container>
    </>
  )
}

export default ProfilePage
