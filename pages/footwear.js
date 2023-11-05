import React from "react"
import { client } from '../lib/client';

import { HeroBanner, Product, FooterBanner } from "../components";
const Footwear = ({ products, bannerData, footerBannerData }) => (
    <div>
        {/* <HeroBanner heroBanner={bannerData.length && bannerData[0]} /> */}
        <div className="products-heading">
            <h2>Footwear</h2>
            {/* <p>speaker There are many variations passages</p> */}
        </div>

        <div className="products-container">
            {products?.map((product) => <Product key={product._id} product={product} />)}
        </div>

        {/* <FooterBanner footerBanner={footerBannerData && footerBannerData[0]} /> */}
    </div>
);

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);

    const bannerQuery = '*[_type == "heroBanner"]';
    const bannerData = await client.fetch(bannerQuery);
    const footerBannerQuery = '*[_type == "footerBanner"]';
    const footerBannerData = await client.fetch(footerBannerQuery);

    return {
        props: { products, bannerData, footerBannerData }
    }
}
export default Footwear

// Apparel.getLayout = function PageLayout(page) {
//     return (
//         <>
//             {page}
//             <FooterBanner />
//         </>
//     )
// }