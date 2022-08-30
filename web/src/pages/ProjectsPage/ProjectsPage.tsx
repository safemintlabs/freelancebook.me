import { Divider, Flex, Heading, Stack } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

import MainCard from 'src/components/MainCard/MainCard'

import './styles.less'

const ProjectsPage = () => {
  return (
    <>
      <MetaTags title="Projects" description="Projects" />

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
            <span style={{ flex: '1 1 0%' }}>Projects</span>
          </Heading>
          <Divider
            orientation="horizontal"
            backgroundColor={'green.400'}
            border={'none'}
            height="1"
          />
          <MainCard />
        </Stack>
      </Flex>
    </>
  )
}

export default ProjectsPage
