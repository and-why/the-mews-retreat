import { Flex, Image, Heading, Box } from '@chakra-ui/react';
import NextImage from 'next/image';
import { urlForNextImage } from '../../lib/sanity';
import { Parallax } from 'react-scroll-parallax';
import { useEffect, useState } from 'react';

export default function FullWidthImage({ item }) {
  const imageProps = urlForNextImage(item?.image);
  const { src, blurDataURL } = imageProps;

  return (
    <Flex w='100%' height='50vh' my={[8, 8, 16]} position='relative'>
      <NextImage
        placeholder='blur'
        blurDataURL={blurDataURL}
        src={src}
        layout='fill'
        objectFit='cover'
      />
    </Flex>
  );
}
