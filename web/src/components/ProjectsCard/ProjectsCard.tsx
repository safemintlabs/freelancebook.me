import { Button, Divider, FormControl, FormLabel, Grid, GridItem, Heading, Input, SimpleGrid, Textarea } from '@chakra-ui/react'
import './styles.less'
import '@fontsource/inter'

const ProjectsCard = () => {
  return (
    <div className='main-card-component'>
      <div
        className='actual-card'
      >
        <Heading fontSize={"20px"}>
            Project Portfolio
            <span className='add-view'>
              <a>+ADD</a>
              <a>VIEW</a>
            </span>
        </Heading>
        <Divider
          orientation="horizontal"
          backgroundColor={'green.400'}
          height="1px"
          marginTop="8px"
          marginBottom="8px"
        />
          <FormControl isRequired>
            <Grid>
              <GridItem >
                <FormLabel 
                  fontSize="12px"
                  paddingTop='12.5px'
                >
                  Project Name
                </FormLabel>
                <Input
                  id="projectname"
                  type="text"
                  height="30px"
                  borderColor={'green.400'}
                  focusBorderColor="green.600"
                  fontSize={' 12px'}
                  required
                />
              </GridItem>
            </Grid>

            <SimpleGrid>
              <GridItem >
                <FormLabel 
                    fontSize="12px"
                    paddingTop='12.5px'
                >
                  Description
                </FormLabel>
                <Textarea
                  id="description"
                  borderColor={'green.400'}
                  focusBorderColor="green.600"
                  fontSize={' 12px'}
                  required
                />
              </GridItem>
            </SimpleGrid>

            <div className='bottom-section'>
              <div className='bottom-left'>
                <Grid>
                <GridItem colSpan={2} width="100%">
                    <FormLabel 
                      fontSize="12px"
                      paddingTop='12.5px'
                    >
                      Role in the Project
                    </FormLabel>
                    <Input
                      id="role"
                      type="text"
                      height="30px"
                    
                      borderColor={'green.400'}
                      focusBorderColor="green.600"
                      fontSize={' 12px'}
                      required
                    />
                </GridItem>
                <GridItem colSpan={2}>
                  
                    <FormLabel 
                      fontSize="12px"
                      paddingTop='12.5px'
                    >
                      Project URL
                    </FormLabel>
                    <Input
                      id="url"
                      type="url"
                      height="30px"
                      borderColor={'green.400'}
                      focusBorderColor="green.600"
                      fontSize={' 12px'}
                      required
                    />
                  </GridItem>
                  <GridItem colSpan={1} marginRight="30px">
                    <FormLabel 
                      fontSize="12px"
                      paddingTop='12.5px'
                    >
                      Start Date
                    </FormLabel>
                    <Input
                      id="start"
                      type="date"
                      height="30px"
                      borderColor={'green.400'}
                      focusBorderColor="green.600"
                      fontSize={' 12px'}
                      required
                    />
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormLabel 
                      fontSize="12px"
                      paddingTop='12.5px'
                    >
                      End Date
                    </FormLabel>
                    <Input
                      id="end"
                      type="date"
                      height="30px"
                      borderColor={'green.400'}
                      focusBorderColor="green.600"
                      fontSize={' 12px'}
                      required
                    />
                  </GridItem>
                  </Grid>
                </div>
              <div className='bottom-right'>

              {/* Space for Photos! */}

              </div>
            </div>
            <SimpleGrid paddingTop="15px">
              <GridItem>
                <Button
                  float="right"
                  colorScheme="green"
                  width="115px"
                  height="25px"
                  fontSize="12px"
                  fontWeight="450"
                  fontFamily={'Inter'}
                >
                  SAVE
                </Button>
                <Button
                  float="right"
                  width="115px"
                  height="25px"
                  fontSize="12px"
                  fontWeight="450"
                  fontFamily={'Inter'}
                  marginRight={'20px'}
                >
                  CANCEL
                </Button>
              </GridItem>
            </SimpleGrid>
          </FormControl>
      
      </div>
    </div>
  )
}

export default ProjectsCard
