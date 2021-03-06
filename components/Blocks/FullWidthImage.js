import { Flex, Image, Heading, Box } from '@chakra-ui/react';
import NextImage from 'next/image';
import { urlForNextImage } from '../../lib/sanity';
import FadeUpWhenVisible from '../FadeUpWhenVisible';

export default function FullWidthImage({ item }) {
  const imageProps = urlForNextImage(item?.image);
  const { src, blurDataURL } = imageProps;

  return (
    <FadeUpWhenVisible>
      <Flex
        w='100%'
        height={['50vh', null, null, '70vh', '90vh']}
        my={[8, 8, 16]}
        position='relative'
      >
        <NextImage
          placeholder='blur'
          quality='100'
          blurDataURL={blurDataURL}
          src={src}
          layout='fill'
          objectFit='cover'
        />
      </Flex>
    </FadeUpWhenVisible>
  );
}
