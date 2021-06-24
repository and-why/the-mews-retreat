import Layout from '../components/Layout';
import PageBody from '../components/PageBody';
import { getClient } from '../lib/sanity.server';

export default function Home({ data }) {
  const { homepageData, siteHeaderData, navigationData } = data;
  console.log({ siteHeaderData, homepageData, navigationData });

  return (
    <Layout data={homepageData} navData={navigationData}>
      {homepageData.items && <PageBody content={homepageData.items} />}
    </Layout>
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
  "ctaUrl": cta {
    current
        },
  image,
  blurDataURL,
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
  console.log(data);
  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}
