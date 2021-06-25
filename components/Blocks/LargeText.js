import { Flex, Heading } from '@chakra-ui/react';
import FadeUpWhenVisible from '../FadeUpWhenVisible';

export default function LargeText({ item }) {
  return (
    <Flex direction='row' maxW='1200px' align='center' px={4} py={[2, 4, 16]}>
      <FadeUpWhenVisible>
        <Heading as='h2' color='gray.600' fontSize={['4xl', '4xl', '5xl']} textAlign='center'>
          {item.text}
        </Heading>
      </FadeUpWhenVisible>
    </Flex>
  );
}
