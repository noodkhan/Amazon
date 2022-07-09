import Header from "../components/Header";
import Bottom from "../components/Bottom";
import Menusec from "../components/MenuSec/MenuSec";
import Footer from "../components/Footer";

function Item() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="bg-amazon_blue-light">
        <Bottom />
        <div className="bg-gray-600">
          <Footer />
        </div>
      </div>
      <Menusec />
    </>
  );
}

export default Item;
