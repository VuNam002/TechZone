interface AdSectionProps {
  images: {
    src: string;
    alt: string;
  }[];
}

function AdSection({ images }: AdSectionProps) {
  return (
    <div className="hidden sm:flex w-full flex-shrink-0 flex-col space-y-2 lg:w-[290px]">
      {images.map((image, index) => (
        <div key={index} className="overflow-hidden rounded-lg shadow-sm w-full h-[130px]">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-[130px] object-cover rounded-lg shadow-sm transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110"
          />
        </div>
      ))}
    </div>
  );
}

export default AdSection;