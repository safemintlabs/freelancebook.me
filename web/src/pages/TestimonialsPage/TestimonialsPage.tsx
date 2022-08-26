import { Flex } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

// import NewTestimonialsCard from 'src/components/NewTestimonialsCard/NewTestimonialsCard'
import TestimonialsCard from 'src/components/TestimonialsCard/TestimonialsCard'

const TestimonialsPage = () => {
  return (
    <Flex direction="column">
      <MetaTags title="Testimonials" description="Testimonials page" />

      {/* <NewTestimonialsCard /> */}
      <TestimonialsCard />
    </>
  )
}

export default TestimonialsPage
