import ProductFeed from "../components/ProductFeed";
import Random from "../components/Random";
import Header from "../components/Header";
import MenuSec from "../components/MenuSec/MenuSec";
import Image from "next/image";

function Page({ products }) {
  return (
    <>
      <Header />
      <div className="background">
        {/* <Image
          src="/amazon-logo.png"
          layout="responsive"
          objectFit="contain"
          width={1050}
          height={200}
        /> */}
      </div>
      <Random/>
      <ProductFeed products={products} />
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
