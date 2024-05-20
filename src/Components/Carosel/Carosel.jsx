import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Carosel = () => {
  return (
    <div>
      <Carousel
        autoPlay
        interval={2000}
        infiniteLoop
        showThumbs={true}
        className="text-center"
      >
        <div className="h-screen">
          <img
            className="h-full object-cover"
            src="../../../src/assets/home/01.jpg"
          />
        </div>
        <div className="h-screen">
          <img
            className="h-full object-cover"
            src="../../../src/assets/home/02.jpg"
          />
        </div>
        <div className="h-screen">
          <img
            className="h-full object-cover"
            src="../../../src/assets/home/03.png"
          />
        </div>
        <div className="h-screen">
          <img
            className="h-full object-cover"
            src="../../../src/assets/home/04.jpg"
          />
        </div>
        <div className="h-screen">
          <img
            className="h-ful object-coverl"
            src="../../../src/assets/home/05.png"
          />
        </div>
        <div className="h-screen object-cover">
          <img className="h-full" src="../../../src/assets/home/06.png" />
        </div>
      </Carousel>
    </div>
  );
};

export default Carosel;
