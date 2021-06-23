import Image from 'next/image';

import {
  Drawer,
  DrawerBody,
  Flex,
  Heading,
  Button,
  useDisclosure,
  Box,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  Text,
  HamburgerIcon,
} from '@chakra-ui/react';
import Header from './Header';
import { ArrowIcon } from '../components/Icons';
import NavMenu from './NavMenu';

export default function Layout({ data, navData, children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(data);
  return (
    <>
      <Header title={data.title} />
      <Box>
        <Box h='100vh'>
          {data.image && (
            <Box h='100vh'>
              <Image
                src={data.image.url}
                alt={data.title}
                layout='fill'
                objectFit='cover'
                placeholder='blur'
                blurDataURL={data.blurDataURL}
              />
            </Box>
          )}
          <Flex
            position='absolute'
            top='0'
            height='100vh'
            width='100%'
            justify='space-between'
            direction='column'
          >
            <Box textAlign='right'>
              <Button colorScheme='black' onClick={onOpen} fontSize='2xl'>
                MENU
              </Button>
              <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
                <DrawerOverlay backdropFilter='blur(2px)' />
                <DrawerContent background='#42526E'>
                  <DrawerCloseButton color='white' />
                  <DrawerHeader color='white' fontSize='2xl'>
                    MENU
                  </DrawerHeader>
                  <DrawerBody>
                    <NavMenu navItems={navData.items} />
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Box>
            <Flex
              width='100%'
              height='300px'
              align='center'
              background='rgb(2,0,36)'
              background='linear-gradient(0deg, rgba(32, 32, 32, 0.664) 0%, rgba(255,255,255,0) 100%)'
            >
              <ArrowIcon h='100%' w='40px' color='white' ml={['0', '20px', '200px']} mr={4} />
              <Box>
                {data?.subtitle && (
                  <Text fontSize='3xl' color='white' lineHeight='1'>
                    {data.subtitle}
                  </Text>
                )}
                <Heading fontSize='6xl' color='white' lineHeight='1'>
                  {data.title}
                </Heading>
              </Box>
            </Flex>
          </Flex>
          <Box>{children}</Box>
        </Box>
      </Box>
    </>
  );
}
