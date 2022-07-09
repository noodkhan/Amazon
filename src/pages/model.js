import Header from "../components/Header";
import MenuSection from "../components/MenuSec/MenuSec";
import Image from "next/image";
import * as data from "../components/CustomApi.json";
import Link from "next/link";
import Wallpaper from "../components/Wallpaper";
import FillColor from "../components/filterColor";
import Card from "../components/Card";
import Footer from "../components/Footer";

let apiHouse = data.house[0].id;
let convertJsonHouse = JSON.stringify(apiHouse);
let readyimgHouse = convertJsonHouse.slice(1, 159);

{
  /* FIXME: GIVE ME FILTER AND ME LOOK GOOD DON'T FORGET TO ADD href*/
}
let wall = (
  <div className="myflex">
    <Link href="/Page">
      <a className="w-6/12">
        <div>
          <Wallpaper
            propsOne={readyimgHouse}
            propsTwo={readyimgHouse}
            propsThree={readyimgHouse}
            width={3025}
            height={1500}
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
            propsOne={readyimgHouse}
            propsTwo={readyimgHouse}
            propsThree={readyimgHouse}
            width={3025}
            height={1500}
            layout={"responsive"}
            Classes={"object-cover"}
          />
        </div>
      </a>
    </Link>
  </div>
);

function model() {
  return (
    <div className="bg-white">
      <Header />
      {/* Image Wallpaper */}
      <header>{wall}</header>
      <main className="bg-white ">
        <Card />
        <Footer />
      </main>
      <footer className="bg-black">
        <MenuSection />
      </footer>
    </div>
  );
}

export default model;
