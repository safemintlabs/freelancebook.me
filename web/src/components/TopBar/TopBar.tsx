

import './styles.less'
import { Button, Image, Text } from '@chakra-ui/react'

import '@fontsource/inter'
import { navigate, routes } from '@redwoodjs/router'
import { useProfile } from 'src/hooks/profiles'
import { useEffect, useState } from 'react'

const TopBar = () => {

  const { data } = useProfile()
  const [ profile, setProfile ] = useState(data)
  const {
    username
  } = profile || {}

  useEffect(() => setProfile(data), [data])

  const [ isUndefined, setIsUndefined ] = useState(!profile)

  useEffect(() => setIsUndefined(!profile), [profile])

  return (
    <div className="top-bar-component">
      <div className='left-aligned'>
        <Image
          className='logo'
          borderRadius="full"
          boxSize={["20px", "30px", "40px", "50px", "60px"]}
          src="/images/logo.svg"
          alt="Freelancebook"
        />
        <Text className='app-name' color={'green.400'}> FREELANCEBOOK </Text>
      </div>
      <div className='right-aligned'>
        <Button 
          className='preview-button'
          colorScheme='green'
          fontFamily={'Inter'}
          backgroundColor='transparent'
          color={'green.400'}
          borderWidth='1px'
          borderColor='green.400'
          borderRadius={'10px'}
          width='150px'
          disabled={isUndefined}

          onClick={() => navigate(routes.profile({username: username}))}
        >
          PREVIEW
        </Button>
      </div>
    </div>
  )
}

export default TopBar
