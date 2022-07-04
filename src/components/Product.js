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
    <div className="padSet relative text-black myflex gap-8 flex-col bg-white  w-1/4">
      <p className="absolute top-2 right-2 text-md italic text-gray-400">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-2 font-bold italic text-lg">{title}</h4>

      <div className="flex text-yellow-400">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 " />
          ))}
      </div>
      <p className=" font-thin italic text-lg">{description}</p>
      <div className="font-bold mb-10">
        <Currency quantity={price} currency="GBP" />
      </div>
      {hasPrime && (
        <div className="absolute top-0 left-3">
          <Image
            src="https://www.pngplay.com/wp-content/uploads/3/Amazon-Prime-Logo-Download-Free-PNG.png"
            objectFit="contain"
            width={100}
            height={100}
          />
        </div>
      )}

      <button className="boi">Add to Basket</button>
    </div>
  );
}

export default Product;
