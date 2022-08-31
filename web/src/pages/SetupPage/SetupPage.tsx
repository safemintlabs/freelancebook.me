//note that this is only user interface, no functionality or backend added.

import { useEffect, useState } from 'react'

import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  HStack,
  Input,
  SimpleGrid,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  Textarea,
} from '@chakra-ui/react'
import { FaTimesCircle } from 'react-icons/fa'

import { MetaTags } from '@redwoodjs/web'

import Avatar from 'src/components/Avatar'
import Services from 'src/components/Services/Services'
import { useProfile } from 'src/hooks/profiles'

import './styles.less'

const SetupPage = () => {
  const { profile: data, save, isSaving, percentage = 0 } = useProfile()
  const [profile, setProfile] = useState(data)
  const {
    id,
    email,
    avatar_url,
    first_name,
    last_name,
    about,
    service,
    website,
  } = profile || {}
  const handleSave = () => {
    save({ ...profile, isActive: percentage === 100 })
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setProfile((prev) => ({ ...prev, [name]: value }))
  }
  useEffect(() => setProfile(data), [data])
  return (
    <>
      <MetaTags title="Profile" description="Setup your profile" />
      <Flex
        as="form"
        flexDirection="column"
        width="100%"
        alignItems="center"
        onSubmit={handleSave}
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
                  name="first_name"
                  type="text"
                  width="100%"
                  borderColor={'green.400'}
                  focusBorderColor="green.600"
                  required
                  value={first_name}
                  onChange={handleChange}
                />
              </GridItem>
              <GridItem w="100%" colSpan={[4, 2, 1]}>
                <FormLabel htmlFor="lastname">Last Name</FormLabel>
                <Input
                  name="last_name"
                  type="text"
                  width="100%"
                  borderColor={'green.400'}
                  focusBorderColor="green.600"
                  required
                  value={last_name}
                  onChange={handleChange}
                />
              </GridItem>
              <GridItem w="100%" colSpan={[4, 2, 1]}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  name="email"
                  type="email"
                  width="100%"
                  borderColor={'green.400'}
                  focusBorderColor="green.600"
                  required
                  value={email}
                  onChange={handleChange}
                />
              </GridItem>
              <GridItem w="100%" colSpan={[4, 2, 1]}>
                <Avatar
                  id={id}
                  name={`${first_name} ${last_name}`}
                  url={avatar_url}
                  size="large"
                  onUpload={(url) => {
                    setProfile((prev) => ({ ...prev, avatar_url: url }))
                  }}
                />
              </GridItem>
              <GridItem w="100%" colSpan={4}>
                <Heading
                  fontSize={{ base: '12px', md: '15px', lg: '20px' }}
                  marginBottom={6}
                >
                  Website
                </Heading>
                <Input
                  name="website"
                  type="text"
                  borderColor={'green.400'}
                  focusBorderColor="green.600"
                  required
                  value={website}
                  onChange={handleChange}
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
                  name="about"
                  borderColor={'green.400'}
                  focusBorderColor="green.600"
                  value={about}
                  onChange={handleChange}
                />
                {about?.length > 220 && (
                  <Box
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
                )}
              </GridItem>
              <GridItem w="100%" rowSpan={1} colSpan={4}>
                <Heading
                  fontSize={{ base: '12px', md: '15px', lg: '20px' }}
                  marginBottom={6}
                >
                  What are your service offered?
                  <Services
                    services={profile?.services}
                    onChange={handleChange}
                  />
                </Heading>
                {profile?.services?.length && (
                  <HStack spacing={4} mb={'20px'}>
                    {profile?.services?.map((service, index) => (
                      <Tag
                        size="sm"
                        key={`${service}`}
                        borderRadius="full"
                        variant="solid"
                        colorScheme="green"
                      >
                        <TagLabel>{service}</TagLabel>
                        <TagCloseButton
                          onClick={() => {
                            setProfile((prev) => ({
                              ...prev,
                              services: prev.services.filter(
                                (_, i) => i !== index
                              ),
                            }))
                          }}
                        />
                      </Tag>
                    ))}
                  </HStack>
                )}
                <Textarea
                  name="service"
                  placeholder="Define your service offer here..."
                  borderColor={'green.400'}
                  focusBorderColor="green.600"
                  value={service}
                  onChange={handleChange}
                />
                {service?.length > 220 && (
                  <Box
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
                )}
              </GridItem>
              <GridItem w="100%" rowSpan={1} colSpan={4}>
                <Button width="30%">Cancel</Button>
                <Button
                  float="right"
                  colorScheme="green"
                  width="30%"
                  disabled={isSaving}
                  onClick={handleSave}
                  type="submit"
                >
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

export default SetupPage
