import Text from "../components/Text";
import * as data from "../components/CustomApi.json";
import Image from "next/image";
import Footer from '../components/Footer;'

let ChooseApi = data.house[0].id;
let String = JSON.stringify(ChooseApi);
let API = String.slice(1, 159);

let date = "22 JANUARY 2015";
let head = "Ways to Make Your IP Address Anonymous";
let para = "when the aim is to develop an entertaining and fun game app , it is essential for the business-people to hire a professional game";
let URL = "/Page"

const cardImg = (
  <Image src={API} alt="img" width={300} height={300} layout="responsive" />
);

let CardOne= (
  <div>
    Card
    <div>{cardImg}</div>
    <div>
      <Text date={date} title={head} content={para} linkname={URL} />
    </div>
  </div>
);

{
  /* TODO: FlexBox ELemnts Card  */
}
let allCard = (
  <div className="">
    {CardOne}
    {CardOne}
    {CardOne}
  </div>
);



function Concept() {
  return (
    <div>
      <div>Wallpaper</div>
      <div>FlexBox</div>
      <div>
        {allCard}
        {allCard}
      </div>
        <Footer/>
      <footer>
      </footer>
    </div>
  );
}

export default Concept;
