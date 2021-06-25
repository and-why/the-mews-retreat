import Image from 'next/image';

import { Flex, Heading, Box, Text } from '@chakra-ui/react';
import Header from './Header';
import NavMenu from './NavMenu';
import { urlForNextImage } from '../lib/sanity';

import { motion } from 'framer-motion';

let easing = [0.6, -0.15, 0.01, 0.99];
const MotionBox = motion(Box);

export default function Layout({ data, navData, children }) {
  // console.log('data', data);

  const imageProps = urlForNextImage(data?.image);
  const { src, blurDataURL } = imageProps;
  return (
    <>
      <Header title={data.title} />
      <Box position='relative' id='top'>
        <Box h='100vh'>
          {data.image && (
            <Box h='100vh'>
              <Image
                blurDataURL={blurDataURL}
                src={src}
                quality='100'
                alt={data.title}
                layout='fill'
                objectFit='cover'
                placeholder='blur'
              />
            </Box>
          )}
          <Flex
            position='absolute'
            overflow='hidden'
            top='0'
            height='100vh'
            width='100%'
            justify='space-between'
            direction='column'
            background='rgba(0,0,0,.15)'
          >
            <NavMenu navItems={navData.items} />
            <MotionBox
              initial={{
                x: 200,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 2.6,
                  ease: easing,
                },
              }}
            >
              <Flex width='100%' height='300px' align='center'>
                <Flex
                  w='60px'
                  mr={8}
                  ml={['0', '20px', '20%']}
                  justify='flex-start'
                  align='flex-start'
                  height='100%'
                  paddingTop={16}
                  borderRight='1px solid white'
                >
                  <Text fontSize='sm' width='100%' transform='rotate(-90deg)' color='white'>
                    <a href='#content'>SCROLL</a>
                  </Text>
                </Flex>
                <Box>
                  {data?.subtitle && (
                    <Text fontSize='3xl' color='white' lineHeight='1'>
                      {data.subtitle}
                    </Text>
                  )}
                  <Heading fontSize='6xl' color='white' lineHeight='1'>
                    {data.title}
                  </Heading>
                </Box>
              </Flex>
            </MotionBox>
            <Box
              background='white'
              height='100vh'
              width='100%'
              position='absolute'
              right={src ? '100%' : '0%'}
              // opacity={src ? '0' : '1'}
            ></Box>
          </Flex>
          <Box id='content'>{children}</Box>
          <Flex w='100%' align='center' justify='center' p={8}>
            <a href='#top'>back to top</a>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
