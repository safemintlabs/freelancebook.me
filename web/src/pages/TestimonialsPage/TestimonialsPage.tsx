import { MetaTags } from '@redwoodjs/web'

// import NewTestimonialsCard from 'src/components/NewTestimonialsCard/NewTestimonialsCard'
import TestimonialsCard from 'src/components/TestimonialsCard/TestimonialsCard'

const TestimonialsPage = () => {
  return (
    <>
      <MetaTags title="Testimonials" description="Testimonials page" />

      {/* <NewTestimonialsCard /> */}
      <TestimonialsCard />
    </>
  )
}

export default TestimonialsPage
