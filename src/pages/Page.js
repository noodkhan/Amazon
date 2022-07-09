import ProductFeed from "../components/ProductFeed";
import Random from "../components/Random";
import Header from "../components/Header";
import MenuSec from "../components/MenuSec/MenuSec";
import Image from "next/image";
import Footer from "../components/Footer";

function Page({ products }) {
  return (
    <>
      <Header />
      <div className="background"></div>
      <Random />
      <main className="bg-white">
      <ProductFeed products={products} />
      <Footer />
      </main>
      
      <MenuSec />
    </>
  );
}

export default Page;
export async function getServerSideProps() {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
