import Header from "../components/Header";
import Bottom from "../components/Bottom";
import Menusec from "../components/MenuSec/MenuSec";


function Item() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
  
        <Bottom />
        {/* Right Advertise */}
        <div className="rightSide"></div>
      </div>
      <Menusec />
    </>
  );
}

export default Item;
