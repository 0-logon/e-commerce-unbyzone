import Categories from "@/components/home/Categories";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/shared/navbar/Navbar";
import Head from "next/head";
import { useContext, useEffect } from "react";
import DataContext from "@/store/context/DataContext";
import { fetchData } from "@/utils/fetchData";
import BestSelling from "@/components/home/BestSelling";
import Discounts from "@/components/home/Discounts";
import RecentProducts from "@/components/home/RecentProducts";
import ProductBanner from "@/components/shared/reusable/ProductBanner";
import HappyCustomers from "@/components/home/HappyCustomers";
import ServicesTrack from "@/components/shared/reusable/ServicesTrack";
import Footer from "@/components/shared/Footer";
import config from "@/config/mainConfig.json"

export default function Home({ categoriesData, productsData }) {
  const { setContextData, products } = useContext(DataContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setContextData({ categories: categoriesData, products: productsData });
      } catch (error) {
        console.error('Error fetching and setting data:', error);
      }
    };

    fetchData();
  }, [categoriesData, productsData]);

  console.log("omg", products);

  return (
    <>
      <HeadTags />
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Categories />
        <BestSelling />
        <Discounts />
        <RecentProducts />
        <ProductBanner />
        <HappyCustomers />
        <ServicesTrack />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const { categoriesData, productsData } = await fetchData();
  return {
    props: {
      categoriesData,
      productsData,
    },
    revalidate: 604800,
  };
}

const HeadTags = () => (
  <Head>
    <title>Unbyzone: Enhancing the Shopping Experience</title>
    <link rel="canonical" href={config.website_url} />
    <link rel="apple-touch-icon" href="/uploads/assets/favicon.ico" />
    <link href="/uploads/assets/favicon.ico" type="image/x-icon" rel="icon" />
    <link href="/uploads/assets/favicon.ico" type="image/x-icon" rel="shortcut icon" />
    {/* <meta name="robots" content="index, follow" /> */}
    {/* <meta name="p:domain_verify" content="6957018ca353cdc7677fe959cdc42a03" /> */}
    <meta name="apple-mobile-web-app-title" content="Unbyzone: Web Shop" />
    <meta name="application-name" content="Unbyzone: Web Shop" />
    <meta name="description" content="Discover the latest in tech and gadgets at Unbyzone. Shop a wide range of innovative products designed to enhance your digital lifestyle." />
    <meta property="og:locale" content="en_US" />
    <meta property="og:url" content={config.website_url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Unbyzone" />
    <meta property="og:title" content="Unbyzone: Enhancing the Shopping Experience" />
    <meta property="og:description" content="Discover the latest in tech and gadgets at Unbyzone. Shop a wide range of innovative products designed to enhance your digital lifestyle." />
    <meta property="og:image" content={`${config.website_url}/uploads/assets/og_image.png`} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:site" content="" />
    <meta name="twitter:creator" content="" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="" />
    <meta name="twitter:title" content="Unbyzone: Enhancing the Shopping Experience" />
    <meta name="twitter:description" content="Discover the latest in tech and gadgets at Unbyzone. Shop a wide range of innovative products designed to enhance your digital lifestyle." />
    <meta name="twitter:image" content={`${config.website_url}/uploads/assets/og_image.png`} />
  </Head>
);