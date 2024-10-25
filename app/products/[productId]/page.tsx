import React from 'react';
import { Products } from '@/lib/data/landing-page/productsList';
import ProductDetails from '@/components/sections/ProductDetails';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/sections/Footer';

const page = ({ params }: { params: { productId: string } }) => {
  const productId = params.productId.replace("-", " ");
  const ProductData = Products.find((element) => element.name === productId);

  // Add a default object for ProductOverview if it doesn't exist
  const ProductOverview = ProductData?.overview ?? {
    description: "No overview available or an error happened try reload",
    boxs: [],
  };

  return (
    ProductData && (
      <>
      <Navbar/>
      <ProductDetails
        ProductTitle={ProductData.name}
        ProductDescription={ProductData.description}
        ProductPreview={ProductData.imageUrl}
        DownloadLink={ProductData.DownloadLink}
        ProductOverview={ProductOverview}
      />
      <Footer/>
      </>
    )
  );
};

export default page;