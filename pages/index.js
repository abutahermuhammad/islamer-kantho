// Core Component
import React from 'react'
import Head from "next/head"
// API Content 
import { getAllPosts, getRecommendedPost, getFeaturedPost } from './api/api'
// Components
import { Divider } from 'antd'
import Layout from 'antd/lib/layout/layout'
import Container from '../components/container'
import NavigationHeader from '../components/Navigation/NavigationHeader'
import BlockCarouselFullWidth from '../components/Block/BlockCarouselFullWidth'
import BlockGridPostCard from '../components/Block/BlockGridPostCard'
import BlockCardWide10x from '../components/Block/BlockCardWide10x'
import BlockSidebar from '../components/Block/BlockSidebar'
import BlockBanner from '../components/Block/BlockBanner'
import BlockFooter from '../components/Block/BlockFooter'


export default function Home({ featuredPosts, recommendedPosts, allPosts, preview}) {
    return (
        <>
            <Head>
                <title>ইসলামের কন্ঠ</title>0
            </Head>

            <Layout>
                <NavigationHeader/>
                
                {/* Featured Article Slider */}
                <BlockCarouselFullWidth key={`ik_block_carousel_full_width`} dataSlides={featuredPosts}/>

                {/* Recomendad Articles */}
                { recommendedPosts && (
                    <BlockGridPostCard key={`ik_block_grid_post_card_4x2`} postData={recommendedPosts} sectionTitle={{text:'নির্বাচিত লেখাসমুহ', orientation: 'center'}} />
                )} 
                

                {/* Image Banner */}
                <BlockBanner />

                <div className="">
                    <Container dataClasses="mx_auto">
                        <div className="flex sm:flex__wrap">
                            <div className="lg:w_3/4 sm:w__full">
                                {/* Recent Article Slider */}
                                <BlockCardWide10x postData={allPosts} />
                            </div>

                            <div className="lg:w_1/4 sm:w__full">
                                <BlockSidebar />
                            </div>
                        </div>
                    </Container>
                </div>

                {/* Footer */}
                <BlockFooter />
            </Layout>
        </>
    )
}


export async function getStaticProps({ preview = false }) {
    const allPostRange = [0,10]  // Recent Article Range
    const featuredArticleRange = [0, 5]  // Featured Content Range.
    
    const featuredPosts = await getFeaturedPost(preview, featuredArticleRange)
    const recommendedPosts = await getRecommendedPost(preview, [0, 7])
    const allPosts = await getAllPosts(preview, allPostRange)
  
    return {
      props: { featuredPosts,recommendedPosts, allPosts, preview },
      revalidate: 1
    }
}