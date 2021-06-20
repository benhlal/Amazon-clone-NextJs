import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
    return (
        <div className="relative bg-gray-100">
            <div className={'myGradient'}/>
            <Carousel autoPlay
                      infiniteLoop
                      showStatus={false}
                      showIndicators={false}
                      showThumbs={false}
                      interval={5000}>
                <div>
                    <img loading={'lazy'} src={'https://links.papareact.com/gi1'} alt={''}/>
                </div>
                <div>
                    <img loading={'lazy'} src={'https://links.papareact.com/6ff'} alt={''}/>
                </div>
                <div><
                    img loading={'lazy'} src={'https://links.papareact.com/7ma'} alt={''}/>
                </div>
            </Carousel>

        </div>
    );
}

export default Banner;