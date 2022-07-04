import Image from "next/image";
import Link from "next/link";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      {/* Menu Section */}
      <menu className="bg-amazon_blue-light flex  flex-grow items-center ">
        {/* Left Section */}
        <div className=" flex items-center bg-amazon_blue-light">
          <Link href="/" alt="logo">
            <a>
              <Image
                className="try"
                src="/amazon-logo.png"
                width={180}
                height={70}
                objectFit="cover"
              />
            </a>
          </Link>
        </div>

        {/* Deliver In Thai */}
        <div className="relative deliver">
          <Link href="/Item ">
            <a className="try hover:bye text-white text-center ">
              Deliver
              <br></br>
              <span> Thailand </span>
              <LocationMarkerIcon className="location absolute top-0 " />
            </a>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="bg-white hover:bg-yellow-500 flex items-center h-10 rounded-xl flex-grow try">
          <input type="text" className="p-2 h-full rounded-l-xl w-custom " />
          <SearchIcon className="relative  right-0 h-10 w-10 p-2 try " />
        </div>

        {/* Right Side */}

        <div className="flex items-center text-xs space-x-6 mx-6  text-white">
          <div className="try hover:bye md:text-sm ">
            <p>Hello noodkhan</p>
            <p>Account & Lists</p>
          </div>

          <div className="try hover:bye md:text-sm">
            <p>Returns</p>
            <p>Orders</p>
          </div>

          <div className="relative  try hover:bye md:text-lg flex items-center text-center ">
            <span className="absolute bg-yellow-300  text-center rounded-full font-extrabold text-black">
              <h2 className="w-5 h-5 relative text-center myflex">0</h2>
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </menu>

      {/* Bottom Sections */}
      <div>
        <div className="flex items-center flex-grow-0 flex-wrap bg-amazon_blue-light text-white  space-x-7 text-sm  ">
          <p className="try hover:bye ">
            <MenuIcon className="h-8 m-1 font-extrabold " />
          </p>
          <Link href="/">
            <a className="try hover:bye">Amazon Video</a>
          </Link>
          <Link href="/Page">
            <a className="try hover:bye ">Amazon Business </a>
          </Link>
          <Link href="/">
            <a className="try hover:bye ">Today's Deals</a>
          </Link>
          <Link href="/">
            <a className="try hover:bye ">Electronics</a>
          </Link>
          <Link href="/">
            <a className="try hover:bye ">Food & Grocery</a>
          </Link>
          <Link href="/">
            <a className="try hover:bye ">Prime</a>
          </Link>
          <Link href="/">
            <a className="try hover:bye">Buy Again</a>
          </Link>
          <Link href="/">
            <a className="try hover:bye">Shopper Toolkit</a>
          </Link>
          <Link href="/">
            <a className="try hover:bye">Health & Personal Care</a>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
