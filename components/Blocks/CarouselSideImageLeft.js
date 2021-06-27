import { Box, Flex, Heading } from '@chakra-ui/react';
import NextImage from 'next/image';
import { useEffect, useState } from 'react';
import { urlForNextImage } from '../../lib/sanity';
import CarouselItem from './CarouselItem';

export default function CarouselSideImageLeft({ item }) {
  // console.log('Carousel', item);
  const totalItems = item.items.length;
  const [current, setCurrent] = useState(1);
  const direction = item.direction;
  useEffect(() => {
    // if (current > totalItems) {
    //   setCurrent(current);
    // } else if (current <= totalItems) {
    //   setCurrent(1);
    // }
    setCurrent(current);
  }, []);
  return (
    <>
      <Flex w='100%' direction='column' align='center' mb={16}>
        <Heading p={4} mb={4}>
          {item.title}
        </Heading>
        <Flex h={['150vw', '150vw', '50vw', '50vw']} w='100%' position='relative'>
          {item.items.map((item, index) => {
            // console.log(current, index + 1);
            return (
              <CarouselItem
                direction={direction}
                index={index}
                current={current}
                setCurrent={setCurrent}
                item={item}
                totalItems={totalItems}
              />
            );
          })}
        </Flex>
      </Flex>
    </>
  );
}
