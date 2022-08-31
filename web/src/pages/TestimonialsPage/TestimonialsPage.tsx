import { Button, Divider, Flex, Heading, Stack } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

// import NewTestimonialsCard from 'src/components/NewTestimonialsCard/NewTestimonialsCard'
import TestimonialsCard from 'src/components/TestimonialsCard/TestimonialsCard'

const TestimonialsPage = () => {
  return (
    <>
      <MetaTags title="Testimonials" description="Testimonials page" />

      {/* <NewTestimonialsCard /> */}
      <Flex flexDirection="column" width="100%" alignItems="center">
        <Stack
          spacing={4}
          p="5"
          backgroundColor="white"
          boxShadow="md"
          borderWidth="1px"
          borderRadius="2xl"
          w={[380, 400, 700]}
        >
          <Heading
            fontSize={{ base: '20px', md: '25px', lg: '30px' }}
            display="flex"
            flexDirection="row"
          >
            <span style={{ flex: '1 1 0%' }}>Testimonials</span>
            <Button mr="2" colorScheme="green" variant="ghost">
              + ADD
            </Button>
            <Button colorScheme="green" variant="ghost">
              VIEW
            </Button>
          </Heading>
          <Divider
            orientation="horizontal"
            backgroundColor={'green.400'}
            border={'none'}
            height="1"
          />
          <TestimonialsCard />
        </Stack>
      </Flex>
    </>
  )
}

export default TestimonialsPage
