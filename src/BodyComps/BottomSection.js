import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { BsPerson } from 'react-icons/bs';
import { MdWork } from 'react-icons/md';
import { GoLocation } from 'react-icons/go';

function StatsCard(props) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 12, md: 4 }}
      py={'2'}
      shadow={'xl'}
      //   border={'1px solid'}
      //   borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}
      bgColor={'white'}
      color={'#003E5B'}
    >
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={'medium'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function BottomSection() {
  return (
    <Flex
      maxW="7xl"
      mx={'auto'}
      px={{ base: 2, sm: 12, md: 17 }}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      bgColor={'#003E5B'}
      //   alignItems={'center'}
    >
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={2}
        fontWeight={'bold'}
        color={'white'}
      >
        NY's Largest Weight Loss Practice
      </chakra.h1>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={{ base: 2, lg: 8 }}
        gap={2}
      >
        <StatsCard
          title={'Patients Treated'}
          stat={'18k'}
          icon={<BsPerson size={'2em'} color={'#003E5B'} />}
        />
        <StatsCard
          title={'Years of Service'}
          stat={'50'}
          icon={<MdWork size={'2em'} color={'#003E5B'} />}
        />
        <StatsCard
          title={'NY Locations'}
          stat={'4'}
          icon={<GoLocation size={'2em'} color={'#003E5B'} />}
        />
      </SimpleGrid>
    </Flex>
  );
}
