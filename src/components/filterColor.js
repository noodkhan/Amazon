const fillMeHole = (
  <div className="filter flex flex-col relative z-10  ">
    <h2 className="try  bg-white ">SIZE</h2>
    <div className="butt myflex">
      <button className="butthole try hover:bye">XS</button>
      <button className="butthole try hover:bye">S</button>
      <button className="butthole try hover:bye">M</button>
      <button className="butthole try hover:bye">L</button>
    </div>

    <div className="colorGang myflex ">
      <div className="colour">
        <input type="color" value="#1C27B0" className="circle" />
      </div>
      <div className="colour ">
        <input type="color" value="#d4ce15" className="circle" />
      </div>
      <div className="colour ">
        <input type="color" value="#f1ce15" className="circle" />
      </div>
      <div className="colour">
        <input type="color" value="#11fa89" className="circle" />
      </div>
      <div>
        <input type="color" value="#3c3a75" className="circle" />
      </div>
      <div>
        <input type="color" value="f1f1f1" className="circle" />
      </div>
    </div>

    <div className="priceSlice myflex flex-col">
      <input
        type="range"
        min="100$"
        max="1000$"
        className="circleRange"
      ></input>
      <h2 className="try hover:bye">Price</h2>
    </div>

    <div className="cate ">
      <h2 className="try hover:bye">CATEGORY</h2>
      <p className="hover:bye">Men</p>
      <p className="hover:bye">Women</p>
      <p className="hover:bye">Kids</p>
      <p className="hover:bye">Accessories</p>
      <p className="hover:bye">Sale</p>
      <p className="hover:bye">Coming Soon</p>
    </div>
  </div>
);
function filterColor() {
  return <>{fillMeHole}</>;
}

export default filterColor;
