import Random from "./Random";
import Image from "next/image";

function ApiPhoto() {
  return (
    <div className="PageWall">
      {ImageApi.map(({ Apple, Shoes, Cool, Images, Painting }) => (
        <Image
          src={Apple.id1}
          alt="background"
          layout="responsive"
          width={300}
          height={300}
          objectFit="cover"
        />
      ))}
    </div>
  );
}

export default ApiPhoto;
