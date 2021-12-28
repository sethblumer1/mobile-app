import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  List,
  ListItem,
  ListIcon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Textarea,
  InputGroup,
  InputLeftElement,
  Select,
} from '@chakra-ui/react';
import { PhoneIcon, AtSignIcon } from '@chakra-ui/icons';
import { BsPerson } from 'react-icons/bs';
import { useDisclosure } from '@chakra-ui/react';
import React from 'react';
function Consultation() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  return (
    <>
      <Button
        onClick={onOpen}
        bg={'green.400'}
        rounded={'full'}
        color={'white'}
        _hover={{ bg: 'green.500' }}
      >
        Request Appointment
      </Button>
      {/* <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button> */}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Appointment Form</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={0}>
            <FormControl mt={2} id="name">
              <FormLabel>Name</FormLabel>
              <InputGroup borderColor="#E0E1E7">
                <InputLeftElement
                  pointerEvents="none"
                  children={<BsPerson fontSize="1.2em" color="#C9CACF" />}
                />
                <Input
                  type="text"
                  size="md"
                  placeholder="Enter your full name"
                />
              </InputGroup>
            </FormControl>

            <FormControl mt={2} id="email">
              <FormLabel>Mail</FormLabel>
              <InputGroup borderColor="#E0E1E7">
                <InputLeftElement
                  pointerEvents="none"
                  children={<AtSignIcon color="#C9CACF" />}
                />
                <Input type="text" size="md" placeholder="example@email.com" />
              </InputGroup>
            </FormControl>

            <FormControl mt={2}>
              <FormLabel>Phone Number</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<PhoneIcon color="#C9CACF" />}
                />
                <Input type="tel" placeholder="+1 (___) __-___-___" />
              </InputGroup>
            </FormControl>

            <FormControl mt={2}>
              <FormLabel>Location</FormLabel>
              <Select variant="outline" placeholder="Uptown Manhattan">
                <option value="Queens">Queens</option>
                <option value="West Hempstead">West Hempstead</option>
              </Select>
            </FormControl>

            <FormControl mt={2}>
              <FormLabel>Desired Date and Time</FormLabel>
              <Stack shouldWrapChildren direction="row">
                <Select variant="outline" placeholder="1">
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="11">12</option>
                </Select>
                <Select variant="outline" placeholder="01">
                  <option value="2">02</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="11">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                </Select>
                <Input placeholder="HH:MM" w={'100px'}></Input>
              </Stack>
            </FormControl>

            <FormControl mt={2}>
              <FormLabel>Reason for reaching out:</FormLabel>
              <Textarea
                borderColor="gray.300"
                _hover={{
                  borderRadius: 'gray.300',
                }}
                placeholder="Type message here..."
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Send Message
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Consultation;
