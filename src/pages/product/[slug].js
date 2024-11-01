import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/shared/navbar/Navbar';
import Footer from '@/components/shared/Footer';
import HappyCustomers from '@/components/home/HappyCustomers';
import ServicesTrack from '@/components/shared/reusable/ServicesTrack';
import { fetchSingleProduct, fetchSlugs } from '@/utils/fetchData';
import Product from '@/components/product/Product';

const ProductPage = ({ slug, data }) => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <Navbar />
            </header>
            <main>
                <Product data={data}/>
                <HappyCustomers />
                <ServicesTrack />
            </main>
            <Footer />
        </>
    );
}

export default ProductPage;

export async function getStaticPaths() {
    const { slugsData } = await fetchSlugs();

    const paths = slugsData.products.map((product) => ({
        params: { slug: product.slug },
    }));

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const { slug } = params;
    const { productData } = await fetchSingleProduct(slug);
    return {
        props: {
            data: productData.data.product,
            slug
        },
        revalidate: 604800,
    };
}