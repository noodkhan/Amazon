import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";

const MAX_RATING = 5;
const MIN_RATING = 3;

function Product({ id, title, description, image, category, price }) {
  const [rating] = useState(
    Math.floor(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    )
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className="relative text-black flex flex-col m-5 bg-white z-30 pad w-3/12 ">
      <p className="absolute top-2 right-2 text-md italic text-gray-400">{category}</p>
      <Image src={image} height={300} width={300} objectFit="contain" />
      <h4 className="my-3 font-bold italic text-lg">{title}</h4>

      <div className="flex text-yellow-400">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 " />
          ))}
      </div>
      <p className="my-3 font-thin italic text-lg">{description}</p>
      <div className="font-bold">
        <Currency quantity={price} currency="GBP" />
      </div>

      {hasPrime && (
        <div className="absolute top-5">
          <Image
            src="https://www.pngplay.com/wp-content/uploads/3/Amazon-Prime-Logo-Download-Free-PNG.png"
            objectFit="contain"
            width={150}
            height={100}
          />
          <p className="italic text-gray-900 ">FREE NEXT-DAY DELIVERY</p>
        </div>
      )}

      <button className="boi">Add to Basket</button>
    </div>
  );
}

export default Product;
