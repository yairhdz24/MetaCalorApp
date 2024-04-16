import React from 'react';
import collage1 from '../components/images_gallery/collage1.jpg';
import collage2 from '../components/images_gallery/collage2.jpg';
import collage3 from '../components/images_gallery/collage3.jpg';
import collage4 from '../components/images_gallery/collage4.jpg';
import collage5 from '../components/images_gallery/collage5.jpg';

export const ImageGallery = () => {
  return (
    <section>
      <div className="container px-5 py-10 mx-auto flex flex-wrap">
        <div className="flex w-full flex-wrap">
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src={collage1} loading="lazy" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src={collage2} loading="lazy" />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img alt="gallery" className="w-full h-full object-cover object-center block" src={collage3} loading="lazy"/>
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img alt="gallery" className="w-full h-full object-cover object-center block" src={collage4} loading="lazy" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src={collage5} loading="lazy" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src={collage2} loading="lazy" />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


