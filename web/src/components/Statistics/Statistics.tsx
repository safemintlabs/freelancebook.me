import { ReactNode } from 'react'

import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react'
import { BsPerson } from 'react-icons/bs'
import { BsCalendar2Check } from 'react-icons/bs'
import { IoAnalytics } from 'react-icons/io5'

interface StatsCardProps {
  title: string
  stat: string
  icon: ReactNode
}
function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      border={'2px solid'}
      borderColor={'green.400'}
      rounded={'lg'}
    >
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={'medium'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('green.400', 'green.600')}
          alignContent={'center'}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  )
}

export default function Statistics() {
  return (
    <Box maxW="7xl" mx={'auto'} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}
      >
        Our Statistics
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={'Freelancers'}
          stat={'75'}
          icon={<BsPerson size={'3em'} />}
        />
        <StatsCard
          title={'Visits/Week'}
          stat={'1,000'}
          icon={<IoAnalytics size={'3em'} />}
        />
        <StatsCard
          title={'Bookings/Week'}
          stat={'7'}
          icon={<BsCalendar2Check size={'3em'} />}
        />
      </SimpleGrid>
    </Box>
  )
}
