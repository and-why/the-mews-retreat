import { Box, Button, Flex, Heading, IconButton, Text } from '@chakra-ui/react';
import NextImage from 'next/image';
import { useState, useEffect } from 'react';
import { urlForNextImage } from '../../lib/sanity';
import FadeUpWhenVisible from '../FadeUpWhenVisible';
import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function CarouselItem({ item, index, setCurrent, current, totalItems, direction }) {
  console.log('Carousel Item', item);
  const [number, setNumber] = useState(current);

  const imageProps = urlForNextImage(item.image);
  const { src, blurDataURL } = imageProps;
  return (
    <MotionBox
      minW='98vw'
      w='100%'
      position='absolute'
      top='0'
      right='0'
      initial={{ opacity: 0 }}
      animate={{ opacity: index + 1 != current ? 0 : 1 }}
      exit={{ opacity: 0 }}
    >
      <Flex
        direction={
          direction == 'right' ? ['column', 'column', 'row-reverse'] : ['column', 'column', 'row']
        }
        align='flex-start'
        justify='flex-start'
      >
        <Box
          w={['100vw', '100vw', '50vw', '50vw']}
          h={['100vw', '100vw', '50vw', '50vw']}
          overflow='hidden'
        >
          <FadeUpWhenVisible>
            <NextImage placeholder='blur' quality='100' {...imageProps} layout='responsive' />
          </FadeUpWhenVisible>
        </Box>

        <Flex minH='40vw' w={['100vw', '100vw', '50vw', '50vw']} align='center'>
          <Flex
            direction='column'
            align='flex-start'
            justify={['flex-start', 'flex-start', 'space-between']}
            p={8}
            w='100%'
          >
            <Text
              w='100%'
              display={['none', null, 'block']}
              fontSize='250px'
              lineHeight='50px'
              textAlign='right'
              color='gray.100'
            >
              0{index + 1}
            </Text>
            <Box minH='250px'>
              <Heading color='gray.500' fontSize='xs' pb={4} textTransform='uppercase'>
                {item.subheading}
              </Heading>
              <Heading fontSize='4xl' pb={4}>
                {item.heading}
              </Heading>
              <Text fontSize='md'>{item.description}</Text>
            </Box>
            <Flex
              display={totalItems == 1 && 'none'}
              position={['absolute', 'absolute', 'relative']}
              top={['8', '8', '0']}
            >
              <IconButton
                mr={2}
                colorScheme='gray'
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
                colorScheme='gray'
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
      </Flex>
    </MotionBox>
  );
}
