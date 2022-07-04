import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Wallpaper from "../components/Wallpaper";
import MenuSec from "../components/MenuSec/MenuSec";
import * as data from "../components/CustomApi.json";
import Link from "next/link";

let ChooseApi = data.Cool[0].id10;
let String = JSON.stringify(ChooseApi);
let API = String.slice(1, 159);

let ChooseApi2 = data.Cool[0].id17;
let String2 = JSON.stringify(ChooseApi2);
let API2 = String2.slice(1, 159);

let ChooseApi3 = data.Cool[0].id11;
let String3 = JSON.stringify(ChooseApi3);
let API3 = String3.slice(1, 159);

let ChooseApi4 = data.Cool[0].id12;
let String4 = JSON.stringify(ChooseApi4);
let API4 = String4.slice(1, 159);

let ChooseApi5 = data.Cool[0].id14;
let String5 = JSON.stringify(ChooseApi5);
let API5 = String5.slice(1, 159);

export default function Home({ products }) {
  return (
    <>
      {/*  TODO: HEADER COMPONENTS    */}
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header />
      {/* TODO: MAIN COMPONENTS */}
      <main>
        <div className="myflex">
          <Link href="/Page">
            <a className="w-6/12">
              <div>
                <Wallpaper
                  propsOne={API}
                  propsTwo={API2}
                  propsThree={API3}
                  width={3025}
                  height={2200}
                  layout={"responsive"}
                  Classes={"object-cover"}
                />
              </div>
            </a>
          </Link>

          <Link href="/Item">
            <a className=" w-6/12 ">
              <div>
                <Wallpaper
                  propsOne={API4}
                  propsTwo={API5}
                  propsThree={API}
                  width={3025}
                  height={2200}
                  layout={"responsive"}
                  Classes={"object-cover"}
                />
              </div>
            </a>
          </Link>
        </div>
      </main>
      {/*  FIXME: MAIN CARD */}
      <div className="mainCard">
        <Main />
      </div>
      {/*TODO: Footer COMPONENTS */}
      <footer>
        <MenuSec />
      </footer>

      {/* Left Side w-6/12 */}
      {/* <main>{MainBottom}</main> */}
      {/* <Random /> */}
    </>
  );
}
