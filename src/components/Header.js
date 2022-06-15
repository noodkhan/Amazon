import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      {/* Menu Section */}
      <menu className="bg-amazon_blue-light flex items-center flex-grow items-center ">
        {/* Left Section */}
        <div className=" flex items-center flex-grow sm:flex-grow-0 ">
          <Image
            className="try"
            src="/amazon-logo.png"
            width={200}
            height={70}
            objectFit="cover"
          />
        </div>
        {/* Search Bar */}
        <div className="bg-white hover:bg-yellow-500 sm:flex items-center h-10 rounded-xl flex-grow try">
          <input
            type="text"
            className="p-2 h-full rounded-l-xl w-custom "
          />
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
        <div className="flex items-center sm:flex-grow-0 bg-amazon_blue-light text-white  space-x-7 text-sm">
          <p className="try hover:bye ">
            <MenuIcon className="h-8 m-1 font-extrabold " />
          </p>
          <p className="try hover:bye text-xs ">Prime Video</p>
          <p className="try hover:bye ">Amazon Business</p>
          <p className="try hover:bye ">Today's Deals</p>
          <p className="try hover:bye ">Electronics</p>
          <p className="try hover:bye ">Food & Grocery</p>
          <p className="try hover:bye ">Prime</p>
          <p className="try hover:bye">Buy Again</p>
          <p className="try hover:bye">Shopper Toolkit</p>
          <p className="try hover:bye">Health & Personal Care</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
