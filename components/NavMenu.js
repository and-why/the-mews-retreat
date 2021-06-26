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
} from '@chakra-ui/react';
import NavLink from './NavLink';
import { getClient } from '../lib/sanity.server';

export default function NavMenu({ navItems }) {
  // console.log(navItems);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box textAlign='right'>
      <Button
        borderRadius='0'
        position='fixed'
        top='0'
        right='0'
        color='gray.600'
        onClick={onOpen}
        fontSize='xl'
        zIndex='1'
      >
        MENU
      </Button>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay backdropFilter='blur(2px)' />
        <DrawerContent background='white'>
          <DrawerCloseButton color='gray.600' />
          <DrawerHeader color='gray.600' fontSize='2xl'>
            MENU
          </DrawerHeader>
          <DrawerBody>
            <List>
              {navItems.map((item) => {
                return <NavLink key={item._key} item={item} />;
              })}
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
