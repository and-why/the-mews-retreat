import { Flex, Image, Heading, Box } from '@chakra-ui/react';
import { urlFor } from '../../lib/sanity';
import { ParallaxBanner } from 'react-scroll-parallax';

export default function FullWidthImage({ item }) {
  return (
    <Flex w='100%' py={8}>
      <ParallaxBanner
        layers={[
          {
            image: urlFor(item.image),
            amount: 0.5,
          },
        ]}
        style={{
          height: '70vh',
        }}
      ></ParallaxBanner>
    </Flex>
  );
}
