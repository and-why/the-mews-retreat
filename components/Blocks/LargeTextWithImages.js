import { Parallax } from 'react-scroll-parallax';
import { Image, Text, Grid, GridItem } from '@chakra-ui/react';
import NextImage from 'next/image';
import { urlForNextImage } from '../../lib/sanity';
import FadeUpWhenVisible from '../FadeUpWhenVisible';

export default function LargetextWithImages({ item }) {
  const imageProps1 = urlForNextImage(item?.image1);
  const imageProps2 = urlForNextImage(item?.image2);
  const { src1, blurDataURL1 } = imageProps1;
  const { src2, blurDataURL2 } = imageProps2;
  return (
    <Grid
      key={item._key}
      maxWidth='1160px'
      p={[8, 8, 4]}
      templateColumns='repeat(7, 1fr)'
      templateRows='repeat(2, 1fr)'
      gap={2}
    >
      <GridItem
        colStart={[1, 1, 5]}
        colEnd={[-1, -1, 7]}
        rowStart={1}
        rowEnd={[-1, -1, 2]}
        position='relative'
      >
        <FadeUpWhenVisible>
          <Parallax y={[-10, 20]} x={[10, -10]}>
            <NextImage
              {...imageProps1}
              layout='responsive'
              opacity='0.95'
              position='relative'
              zIndex='99'
            />
          </Parallax>
        </FadeUpWhenVisible>
      </GridItem>
      <GridItem
        colStart={[1, 1, 6]}
        colEnd={[-1, -1, 8]}
        rowStart={2}
        rowEnd={[-1, -1, 3]}
        position='relative'
      >
        <FadeUpWhenVisible>
          <Parallax y={[50, -50]} x={[-20, 0]}>
            <NextImage
              {...imageProps2}
              layout='responsive'
              opacity='0.95'
              position='relative'
              zIndex='1'
            />
          </Parallax>
        </FadeUpWhenVisible>
      </GridItem>
      <GridItem colStart={[1]} colEnd={6} rowStart={2} rowEnd={2} position='relative'>
        <FadeUpWhenVisible>
          <Text
            fontSize='6xl'
            color={['white', 'white', 'gray.600']}
            textShadow={['0px 0px 2px #000000c3', '0px 0px 2px #000000c3', '0px 0px 2px #ffffffc3']}
          >
            {item.text}
          </Text>
        </FadeUpWhenVisible>
      </GridItem>
    </Grid>
  );
}
