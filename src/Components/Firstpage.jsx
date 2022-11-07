import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
   <div className='container'>
    <Carousel variant="dark" >
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-50"
          src='https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-slider-pic1.webp'
          alt="First slide"
        />
        <Carousel.Caption>
          <h1> The watch that has it all</h1>
          <p> Betheme's is ready for your commerce business</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-80"
          src='https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-slider-pic3.webp'
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>The blast of details</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-80"
          src='https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-slider-pic4.webp'
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>Denos T12</h1>
          <h2>Small and Powerfull</h2>
          
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselFadeExample;