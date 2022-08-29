import {
  Flex,
  Stack,
  Heading,
  FormControl,
  SimpleGrid,
  GridItem,
  FormLabel,
  Textarea,
  Divider,
  Input,
  Avatar,
  Button,
  Text,
} from '@chakra-ui/react'
const NewTestimonialsCard = () => {
  return (
    <>
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
            Testimonials
          </Heading>
          <Divider
            orientation="horizontal"
            backgroundColor={'green.400'}
            border={'none'}
            height="1"
          />
          <FormControl isRequired>
            <SimpleGrid gap={4}>
              <GridItem w="100%" colSpan={[4, 2, 1]}>
                <FormLabel htmlFor="name">Client's First Name</FormLabel>
                <Input
                  id="clientFirstname"
                  type="name"
                  width="100%"
                  borderColor={'green.400'}
                  focusBorderColor="green.600"
                  required
                />
              </GridItem>
              <GridItem w="100%" colSpan={[4, 2, 1]}>
                <FormLabel htmlFor="clientLastname">
                  Client's Last Name
                </FormLabel>
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
                <Avatar />
              </GridItem>
              <GridItem w="100%" colSpan={4}>
                <FormLabel htmlFor="feedbackTitle">Feedback Title</FormLabel>
                <Input
                  id="website"
                  type="name"
                  borderColor={'green.400'}
                  focusBorderColor="green.600"
                  required
                />
              </GridItem>
              <GridItem w="100%" colSpan={4}>
                <FormLabel htmlFor="clientFeedback">Client Feedback</FormLabel>

                <Textarea
                  id="offerStatement"
                  borderColor={'green.400'}
                  focusBorderColor="green.600"
                />
              </GridItem>
              <GridItem w="100%" rowSpan={1} colSpan={4}>
                <Button width="30%" colorScheme="green" variant="outline">
                  Upload Video
                </Button>
              </GridItem>
              <GridItem w="100%" rowSpan={1} colSpan={4}>
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

export default NewTestimonialsCard
