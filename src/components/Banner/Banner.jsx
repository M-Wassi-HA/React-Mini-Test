import "./Banner.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


function Banner() {
  return (
    <div className="parent">
      <Carousel>
      <Carousel.Item>
          <img src="./images/banner-5.jpg" alt=""  width={"100%"} height={"500px"}/>
      </Carousel.Item>
      <Carousel.Item>
          <img src="./images/banner-4.jpg" alt=""  width={"100%"} height={"500px"}/>
      </Carousel.Item>
      <Carousel.Item>
           <img src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-6.jpg&w=1920&q=100" alt=""  width={"100%"} height={"500px"}/> 
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Banner;