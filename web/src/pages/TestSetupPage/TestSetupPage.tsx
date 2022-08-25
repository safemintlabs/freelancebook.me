//note that this is only user interface, no functionality or backend added.

import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Textarea,
} from '@chakra-ui/react'
import { FaTimesCircle } from 'react-icons/fa'

import { MetaTags } from '@redwoodjs/web'

const TestSetupPage = () => {
  return (
    <>
      <MetaTags title="TestSetup" description="TestSetup page" />
      <Flex
        flexDirection="column"
        width="100wh"
        h={['180vh', '150vh', '200vh']}
        alignItems="center"
        backgroundColor="gray.200"
      >
        <Stack
          spacing={4}
          p="5"
          backgroundColor="white"
          boxShadow="md"
          borderWidth="1px"
          borderRadius="2xl"
          w={[380, 400, 700]}
        >
          <Heading fontSize={{ base: '20px', md: '25px', lg: '30px' }}>
            Profile
          </Heading>
          <Divider
            orientation="horizontal"
            backgroundColor={'green.400'}
            border={'none'}
            height="1"
          />
          <FormControl isRequired>
            <Heading
              fontSize={{ base: '12px', md: '15px', lg: '20px' }}
              marginBottom={6}
            >
              Tell something about yourself
            </Heading>
            <SimpleGrid gap={4}>
              <GridItem w="100%" colSpan={[4, 2, 1]}>
                <FormLabel htmlFor="name">First Name</FormLabel>
                <Input
                  id="firstname"
                  type="name"
                  width="100%"
                  borderColor={'green.400'}
                  focusBorderColor="green.600"
                  required
                />
              </GridItem>
              <GridItem w="100%" colSpan={[4, 2, 1]}>
                <FormLabel htmlFor="lastname">Last Name</FormLabel>
                <Input
                  id="lastname "
                  type="name"
                  width="100%"
                  borderColor={'green.400'}
                  focusBorderColor="green.600"
                  required
                />
              </GridItem>
              <GridItem w="100%" colSpan={[4, 2, 1]}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  type="email"
                  width="100%"
                  borderColor={'green.400'}
                  focusBorderColor="green.600"
                  required
                />
              </GridItem>
              <GridItem w="100%" colSpan={[4, 2, 1]}>
                <Avatar />
              </GridItem>
              <GridItem w="100%" colSpan={4}>
                <Heading
                  fontSize={{ base: '12px', md: '15px', lg: '20px' }}
                  marginBottom={6}
                >
                  Website
                </Heading>
                <Input
                  id="website"
                  type="name"
                  borderColor={'green.400'}
                  focusBorderColor="green.600"
                  required
                />
              </GridItem>
              <GridItem w="100%" colSpan={4}>
                <Heading
                  fontSize={{ base: '12px', md: '15px', lg: '20px' }}
                  marginBottom={6}
                >
                  Write your offer statement
                </Heading>
                <Textarea
                  id="offerStatement"
                  borderColor={'green.400'}
                  focusBorderColor="green.600"
                />
                <Box
                  id="maxCharLength"
                  className="invalid"
                  h="auto"
                  w="100%"
                  display="flex"
                  lineHeight={'100%'}
                  p="10px"
                  alignItems={'center'}
                  color="#ED1010"
                >
                  <FaTimesCircle />
                  Ooops, exceeded maximum character length of 220.
                </Box>
              </GridItem>
              <GridItem w="100%" rowSpan={1} colSpan={4}>
                <Heading
                  fontSize={{ base: '12px', md: '15px', lg: '20px' }}
                  marginBottom={6}
                >
                  What are your service offered?
                </Heading>
                <Textarea
                  id="service"
                  placeholder="Define your service offer here..."
                  borderColor={'green.400'}
                  focusBorderColor="green.600"
                />
                <Box
                  id="maxLengthServices"
                  className="invalid"
                  h="auto"
                  w="100%"
                  display="flex"
                  lineHeight={'100%'}
                  p="10px"
                  alignItems={'center'}
                  color="#ED1010"
                >
                  <FaTimesCircle />
                  Ooops, exceeded maximum character length of services.
                </Box>
              </GridItem>
              <GridItem w="100%" rowSpan={1} colSpan={4}>
                <Button width="30%">Cancel</Button>
                <Button float="right" colorScheme="green" width="30%">
                  Save
                </Button>
              </GridItem>
            </SimpleGrid>
          </FormControl>
        </Stack>
      </Flex>
    </>
  )
}

export default TestSetupPage
