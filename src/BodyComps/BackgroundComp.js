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
  Heading,
  Icon,
  chakra,
} from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
import { MdWork } from 'react-icons/md';
import { GoLocation } from 'react-icons/go';

import Consultation from './Consultation';
import BottomSection from './BottomSection';
import BottomCarousel from './BottomCarousel';
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
        backgroundImage={'url(https://i.ibb.co/x3GDmQb/mobile-fruit-bg.jpg)'}
        backgroundSize={'cover'}
        backgroundPosition={'bottom center'}
        // backgroundPosition={'200px'}
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
          p={10}
        >
          <Text fontWeight={'bold'} fontSize={'3xl'} color={'#003E5B'}>
            Make the <br></br>change today.
          </Text>

          <Consultation />
        </Flex>
      </Box>
      {/* <BottomCarousel /> */}
      {/* <BottomSection /> */}
      {/* <BottomCarousel /> */}

      <Box
        textAlign="center"
        px={6}
        bgColor={'#003E5B'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'space-around'}
        flex={'1 1 auto'}
      >
        <Heading as="h2" size="xl" mt={6} color={'white'} fontStyle={'italic'}>
          NY's #1 Weight Loss Practice
        </Heading>
        <Flex justifyContent={'center'} alignItems={'center'}>
          <Flex
            flexDirection={'column'}
            w={'33%'}
            alignItems={'center'}
            justifyContent={'space-between'}
            // p={3}
            mr={3}
          >
            <Icon as={BsPerson} color="white" w={7} h={7} />
            <Text color="white" pt={2} fontSize={'lg'}>
              Over 18k satisfied patients
            </Text>
          </Flex>
          <Flex flexDirection={'column'} w={'33%'} alignItems={'center'} p={4}>
            <Icon as={MdWork} color="white" w={7} h={7} />
            <Text color="white" pt={2} fontSize={'lg'}>
              50+ years of service
            </Text>
          </Flex>
          <Flex flexDirection={'column'} w={'33%'} alignItems={'center'} p={4}>
            <Icon as={GoLocation} color="white" w={7} h={7} />
            <Text color="white" pt={2} fontSize={'lg'}>
              4 New York locations
            </Text>
          </Flex>
        </Flex>
      </Box>

      {/* <Box
        bgColor={'#003E5B'}
        display={'flex'}
        justifyContent={'center'}
        flex={'1 1 auto'}
        color="whiteAlpha.900"
      >
        <Flex
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'row'}
        >
          <chakra.h1
            textAlign={'center'}
            fontSize={'3xl'}
            py={2}
            fontWeight={'bold'}
            color={'white'}
          >
            NY's Largest Weight Loss Practice
          </chakra.h1> */}
      {/* <Flex flexDirection={'column'}>
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
          </Flex> */}
      {/* </Flex>
      </Box> */}
    </Flex>
  );
}

export default BackgroundComp;
