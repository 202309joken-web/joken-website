// components/ImageSlider.tsx
import Image from "next/image";
import { useState, useEffect } from "react";

interface ImageSliderProps {
  images: string[];
  interval?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  interval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <div className="image-slider">
      <button onClick={prevSlide}>Previous</button>
      <Image
        src={images[currentIndex]}
        width={300}
        height={300}
        alt={`Slide ${currentIndex + 1}`}
      />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default ImageSlider;
