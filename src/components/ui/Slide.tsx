import { useEffect, useState } from "react";
import slide1 from "../../assets/img/slide-1.jpg";
import slide2 from "../../assets/img/slide-2.jpg";
import slide3 from "../../assets/img/slide-3.jpg";
import slide4 from "../../assets/img/slide-4.jpg";
import slide5 from "../../assets/img/slide-5.jpg";

const images: string[] = [slide1, slide2, slide3, slide4, slide5];

const Slide: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [autoPlaying, setAutoPlaying] = useState<boolean>(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [autoPlaying]);

  const handleEnter = () => setAutoPlaying(false);
  const handleLeave = () => setAutoPlaying(true);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-lg h-68"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Slide wrapper with all images in a row */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`slide-${index}`}
            className="flex-shrink-0 object-cover w-full h-full"
          />
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute px-2 py-1 text-black transform -translate-y-1/2 rounded-full shadow left-2 top-1/2 bg-white/70 hover:bg-white"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute px-2 py-1 text-black transform -translate-y-1/2 rounded-full shadow right-2 top-1/2 bg-white/70 hover:bg-white"
      >
        ❯  
      </button>

      {/* Dots */}
      <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-2 left-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slide;
