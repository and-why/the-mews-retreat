import { Box, Button, Flex, Heading, IconButton, Text } from '@chakra-ui/react';
import NextImage from 'next/image';
import { useState, useEffect } from 'react';
import { urlForNextImage } from '../../lib/sanity';
import FadeUpWhenVisible from '../FadeUpWhenVisible';
import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function CarouselItem({ item, index, setCurrent, current, totalItems }) {
  // console.log('Carousel Item', item);
  const [number, setNumber] = useState(current);

  const imageProps = urlForNextImage(item.image);
  const { src, blurDataURL } = imageProps;
  return (
    <MotionBox
      minW='98vw'
      w='100%'
      h='100%'
      position='absolute'
      top='0'
      right='0'
      initial={{ opacity: 0 }}
      animate={{ opacity: index + 1 != current ? 0 : 1 }}
      exit={{ opacity: 0 }}
    >
      <Flex h='100%' w='100%' flexWrap='wrap' align='center' justify='center'>
        <Box h={['55%', '55%', '100%', '100%']} w={['100vw', '80vw', '50%', '50%']}>
          <FadeUpWhenVisible>
            <NextImage placeholder='blur' quality='100' {...imageProps} layout='responsive' />
          </FadeUpWhenVisible>
        </Box>

        <Box h={['100%', '100%', '100%', '100%']} w={['100vw', '80vw', '50%', '50%']}>
          <Flex
            direction='column'
            align='center'
            justify={['flex-start', 'flex-start', 'space-between']}
            h='100%'
            p={4}
          >
            <Flex
              w='80%'
              h='100%'
              direction='column'
              justify={['flex-start', 'flex-start', 'space-between']}
            >
              <Text fontSize='250px' lineHeight='10px' textAlign='right' color='gray.100'>
                0{index + 1}
              </Text>
              <Box>
                <Heading color='gray.500' fontSize='xs' pb={4} textTransform='uppercase'>
                  {item.subheading}
                </Heading>
                <Heading fontSize='4xl' pb={4}>
                  {item.heading}
                </Heading>
                <Text fontSize='md'>{item.description}</Text>
              </Box>
              <Flex mt={8}>
                <IconButton
                  mr={2}
                  colorScheme='blackAlpha'
                  borderRadius='50%'
                  h='50px'
                  w='50px'
                  fontSize='30px'
                  onClick={() =>
                    setCurrent(current >= totalItems ? current - 1 : (current = totalItems))
                  }
                  icon={<BsArrowLeft />}
                />
                <IconButton
                  colorScheme='blackAlpha'
                  borderRadius='50%'
                  h='50px'
                  w='50px'
                  fontSize='30px'
                  onClick={() => setCurrent(current < totalItems ? current + 1 : (current = 1))}
                  icon={<BsArrowRight />}
                />
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </MotionBox>
  );
}
