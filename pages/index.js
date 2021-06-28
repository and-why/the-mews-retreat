import Layout from '../components/Layout';
import PageBody from '../components/PageBody';
import { getClient } from '../lib/sanity.server';
import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import { getWeather, weatherApiCall } from '../lib/weather';

const MotionBox = motion(Box);

export default function Home({ data }) {
  // console.log('homepage data', data);

  return (
    <MotionBox exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      <Layout data={data}>{data.page.items && <PageBody content={data.page.items} />}</Layout>
    </MotionBox>
  );
}

const homepageQuery = `*\[_type == "homepage"\][0] {
  title,
  subtitle,
  image,
  items
}`;

const mainNavigationQuery = `*\[_type == "navigation"\][0] {
  title,
  navId,
  items
}`;

export async function getStaticProps(context) {
  const page = await getClient().fetch(homepageQuery);
  const navData = await getClient().fetch(mainNavigationQuery);

  const data = { page, navData };

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}
