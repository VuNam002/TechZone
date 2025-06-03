interface AdSectionProps {
  images: {
    src: string;
    alt: string;
  }[];
}

function AdSection({ images }: AdSectionProps) {
  return (
    
    <div className="hidden sm:flex w-full flex-shrink-0 flex-col space-y-2 lg:w-[290px]">
      {images[0] && (
        <a href="http://localhost:5173/product/25">
        <div className="overflow-hidden rounded-lg shadow-sm w-full h-[130px]">
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="w-full h-[130px] object-cover rounded-lg shadow-sm transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110"
          />
        </div>
        </a>
      )}
      {images[1] && (
        <div className="overflow-hidden rounded-lg shadow-sm w-full h-[130px]">
          <a href="http://localhost:5173/product/2">
          <img
            src={images[1].src}
            alt={images[1].alt}
            className="w-full h-[130px] object-cover rounded-lg shadow-sm transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110"
          />
          </a>
        </div>
      )}
      {images[2] && (
        <div className="overflow-hidden rounded-lg shadow-sm w-full h-[130px]">
          <a href="http://localhost:5173/product/92">
          <img
            src={images[2].src}
            alt={images[2].alt}
            className="w-full h-[130px] object-cover rounded-lg shadow-sm transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110"
          />
          </a>
        </div>
      )}
    </div>
  );
}

export default AdSection;
