import React from 'react';

const images = [
  'https://capitalconnect.bizdateup.com/assets/one-CHGb2Its.JPG',
  'https://capitalconnect.bizdateup.com/assets/three-BiTcm46J.JPG',
  'https://capitalconnect.bizdateup.com/assets/comp-1-Dsq_6BT4.jpg',
  'https://capitalconnect.bizdateup.com/assets/n1-Ls849KK4.jpg',
  'https://capitalconnect.bizdateup.com/assets/comp-2-CWWb7DA9.jpg',
  'https://capitalconnect.bizdateup.com/assets/n3-BmE0K9z5.jpg',
  'https://capitalconnect.bizdateup.com/assets/img-4-BOYGFOo3.jpg',
  'https://capitalconnect.bizdateup.com/assets/n4-BkRaHpDI.jpg',
  'https://capitalconnect.bizdateup.com/assets/comp-4-DsmepP4y.jpg',
];

const PastEventsGallery = () => {
  return (
    <section className="gallery-section container">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-2">A Glimpse into Our Past Events</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          From keynote speakers to engaging workshops, our photo gallery captures the essence of what makes our events unforgettable.
        </p>
      </div>

   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {images.map((src, index) => (
    <div className="gallery-item" key={index}>
      <img src={src} alt={`Event ${index + 1}`} className="grayscale-img w-full h-auto" />
    </div>
  ))}
</div>

    </section>
  );
};

export default PastEventsGallery;