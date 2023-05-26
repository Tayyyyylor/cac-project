import React, { useState, useEffect, useRef } from 'react';
import "./Slider.css";

function Slider() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const photos = [
    { src: "./slide1.jpg"},
    { src: "./slide2.jpg"},
    { src: "./slide3.jpg" },
    { src: "./slide4.jpg"},
    { src: "./slide5.jpg"},
    { src: "./slide6.jpg"},
    { src: "./slide7.jpg"},
  ];
  const intervalRef = useRef(null);
  const imgRef = useRef(null);


  useEffect(() => {
    // met à jour l'image toutes les 6 secondes
    intervalRef.current = setInterval(() => {
      if (currentPhoto === photos.length - 1) {
        setCurrentPhoto(0);
      } else {
        setCurrentPhoto(currentPhoto + 1);
      }
    }, 6000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [currentPhoto, photos.length]);

  useEffect(() => {
    imgRef.current.src = photos[currentPhoto].src;
  }, [currentPhoto, photos]);

  return (
    <div id="slider">
      <img src={photos[currentPhoto].src} alt="" ref={imgRef} className="img-slider"/>

      <div className='text-slider-container'>
      <h2 className='title-header' ref={imgRef}>{photos[currentPhoto].title }</h2>
      <p className='p-slider'>{photos[currentPhoto].description}</p>
      </div>
    </div>
  );
}

export default Slider;
