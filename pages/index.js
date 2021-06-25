import Layout from '../components/Layout';
import PageBody from '../components/PageBody';
import { getClient } from '../lib/sanity.server';
import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';
import NextLink from 'next/link';

const MotionBox = motion(Box);

export default function Home({ data }) {
  const { homepageData, siteHeaderData, navigationData } = data;
  // console.log({ siteHeaderData, homepageData, navigationData });

  return (
    <MotionBox exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      <Layout data={homepageData} navData={navigationData}>
        {homepageData.items && <PageBody content={homepageData.items} />}
      </Layout>
    </MotionBox>
  );
}

const siteHeaderQuery = `*\[_type == 'siteheader'\][0] {
  title,
  repoURL {
    current
  }
}`;

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
  const homepageData = await getClient().fetch(homepageQuery);
  const siteHeaderData = await getClient().fetch(siteHeaderQuery);
  const navigationData = await getClient().fetch(mainNavigationQuery);
  const data = { homepageData, siteHeaderData, navigationData };

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}
