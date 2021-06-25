import Head from 'next/head';
import ErrorPage from 'next/error';

import Layout from '../components/Layout';
import PageBody from '../components/PageBody';
import { useRouter } from 'next/router';
import { usePreviewSubscription } from '../lib/sanity';

import { getClient } from '../lib/sanity.server';

import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';

const MotionBox = motion(Box);

export default function Home({ data, preview }) {
  // console.log({ data, preview });

  const router = useRouter();
  if (!router.isFallback && !data.page?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  const { data: page, data: navigationData } = usePreviewSubscription(pageQuery, {
    params: { slug: data.page.slug },
    initialData: data,
    enabled: preview,
  });

  // console.log(navigationData);
  return (
    <MotionBox exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      <Layout data={data.page} navData={data.navigationData}>
        <PageBody content={data.page.items} />
      </Layout>
    </MotionBox>
  );
}

const navigationQuery = `*\[_type == "navigation"\][0] {
  title,
  navId,
  items
}`;

const pageQuery = `*\[_type == "page" && slug.current == $slug\][0] {
  title,
  slug,
  image,
  items
}`;

const allPaths = `*[_type == "page" && defined(slug.current)][].slug.current`;

export async function getStaticProps({ params, preview = false }) {
  const page = await getClient(preview).fetch(pageQuery, {
    slug: params.slug,
  });
  const navigationData = await getClient(preview).fetch(navigationQuery);
  const data = { page, navigationData };
  return {
    props: {
      preview,
      data,
    },
  };
}
export async function getStaticPaths() {
  const paths = await getClient().fetch(allPaths);

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking',
  };
}
