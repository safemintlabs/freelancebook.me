import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import {
  Flex,
  Stack,
  Heading,
  GridItem,
  Divider,
  Button,
  Grid,
  TableContainer,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'

const TestimonialsCard = () => {
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
          w={[300, 400, 500, 600, 800, 1000]}
        >
          <Grid templateColumns={'50% 30%'}>
            <GridItem>
              <Heading fontSize={{ base: '20px', md: '25px', lg: '30px' }}>
                Testimonials
              </Heading>
            </GridItem>
            <GridItem colStart={3} mt="auto" mb="auto">
              <Button mr="2" colorScheme="green" variant="ghost">
                + ADD
              </Button>
              <Button colorScheme="green" variant="ghost">
                VIEW
              </Button>
            </GridItem>
          </Grid>

          <Divider
            orientation="horizontal"
            backgroundColor={'green.400'}
            border={'none'}
            height="1"
          />
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Client's Name</Th>
                  <Th>Feedback Title</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Donalyn Cuenca</Td>
                  <Td>Mark truly amazing in helping you.</Td>
                  <Td>
                    <Button mr="2" colorScheme="green" variant="ghost">
                      <EditIcon />
                    </Button>
                    <Button colorScheme="green" variant="ghost">
                      <DeleteIcon />
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Anthony Villarin</Td>
                  <Td>
                    Sed ut perspiciatis unde omnis iste natus error sit volu ...
                  </Td>
                  <Td>
                    <Button mr="2" colorScheme="green" variant="ghost">
                      <EditIcon />
                    </Button>
                    <Button colorScheme="green" variant="ghost">
                      <DeleteIcon />
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Jem Castillo</Td>
                  <Td>
                    ab illo inventore veritatis et quasi architecto beatae vit
                    ...
                  </Td>
                  <Td>
                    <Button mr="2" colorScheme="green" variant="ghost">
                      <EditIcon />
                    </Button>
                    <Button colorScheme="green" variant="ghost">
                      <DeleteIcon />
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Mateo Roxas</Td>
                  <Td>
                    sed quia consequuntur magni dolores eos qui ratione ...
                  </Td>
                  <Td>
                    <Button mr="2" colorScheme="green" variant="ghost">
                      <EditIcon />
                    </Button>
                    <Button colorScheme="green" variant="ghost">
                      <DeleteIcon />
                    </Button>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Grid templateColumns={'50%'}>
            <GridItem colStart={6}>
              <Button
                width={['100px', '100px', '100px']}
                colorScheme={'green'}
                mt="5"
              >
                Save
              </Button>
            </GridItem>
          </Grid>
        </Stack>
      </Flex>
    </>
  )
}

export default TestimonialsCard
