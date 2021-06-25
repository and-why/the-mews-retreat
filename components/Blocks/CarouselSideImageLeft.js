import { Box, Flex } from '@chakra-ui/react';
import NextImage from 'next/image';
import { useEffect, useState } from 'react';
import { urlForNextImage } from '../../lib/sanity';
import CarouselItem from './CarouselItem';

export default function CarouselSideImageLeft({ item }) {
  console.log('Carousel', item);
  const totalItems = item.items.length;
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    if (current > totalItems) {
      setCurrent(current);
    } else if (current <= totalItems) {
      setCurrent(1);
    }
  }, []);
  return (
    <Box overflow='hidden' w='100vw' h={['200vw', '200vw', '49vw', '49vw']} position='relative'>
      <Flex h='100%'>
        {item.items.map((item, index) => {
          console.log(current, index + 1);
          return (
            <CarouselItem
              index={index}
              current={current}
              setCurrent={setCurrent}
              item={item}
              totalItems={totalItems}
            />
          );
        })}
      </Flex>
    </Box>
  );
}
