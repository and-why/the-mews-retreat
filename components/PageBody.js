import { Flex, Image } from '@chakra-ui/react';
import SideContent from './Blocks/SideContent';
import LargeText from './Blocks/LargeText';
import TextBlock from './Blocks/TextBlock';
import LargetextWithImages from './Blocks/LargeTextWithImages';
import { urlFor } from '../lib/sanity';
import FullWidthImage from './Blocks/FullWidthImage';

export default function PageBody({ content }) {
  console.log('content', content);
  return (
    <Flex direction='column' align='center' py={8}>
      {content.map((item) => {
        if (item._type == 'textBlock') {
          return <TextBlock key={item._key} item={item} />;
        } else if (item._type == 'standardImageBlock') {
          return (
            <Image
              my={8}
              key={item._key}
              src={urlFor(item.image)}
              layout='responsive'
              height='130px'
            />
          );
        } else if (item._type == 'largeTextWithImages') {
          return <LargetextWithImages key={item._key} item={item} />;
        } else if (item._type == 'sideContent') {
          return <SideContent key={item._key} item={item} />;
        } else if (item._type == 'largeText') {
          return <LargeText key={item._key} item={item} />;
        } else if (item._type == 'fullWidthImage') {
          return <FullWidthImage key={item._key} item={item} />;
        }
      })}
    </Flex>
  );
}
