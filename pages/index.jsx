// Core Component
import { Box, Container, Divider, Grid } from "@mui/material";
import Head from "next/head";
import HeroBanner from "../components/HeroBanner";
import Layout from "../components/Layout";
import { getAllPosts, getFeaturedPost, getRecommendedPost } from "./api/api";
import daynamic from "next/dynamic";

const TrendingPosts = daynamic(() =>
  import("../components/Block/TrendingPosts")
);
const BlockSidebar = daynamic(() => import("../components/Block/BlockSidebar"));
const BlockGridPostCard = daynamic(() =>
  import("../components/Block/BlockGridPostCard")
);
const BlockBanner = daynamic(() => import("../components/Block/BlockBanner"));
const BlockCardWide10x = daynamic(() =>
  import("../components/Block/BlockCardWide10x")
);

export default function Home({
  featuredPosts,
  recommendedPosts,
  allPosts,
  preview,
}) {
  return (
    <>
      <Head>
        <title>ইসলামের কন্ঠ</title>0
      </Head>

      <Layout>
        {/* <NavigationHeader /> */}
        <HeroBanner post={featuredPosts[0]} />

        {/* This will contain latest updated contents */}
        <TrendingPosts posts={featuredPosts} />

        {/* Featured Article Slider */}
        {/* <BlockCarouselFullWidth
          key={`ik_block_carousel_full_width`}
          dataSlides={featuredPosts}
        /> */}

        {/* Recommended Articles */}
        {recommendedPosts && (
          <BlockGridPostCard
            postData={recommendedPosts}
            title="নির্বাচিত লেখাসমুহ"
          />
        )}

        <Divider />
        {/* Image Banner */}
        <BlockBanner />

        <Divider />

        <Box component="section">
          <Container maxWidth="lg">
            <Grid container spacing={5}>
              <Grid item xs={12} md={9}>
                <BlockCardWide10x postData={allPosts} />
              </Grid>

              <Grid item xs={12} md={3}>
                <BlockSidebar />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPostRange = [0, 10]; // Recent Article Range
  const featuredArticleRange = [0, 6]; // Featured Content Range.

  const featuredPosts = await getFeaturedPost(preview, featuredArticleRange);
  const recommendedPosts = await getRecommendedPost(preview, [0, 7]);
  const allPosts = await getAllPosts(preview, allPostRange);

  return {
    props: { featuredPosts, recommendedPosts, allPosts, preview },
    revalidate: 60 * 60 * 6,
  };
}
