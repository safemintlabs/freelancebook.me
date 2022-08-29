import { useEffect, useState } from 'react'

import { AddIcon } from '@chakra-ui/icons'
import {
  Button,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'

const Services = ({ onChange, services = [] }) => {
  const [tag, setTag] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const handleSave = () => {
    onChange({
      target: { name: 'services', value: (services || []).concat(tag) },
    })
    onClose()
  }

  useEffect(() => {
    if (isOpen) setTag('')
  }, [isOpen])

  return (
    <>
      <Button
        float="right"
        colorScheme="green"
        width="30%"
        type="button"
        variant="link"
        leftIcon={<AddIcon />}
        onClick={onOpen}
      >
        Add Your Own Service
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add your own service</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input
                ref={initialRef}
                placeholder="Type your service"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSave}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Services
