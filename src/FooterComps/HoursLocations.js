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
  Center,
  Image,
  Avatar,
  Stack,
  Select,
  HStack,
  SimpleGrid,
} from '@chakra-ui/react';
import { FaLocationArrow, FaPhoneAlt, FaBusinessTime } from 'react-icons/fa';

function HoursLocations() {
  return (
    // <Center py={2}>
    <Box
      //   minW={'10vw'}
      //   maxH={'30vh'}
      // w={'full'}
      bg={'black'}
      boxShadow={'2xl'}
      rounded={'md'}
      overflow={'hidden'}
      display={'flex'}
      justifyContent={'space-evenly'}
      flexDirection={'column'}
      color={'black'}
      bgColor={'white'}
      p={2}
      mb={2}
    >
      <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Stack align={'center'} direction={'column'}>
          <Heading fontSize={'xl'} fontWeight={500} fontFamily={'body'}>
            Hours & Locations
          </Heading>
          <Select variant="outline" placeholder="Uptown Manhattan">
            <option value="Queens">Queens</option>
            <option value="West Hempstead">West Hempstead</option>
          </Select>
        </Stack>
      </Box>
      <Box
        p={4}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Flex flexDirection={'row'}>
          <VStack spacing={4} align={'flex-start'}>
            <HStack spacing={4}>
              <Icon as={FaLocationArrow} />
              <Text fontSize={'sm'} mb={2}>
                230 E 79th St, Unit 2<br></br>New York, NY 10021
              </Text>
            </HStack>

            <HStack spacing={4}>
              <Icon as={FaPhoneAlt} />
              <Text fontSize={'sm'} mb={2}>
                (212) 876-8181
              </Text>
            </HStack>

            <HStack spacing={4}>
              <Icon as={FaBusinessTime} />
              <Text fontSize={'sm'}>
                Tue. 3:00PM-5:00PM <br></br>Thu. 9:00AM-1:00PM <br></br>Sat.
                3:00PM-5:00PM
              </Text>
            </HStack>
          </VStack>
        </Flex>
      </Box>
    </Box>
    // </Center>
  );
}

export default HoursLocations;
