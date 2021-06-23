import { Flex, Image, Heading, Box } from '@chakra-ui/react';
import { urlFor } from '../../lib/sanity';
import BlockContent from '@sanity/block-content-to-react';
import markdownStyles from './markdown-styles.module.css';
import { Parallax } from 'react-scroll-parallax';

export default function SideContent({ item }) {
  return (
    <Flex
      direction={['column', 'column', 'row']}
      maxW='1000px'
      w='100%'
      align='center'
      justify='center'
      px={4}
      py={[2, 2, 16]}
    >
      <Flex
        direction='column'
        w={['100%', '100%', '35%']}
        px={[4, 4, 8]}
        align={['flex-start', 'flex-start', 'flex-end']}
        minWidth='245px'
      >
        <Parallax y={[-10, 10]}>
          <Flex direction='column' align={['flex-start', 'flex-start', 'flex-end']}>
            <Image src={urlFor(item.image)} width='100px' mb={2} />
            <Heading as='h3' fontSize='md' textAlign={['left', 'left', 'right']}>
              {item.subtitle}
            </Heading>
            <Heading as='h2' fontSize='5xl' textAlign={['left', 'left', 'right']}>
              {item.text}
            </Heading>
          </Flex>
        </Parallax>
      </Flex>
      <Flex
        w={['100%', '100%', '65%']}
        p={8}
        borderLeft={['0px', '0px', '1px solid']}
        px={[4, 4, 8]}
      >
        <Parallax y={[10, -10]}>
          <Box className={markdownStyles.markdown}>
            <BlockContent blocks={item.content.content} />
          </Box>
        </Parallax>
      </Flex>
    </Flex>
  );
}
