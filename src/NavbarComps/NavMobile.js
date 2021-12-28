import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Image,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Icon,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import { FaInstagram, FaFacebookSquare } from 'react-icons/fa';

const Links = [
  'Home',
  'Meet Our Doctors',
  'Tips & Tricks',
  'BMI Calculator',
  <Flex justifyContent={'center'}>
    <Icon as={FaFacebookSquare} mr={2} />
    <Icon as={FaInstagram} ml={2} />
  </Flex>,
];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    color={'#003E5B'}
    _hover={{
      textDecoration: 'none',
      color: '#4E95A9',
      // bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
);

export default function NavMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={'#F8F8F8'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            // bg={'#4E95A9'}
            bgColor={'#003E5B'}
            // bgGradient="linear(to-r,#4E95A9,#008ed1)"
            color={'whiteAlpha.900'}
          />
          <HStack spacing={8} alignItems={'center'}>
            {/* Header title would go here */}
            {/* <Box>Weight MD</Box> */}
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map(link => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>

            {/* <Text>Medical Weight Control</Text> */}
          </HStack>
          <Flex alignItems={'center'} justifyContent={'center'} width={'100%'}>
            <Menu>
              <Avatar
                size={'md'}
                src={'https://i.ibb.co/1n9SxFS/weight-md-new-Logo-no-Bg.png'}
                bg={'transparent'}
              />
            </Menu>
            <Text fontSize={'sm'} fontWeight={'bold'} color={'#003E5B'}>
              Medical Weight Control
            </Text>
          </Flex>

          <Button borderRadius={'8px'} padding={0} bgColor={'transparent'}>
            <Image
              src="https://cdn.countryflags.com/thumbs/spain/flag-round-250.png"
              width={'22.5px'}
            />
          </Button>
          {/* <Flex alignItems={'center'}>
            <Menu>
              <Avatar
                size={'md'}
                src={'https://i.ibb.co/1n9SxFS/weight-md-new-Logo-no-Bg.png'}
                bg={'transparent'}
              />
            </Menu>
            <Text fontSize={'md'} fontWeight={'bold'}>
              Medical Weight Control
            </Text>
          </Flex> */}

          {/* 
          <Flex alignItems={'center'}>
            <Menu>
              <Avatar
                size={'md'}
                src={'https://i.ibb.co/1n9SxFS/weight-md-new-Logo-no-Bg.png'}
                bg={'transparent'}
              />
            </Menu>
          </Flex> */}
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map(link => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

{
  /*    <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
              <Avatar
                size={'sm'}
                src={'https://i.ibb.co/1n9SxFS/weight-md-new-Logo-no-Bg.png'}
                bg={'transparent'}
              />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>*/
}
