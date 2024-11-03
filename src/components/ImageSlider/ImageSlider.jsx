import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';

const CardImageSlider = () => {
  const images = [
    { src: 'https://i.pinimg.com/736x/00/bf/b5/00bfb507fb37fa175fde42be0c64eb0a.jpg' },
    { src: 'https://i.pinimg.com/474x/86/62/64/866264667b53884918ef0fe661f7c151.jpg' },
    { src: 'https://i.pinimg.com/474x/90/ca/aa/90caaa56255abb31bfff1623161d76ce.jpg' },
    { src: 'https://i.pinimg.com/474x/21/2b/8b/212b8b3343442970d85ce044411c9871.jpg' },
    { src: 'https://i.pinimg.com/474x/2f/05/3a/2f053ad96c2c62d03c7a0659268d0aae.jpg' },
    { src: 'https://i.pinimg.com/474x/9c/84/59/9c8459f45489ddd4284f48151df7a649.jpg' },
  ];
  

  const [items, setItems] = useState([]);

  const updateItems = () => {
    const isSmallScreen = window.innerWidth <= 576; 
    const imagesPerSlide = isSmallScreen ? 2 : 3; 

    const newItems = [];
    for (let i = 0; i < images.length; i += imagesPerSlide) {
      newItems.push(images.slice(i, i + imagesPerSlide));
    }
    setItems(newItems);
  };

  useEffect(() => {
    updateItems();
    window.addEventListener('resize', updateItems);
    return () => {
      window.removeEventListener('resize', updateItems);
    };
  }, []);

  return (
    <div className="container mt-5 mb-5 imgSlider">
      <h1 className="mb-3">@Bite.Heaven</h1>
      <p className='mb-5'>Follow us on Instagram</p>
      <Carousel controls={false} indicators={false}>
        {items.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="row justify-content-center">
              {item.map((image, imgIndex) => (
                <div className="col-4 col-md-3 col-sm-4" key={imgIndex}>  
                  <img
                    className="img-fluid mb-4"
                    src={image.src}
                    alt={`Slide ${index * 4 + imgIndex + 1}`}
                  />
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CardImageSlider;