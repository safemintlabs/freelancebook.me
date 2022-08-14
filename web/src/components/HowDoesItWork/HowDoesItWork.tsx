import { ReactElement } from 'react'

import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  chakra,
} from '@chakra-ui/react'
import { FcBusinessContact, FcCalendar, FcAdvertising } from 'react-icons/fc'

interface FeatureProps {
  title: string
  text: string
  icon: ReactElement
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  )
}

export default function HowDoesItWork() {
  return (
    <Box p={4}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}
      >
        How does it work?
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcBusinessContact} w={10} h={10} />}
          title={'Complete your profile'}
          text={
            'Make a profile and describe your list of services so that customers can see at a quick look what your business is about.'
          }
        />
        <Feature
          icon={<Icon as={FcCalendar} w={10} h={10} />}
          title={'Setup your calendar'}
          text={
            'You dont have to worry about figuring out when your next available time is. Instead, you can make as many slots as you want and set their availability, so clients can pick a time that works for them.'
          }
        />
        <Feature
          icon={<Icon as={FcAdvertising} w={10} h={10} />}
          title={'Promote your site'}
          text={
            'Start promoting your website clients will able to land on your site view your projects and testimonials and easily book a discovery call with you.'
          }
        />
      </SimpleGrid>
    </Box>
  )
}
