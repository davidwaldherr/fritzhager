import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Item from './Item';

const responsive = {
  0: { items: 2 },
  568: { items: 3 },
  900: { items: 4 },
  1024: { items: 5 },
  1280: { items: 6 },
};

export const Carousel = ({ images, links, names}) => {
  const items = images.map((image, index) => (
    <Item name={names[index]} imageUrl={image} link={links[index]}/>
  ));

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
      autoPlay
      autoPlayInterval={2000}
    />
  );
}

export default Carousel;