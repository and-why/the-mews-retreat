import { Flex, List, Box, Heading, Icon, Link, Text, Button } from '@chakra-ui/react';
import NavLink from './NavLink';
import { FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer({ navItems, weather }) {
  // console.log(navItems);
  const icon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;
  return (
    <>
      <Flex background='gray.300' align='center' justify='center' p={8} direction='column'>
        <Flex mb={16} maxW='1000px' w='100%' justify='space-between'>
          <Flex direction={['column', 'column', 'row', 'row']} w='45%' justify='space-between'>
            <Flex direction='column' p={4} justify='flex-start'>
              <Heading fontSize='2xl' mb={4}>
                Current Weather
              </Heading>
              <Flex>
                <Image src={icon} width='50px' height='50px'></Image>
                <Text fontSize='30px' ml={2}>
                  {Math.round(weather.main.temp * 10) / 10}°C
                </Text>
              </Flex>
            </Flex>
            <Flex direction='column' p={4} justify='flex-start' height='100%' mb={4}>
              <Heading fontSize='2xl' mb={4}>
                Connect
              </Heading>
              <Box>
                <Link href='https://www.instagram.com/themewsstleonards/'>
                  <Icon
                    as={FaInstagram}
                    w='50px'
                    h='50px'
                    transition='all 1s ease'
                    _hover={{ opacity: 0.7, transition: 'all 1s ease' }}
                  />
                </Link>
              </Box>
            </Flex>
          </Flex>
          <Flex direction='column' p={4} justify='flex-start' mb={4} align='center'>
            <Button
              borderRadius='0'
              as='a'
              href='https://www.airbnb.com.au/rooms/36492060'
              background='#ff5a60'
              color='white'
              _hover={{ opacity: '0.8', transition: 'all 1s ease' }}
              transition='all 1s ease'
            >
              Book Now
            </Button>
          </Flex>
        </Flex>
        <List display='flex' flexDir='row' fontSize='md' justifyContent='space-between'>
          {navItems.map((item) => {
            return <NavLink key={item._key} item={item} />;
          })}
        </List>
      </Flex>
    </>
  );
}
