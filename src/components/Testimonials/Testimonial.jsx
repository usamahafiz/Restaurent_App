import React, { useState } from 'react';

const testimonialsData = [
  {
    id: 1,
    name: 'Anna Trevor',
    role: 'Customer',
    text: 'I could not be happier with my purchase from the Kaira collection! The quality is outstanding, and it exceeded all my expectations. The online shopping experience was seamless, and I appreciated how easy it was to navigate the website and make my payment securely.',
    image:"https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp" // Example placeholder with text
  },
  {
    id: 2,
    name: 'John Doe',
    role: 'Customer',
    text: 'The Kaira collection is simply stunning! I was a bit skeptical about ordering online, but the service was exceptional. From the fast shipping to the secure payment options, everything was flawless. I loved the easy-to-follow return policy, which gave me peace of mind knowing I could exchange or return items if needed (though I didn’t have to!). ',
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
  },
  {
    id: 3,
    name: 'Jane Smith',
    role: 'Customer',
    text: 'Amazing quality and service! The Kaira collection pieces I ordered are even more beautiful in person. The entire buying process was straightforward, and I was impressed with the variety of payment methods available. I even reached out to customer service with a query, and they were responsive and helpful.',
    image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { name, role, text, image } = testimonialsData[currentIndex];

  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">Customer's Testimonial</h2>
      <div className="underline"></div>
      <div className="testimonial-container">
        <button className="carousel-control-prev" onClick={handlePrev}>
          <span className="arrow-icon">&larr;</span>
        </button>

        <div className="testimonial-content">
          <img src={image} alt={name} className="customer-image" />
          <h3 className="customer-name">{name}</h3>
          <p className="customer-role">{role}</p>
          <p className="testimonial-text">{text}</p>
        </div>

        <button className="carousel-control-next" onClick={handleNext}>
          <span className="arrow-icon">&rarr;</span>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;



