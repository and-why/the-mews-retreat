import { Link, ListItem } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function NavLink({ item }) {
  const router = useRouter();
  const currentLink = router.asPath;

  return (
    <ListItem
      fontSize='2xl'
      color={
        item.navigationItemUrl.internalLink &&
        item.navigationItemUrl.internalLink.slug.current == currentLink
          ? 'gold'
          : 'white'
      }
      mb={4}
    >
      <Link
        href={
          item.navigationItemUrl.internalLink
            ? item.navigationItemUrl.internalLink.slug.current
            : item.navigationItemUrl.externalUrl
        }
      >
        {item.text}
      </Link>
    </ListItem>
  );
}
