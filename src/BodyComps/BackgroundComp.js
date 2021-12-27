import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Flex,
  theme,
  Button,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import Consultation from './Consultation';
function BackgroundComp() {
  return (
    <Flex h={'100vh'} flexDirection={'column'}>
      <Box
        flex={'1 1 auto'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        minHeight={'60%'}
        bgColor={'white'}
        backgroundImage={'url(https://i.ibb.co/Dw13KCt/scale-more-faded.png)'}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
      >
        {' '}
        {/* <Text fontSize={'md'} fontWeight={'bold'}>
        NY's LARGEST WEIGHT LOSS PRACTICE
      </Text> */}
        <Flex
          height={'75%'}
          w={'100%'}
          justifyContent={'space-around'}
          alignItems={'center'}
          //   border={'2px solid black'}
          flexDirection={'column'}
        >
          <Text fontWeight={'bold'} fontSize={'2xl'} color={'#003E5B'}>
            Make the change today.
          </Text>
          {/* <Button
            bg={'green.400'}
            rounded={'full'}
            color={'white'}
            _hover={{ bg: 'green.500' }}
            w={'50%'}
          >
            Request consultation
          </Button> */}
          <Consultation />
        </Flex>
      </Box>
      <Box
        bgColor={'#003E5B'}
        display={'flex'}
        justifyContent={'center'}
        flex={'1 1 auto'}
        color="whiteAlpha.900"
        // display="flex"
        // flexDirection={'column'}
        // justifyContent={'center'}
        // alignItems={'center'}
      >
        <Flex
          flexDirection={'column'}
          minHeight={'75%'}
          justifyContent={'space-evenly'}
          alignItems={'center'}
        >
          <Text fontSize={'lg'} fontWeight={'bold'}>
            NY'S LARGEST WEIGHT LOSS PRACTICE
          </Text>
          <List spacing={2}>
            <ListItem fontSize={'sm'}>
              <ListIcon as={CheckIcon} color="green.500" />
              Over 18k patients treated
            </ListItem>

            <ListItem fontSize={'sm'}>
              <ListIcon as={CheckIcon} color="green.500" />
              50 years of service to the community
            </ListItem>

            <ListItem fontSize={'sm'}>
              <ListIcon as={CheckIcon} color="green.500" />4 convenient
              locations in NY area
            </ListItem>
          </List>
        </Flex>
      </Box>
    </Flex>
  );
}

export default BackgroundComp;
