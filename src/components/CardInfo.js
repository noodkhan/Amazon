import Image from "next/image";
import * as data from "../components/CustomApi.json";

let apiChair = data.house[0].id1;
let convertJsonChair = JSON.stringify(apiChair);
let readyimgChair = convertJsonChair.slice(1, 159);

const cardHolder = (
  <div className="carditem try hover:nextbye overflow-hidden z-0">
    <Image
      src={readyimgChair}
      alt="card"
      layout="responsive"
      width={300}
      height={320}
    />
    <div className="title">
      <h2>White office Chair</h2>
      <p>$112</p>
    </div>
  </div>
);

function CardInfo() {
  return <>{cardHolder}</>;
}

export default CardInfo;
