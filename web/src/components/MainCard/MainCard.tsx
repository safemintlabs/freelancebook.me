import { VStack } from "@chakra-ui/react"

import './styles.less'

const MainCard = () => {
  return (
    <div className='main-card-component'>
      <VStack
        className='actual-card'
        spacing={3}
        p="5"
        backgroundColor="white"
        boxShadow={"0px 4px 35px rgba(0, 0, 0, 0.08)"}
        borderWidth="1px"
        borderRadius="40px"
        margin="20px"
      >

      </VStack>
    </div>
  )
}

export default MainCard
