import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Link from "next/link";

function Wallpaper({
  Classes,
  propsOne,
  propsTwo,
  propsThree,
  layout,
  width,
  height,
}) {
  return (
    <div className="try hover:bye ">
      <div className="relative ">
        
            <div className="relative w-full  bg-gradient-to-t">
              <Carousel
                autoPlay
                infiniteLoop
                showArrows={false}
                showStatus={true}
                showIndicators={true}
                showThumbs={false}
                interval={5000}
              >
                <Image
                  className={Classes}
                  src={propsOne}
                  alt="Background"
                  layout={layout}
                  width={width}
                  height={height}
                ></Image>
                <Image
                  className={Classes}
                  src={propsTwo}
                  alt="Background"
                  layout={layout}
                  width={width}
                  height={height}
                ></Image>
                <Image
                  className={Classes}
                  src={propsThree}
                  alt="Background"
                  layout={layout}
                  width={width}
                  height={height}
                ></Image>
              </Carousel>
            </div>
        
      </div>
    </div>
  );
}

export default Wallpaper;
