import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import {
  GridItem,
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
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Client&apos;s Name</Th>
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
                ab illo inventore veritatis et quasi architecto beatae vit ...
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
              <Td>sed quia consequuntur magni dolores eos qui ratione ...</Td>
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
    </>
  )
}

export default TestimonialsCard
