import { Navbar } from "@/components/navigation/Navbar"
import ContactUs from "@/components/sections/ContactUs";
import { Footer } from '@/components/sections/Footer';
import { ProductCategories } from '@/components/sections/ProductCategories'

const ProductsPage = () => {
  return (
    <>
    <Navbar/>
    <ProductCategories />
    <ContactUs />
    <Footer/>
    </>
  )
}

export default ProductsPage