import { Box, Flex, Image } from '@chakra-ui/react';
import NextImage from 'next/image';
import SideContent from './Blocks/SideContent';
import LargeText from './Blocks/LargeText';
import TextBlock from './Blocks/TextBlock';
import LargetextWithImages from './Blocks/LargeTextWithImages';
import { urlFor, urlForNextImage } from '../lib/sanity';
import FullWidthImage from './Blocks/FullWidthImage';
import FadeUpWhenVisible from './FadeUpWhenVisible';
import CarouselSideImage from './Blocks/CarouselSideImage';

export default function PageBody({ content }) {
  return (
    <Flex direction='column' align='center' py={8}>
      {content.map((item) => {
        if (item._type == 'textBlock') {
          return <TextBlock key={item._key} item={item} />;
        } else if (item._type == 'standardImageBlock') {
          const imageProps = urlForNextImage(item?.image);
          // console.log(imageProps);
          return (
            <FadeUpWhenVisible key={item._key}>
              <Flex align='center' justify='center' height='130px'>
                <Box h='130px' w={imageProps.width}>
                  <NextImage my={8} {...imageProps} priority={['false', 'false', 'true']} />
                </Box>
              </Flex>
            </FadeUpWhenVisible>
          );
        } else if (item._type == 'largeTextWithImages') {
          return <LargetextWithImages key={item._key} item={item} />;
        } else if (item._type == 'sideContent') {
          return <SideContent key={item._key} item={item} />;
        } else if (item._type == 'largeText') {
          return <LargeText key={item._key} item={item} />;
        } else if (item._type == 'fullWidthImage') {
          return <FullWidthImage key={item._key} item={item} />;
        } else if (item._type == 'carouselSideImage') {
          return <CarouselSideImage key={item._key} item={item} />;
        }
      })}
    </Flex>
  );
}
