import { Parallax } from 'react-scroll-parallax';
import { Image, Text, Grid, GridItem } from '@chakra-ui/react';
import { urlFor } from '../../lib/sanity';

export default function LargetextWithImages({ item }) {
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
        <Parallax y={[-10, 20]} x={[10, -10]}>
          <Image
            src={urlFor(item.image1)}
            layout='responsive'
            width='390px'
            opacity='0.95'
            position='relative'
            zIndex='99'
          />
        </Parallax>
      </GridItem>
      <GridItem
        colStart={[1, 1, 6]}
        colEnd={[-1, -1, 8]}
        rowStart={2}
        rowEnd={[-1, -1, 3]}
        position='relative'
      >
        <Parallax y={[50, -10]} x={[-10, 10]}>
          <Image
            src={urlFor(item.image2)}
            layout='responsive'
            opacity='0.95'
            width='390px'
            position='relative'
            zIndex='1'
          />
        </Parallax>
      </GridItem>
      <GridItem colStart={[1]} colEnd={6} rowStart={2} rowEnd={2} position='relative'>
        <Text
          fontSize='6xl'
          color={['white', 'white', '#333']}
          textShadow={['0px 0px 2px #000000c3', '0px 0px 2px #000000c3', '0px 0px 2px #ffffffc3']}
        >
          {item.text}
        </Text>
      </GridItem>
    </Grid>
  );
}
