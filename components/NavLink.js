import { Link, ListItem } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

export default function NavLink({ item }) {
  const router = useRouter();
  const currentLink = router.asPath;

  return (
    <ListItem fontSize='2xl' color='gray.700'>
      <NextLink
        href={
          item.navigationItemUrl.internalLink
            ? item.navigationItemUrl.internalLink.slug.current
            : item.navigationItemUrl.externalUrl
        }
        passHref
      >
        <Link
          _hover={{ underline: 'none', borderBottom: '1px dashed black' }}
          borderBottom={
            item.navigationItemUrl.internalLink &&
            item.navigationItemUrl.internalLink.slug.current == currentLink
              ? '1px dashed black'
              : 'none'
          }
          isExternal={item.navigationItemUrl.externalUrl}
        >
          {item.text}
        </Link>
      </NextLink>
    </ListItem>
  );
}
