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
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import NavMobile from './NavbarComps/NavMobile';
import BackgroundComp from './BodyComps/BackgroundComp';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        textAlign="center"
        fontSize="xl"
        minH={'100vh'}
        minW={'100vw'}
        flexDirection={'column'}
      >
        <NavMobile />
        <BackgroundComp />
      </Flex>
    </ChakraProvider>
  );
}

export default App;

{
  /* <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box> */
}

{
  /* <Box
          p={4}
          flex={'1 1 auto'}
          height={'100%'}
          bgColor={'white'}
          backgroundImage={'url(https://i.ibb.co/4jvCpxP/people-planking.jpg)'}
          backgroundSize={'cover'}
          backgroundPosition={'center center'}
        >
          {' '}
          Main Content Here
        </Box> */
}
