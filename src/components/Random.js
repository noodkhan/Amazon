import Image from "next/image";
import * as data from "../components/CustomApi.json";

let Input = (
  <>
    <input type="text"></input>
    <input type="password"></input>
    <input type="radio"></input>
    <input type="checkbox"></input>
    <input type="button"></input>
    <input type="color"></input>
    <input type="email"></input>
    <input type="file"></input>
    <input type="hidden"></input>
    <input type="image"></input>
    <input type="number"></input>
    <input type="range"></input>
    <input type="search"></input>
    <input type="tel"></input>
    <input type="time"></input>
    <input type="date"></input>
    <input type="datetime-local"></input>
    <input type="week"></input>
    <input type="month"></input>
    <input type="url"></input>
    <input type="submit"></input>
    <input type="reset"></input>
  </>
);

let user = {
  id: "101010",
  name: "homeboi",
  username: "nicky",
  surname: "johnson",
  location: ["wichai", "changkhan"],
  hobbies: "programming",
  mostview: "house Desgining",
};

{
  /* FIXME : Don't touch this*/
}
{
  /* TODO: Only for Changing Api Type */
}
function Random() {
  let url = data.Cool[0].id18;
  let json = JSON.stringify(url);
  let cut = json.slice(1, 159);
  let urlTwo = data.Cool[0].id12;
  let jsonTwo = JSON.stringify(urlTwo);
  let cutTwo = jsonTwo.slice(1, 159);

  let Api = (
    <div className="myflex">
      <div className="w-1/2">
        <Image
          src={cut}
          alt="background"
          width={2050}
          height={1050}
          objectFit="cover"
          layout="responsive"
        />
      </div>

      <div className="w-1/2">
        <Image
          src={cutTwo}
          alt="background"
          width={2050}
          height={1050}
          objectFit="cover"
          layout="responsive"
        />
      </div>
    </div>
  );

  // let Infomation = JSON.stringify(user);

  return (
    <>
      <div className="hole"></div>
      {Api}
      {/* {Infomation} */}
    </>
  );
}

export default Random;
