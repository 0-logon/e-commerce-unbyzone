import BestSelling from '@/components/home/BestSelling';
import Discounts from '@/components/home/Discounts';
import HappyCustomers from '@/components/home/HappyCustomers';
import SearchResults from '@/components/searchResults/SearchResults';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/navbar/Navbar';
import ProductBanner from '@/components/shared/reusable/ProductBanner';
import ServicesTrack from '@/components/shared/reusable/ServicesTrack';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const index = () => {
    const router = useRouter();
    const { searchKey } = router.query;

    if (searchKey) {
        return (
            <>
                <header>
                    <Navbar />
                </header>
                <main>
                    <SearchResults searchKey={searchKey} />
                    <Discounts />
                    <BestSelling />
                    <ProductBanner />
                    <HappyCustomers />
                    <ServicesTrack />
                </main>
                <Footer />
            </>
        )
    } else {
        useEffect(() => {
            router.push('/');
        }, [router]);
    }
}

export default index;