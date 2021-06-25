import BlockContent from '@sanity/block-content-to-react';
import { Box } from '@chakra-ui/react';
import markdownStyles from './markdown-styles.module.css';
import FadeUpWhenVisible from '../FadeUpWhenVisible';

export default function TextBlock({ item }) {
  return (
    <Box
      maxWidth='650px'
      minWidth='300px'
      textAlign='center'
      p={[2, 2, 4]}
      mb={[2, 4, 8, null]}
      color='gray.800'
    >
      <FadeUpWhenVisible>
        <BlockContent blocks={item.content} className={markdownStyles.markdown} />
      </FadeUpWhenVisible>
    </Box>
  );
}
