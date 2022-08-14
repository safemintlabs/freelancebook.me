import { CheckIcon } from '@chakra-ui/icons'
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react'

// Replace test data with your own
const features = [
  {
    id: 1,
    title: 'What is FreelanceBook?',
    text: 'It is a platform where as non techie freelancers can maximize to kickstart their freelancing journey.',
  },
  {
    id: 2,
    title: 'Why do I need this?',
    text: 'If you are a non tech freelancer and having a hard time to create your own site to increase your credibility we are help to help you and make sure you have a landing page to present to your leads.',
  },
  {
    id: 3,
    title: 'How much will it cost me?',
    text: '$0 we are giving it for free for now until we figure out a good business model to make the platform sustainable.',
  },
  {
    id: 4,
    title: 'If I have a problem how can I ask for support?',
    text: 'You can contact us by sending email to support@freelancebook.me',
  },
]

export default function FAQ() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>Frequently Asked Questions</Heading>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'gray.600'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
