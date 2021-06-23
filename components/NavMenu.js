import { Link, List, ListItem, Text } from '@chakra-ui/react';
import NavLink from './NavLink';
import { getClient } from '../lib/sanity.server';

export default function NavMenu({ navItems }) {
  console.log(navItems);

  return (
    <List>
      {navItems.map((item) => {
        return <NavLink key={item._key} item={item} />;
      })}
    </List>
  );
}
