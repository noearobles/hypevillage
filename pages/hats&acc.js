import React from "react"
import { client } from '../lib/client';

import { HeroBanner, Product, FooterBanner } from "../components";
const hats = ({ products, bannerData, footerBannerData }) => (
    <div>
        {/* <HeroBanner heroBanner={bannerData.length && bannerData[0]} /> */}
        <div className="products-heading">
            <h2>Hats<br></br>&<br></br>Accessories</h2>
            {/* <p>speaker There are many variations passages</p> */}
        </div>

        <div className="products-container">
            {products?.map((product) => <Product key={product._id} product={product} />)}
        </div>

        {/* <FooterBanner footerBanner={footerBannerData && footerBannerData[0]} /> */}
    </div>
);

export const getServerSideProps = async () => {
    // Specify the category you want to include
    const category = 'Hats & Accessories';

    // Construct the final query with the category filter
    const query = `*[_type == "product" && category == "${category}"]`;

    // Fetch products based on the updated query
    const products = await client.fetch(query);

    const bannerQuery = '*[_type == "heroBanner"]';
    const bannerData = await client.fetch(bannerQuery);
    const footerBannerQuery = '*[_type == "footerBanner"]';
    const footerBannerData = await client.fetch(footerBannerQuery);

    return {
        props: { products, bannerData, footerBannerData }
    };
};

export default hats

// Apparel.getLayout = function PageLayout(page) {
//     return (
//         <>
//             {page}
//             <FooterBanner />
//         </>
//     )
// }