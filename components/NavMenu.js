import {
  Drawer,
  DrawerBody,
  Button,
  useDisclosure,
  Box,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  List,
  Icon,
  Text,
  Flex,
} from '@chakra-ui/react';
import NavLink from './NavLink';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

export default function NavMenu({ navItems }) {
  // console.log(navItems);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box textAlign='right'>
      <Button
        borderRadius='0'
        position='fixed'
        top='20%'
        right='10px'
        color='gray.600'
        onClick={onOpen}
        fontSize='xl'
        zIndex='1'
        h='50px'
        w='50px'
      >
        <Icon as={HiOutlineMenuAlt4} />
      </Button>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay backdropFilter='blur(2px)' />
        <DrawerContent background='white'>
          <DrawerCloseButton color='gray.600' />
          <DrawerHeader color='gray.600' fontSize='2xl'>
            MENU
          </DrawerHeader>
          <DrawerBody>
            <Flex direction='column' justify='space-between'>
              <List fontSize='2xl' mb='50%'>
                {navItems.map((item) => {
                  return <NavLink key={item._key} item={item} />;
                })}
              </List>
              <Button
                borderRadius='0'
                as='a'
                href='https://www.airbnb.com.au/rooms/36492060'
                background='#ff5a60'
                color='white'
                _hover={{ opacity: '0.8', transition: 'all 1s ease' }}
                transition='all 1s ease'
              >
                Book Now
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Box
        background='gray.100'
        h='100px'
        w='50px'
        position='fixed'
        top='calc(20% + 50px)'
        translateY='-50%'
        right='10px'
        textAlign='center'
        zIndex='1'
      >
        <Text transform='rotate(-90deg)' mt='35px'>
          MENU
        </Text>
      </Box>
      <Button
        as='a'
        href='https://www.airbnb.com.au/rooms/36492060'
        borderRadius='0'
        position='fixed'
        top='calc(20% + 150px)'
        translateY='-50%'
        right='10px'
        color='gray.600'
        fontSize='xl'
        zIndex='1'
        h='50px'
        w='50px'
        p={4}
        background='#ff5a60'
        color='white'
        _hover={{ opacity: '0.8', transition: 'all 1s ease' }}
        transition='all 1s ease'
      >
        <Text fontSize='sm' textAlign='left'>
          book
          <br />
          now
        </Text>
      </Button>
    </Box>
  );
}
