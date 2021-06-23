import { Flex, Heading } from '@chakra-ui/react';

export default function LargeText({ item }) {
  return (
    <Flex direction='row' maxW='1200px' align='center' px={4} py={[2, 4, 16]}>
      <Heading as='h2' fontSize={['4xl', '4xl', '5xl']} textAlign='center'>
        {item.text}
      </Heading>
    </Flex>
  );
}
