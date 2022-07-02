import Image from "next/image";
import Link from "next/link";
import Two from "./Two";

function SectionTwo() {
  return (
    <div className="sectionTwo">
      <ul>
        <Two link={"/blank"} linkname={"bruh"} />
        <Two link={"/blank"} linkname={"bruh"} />
        <Two link={"/blank"} linkname={"bruh"} />
        <Two link={"/blank"} linkname={"bruh"} />
      </ul>
      <div className="martinRoyal">
        <Image
          src="/amazon-logo.png"
          alt="logo"
          layout="responsive"
          objectFit="contain"
          width={250}
          height={250}
        />
        <Link href="/blank">
          <a>Amazon</a>
        </Link>
      </div>
      <ul>
        <Two link={"/blank"} linkname={"bruh"} />
        <Two link={"/blank"} linkname={"bruh"} />
        <Two link={"/blank"} linkname={"bruh"} />
        <Two link={"/blank"} linkname={"bruh"} />
      </ul>
    </div>
  );
}

export default SectionTwo;
