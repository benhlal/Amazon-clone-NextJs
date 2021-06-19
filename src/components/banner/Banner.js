import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
    return (
        <div className="relative">
            <Carousel autoPlay
                      infiniteLoop
                      showtatus={false}
                      showIndicator={false}
                      showThumbs={false}
                      interval={5000}>
                <div><img loading={'lazy'} src={'https://links.papareact.com/gi1'}/></div>
                <div><img loading={'lazy'} src={'https://links.papareact.com/6ff'}/></div>
                <div><img loading={'lazy'} src={'https://links.papareact.com/7ma'}/></div>

            </Carousel>

        </div>
    );
}

export default Banner;