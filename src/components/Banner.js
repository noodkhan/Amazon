import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

function Banner({
  propsOne,
  propsTwo,
  propsThree,
  propsFour,
  propsFive,
  propsSix,
  propsSeven,
  propsEight,
  propsNine,
  propsTen,
  layout,
  width,
  height,
  Classes
}) {
  return (
    <div className="try hover:bye">
      <div className="relative flex-row">
        <div className="flex-row ">
          <Carousel
            autoPlay
            infiniteLoop
            showArrows={false}
            showStatus={true}
            showIndicators={true}
            showThumbs={false}
            interval={5000}
          >
            <div className="w-12/12">
              <Image
                className={Classes}
                src={propsOne}
                alt="Background"
                layout={layout}
                width={width}
                height={height}
              ></Image>
            </div>
            <div className="w-12/12">
              <Image
                className={Classes}
                src={propsTwo}
                alt="Background"
                layout="responsive"
                width={width}
                height={height}
              ></Image>
            </div>
            <div className="w-12/12">
              <Image
                className={Classes}
                src={propsThree}
                alt="Background"
                layout="responsive"
                width={width}
                height={height}
              ></Image>
            </div>
            <div className="w-12/12">
              <Image
                className={Classes}
                src={propsFour}
                alt="Background"
                layout="responsive"
                width={width}
                height={height}
              ></Image>
            </div>
            <div className="w-12/12">
              <Image
                className={Classes}
                src={propsFive}
                alt="Background"
                layout="responsive"
                width={width}
                height={height}
              ></Image>
            </div>
            <div className="w-12/12">
              <Image
                className={Classes}
                src={propsSix}
                alt="Background"
                layout="responsive"
                width={width}
                height={height}
              ></Image>
            </div>
            <div className="w-12/12">
              <Image
                className={Classes}
                src={propsSeven}
                alt="Background"
                layout="responsive"
                width={width}
                height={height}
              ></Image>
            </div>
            <div className="w-12/12">
              <Image
                className={Classes}
                src={propsEight}
                alt="Background"
                layout="responsive"
                width={width}
                height={height}
              ></Image>
            </div>
            <div className="w-12/12">
              <Image
                className={Classes}
                src={propsNine}
                alt="Background"
                layout="responsive"
                width={width}
                height={height}
              ></Image>
            </div>
            <div className="w-12/12">
              <Image
                className={Classes}
                src={propsTen}
                alt="Background"
                layout="responsive"
                width={width}
                height={height}
              ></Image>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Banner;
