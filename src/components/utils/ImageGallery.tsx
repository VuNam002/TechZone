import React from 'react';

interface ImageGalleryProps {
    images: string[];
    title: string;
    selectedImage: number;
    onImageSelect: (index: number) => void;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
    images,
    title,
    selectedImage,
    onImageSelect
}) => {
    return (
        <div className="w-full space-y-3">
            {/* Main image container */}
            <div className="relative w-full overflow-hidden bg-gray-100 rounded-lg">
                <img
                    src={images?.[selectedImage] || "/placeholder-image.jpg"}
                    alt={title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                    style={{
                        imageRendering: 'crisp-edges',
                        
                    }}
                    loading="eager"
                    decoding="sync"
                />
                
                {/* Image counter for mobile */}
                {images && images.length > 1 && (
                    <div className="absolute px-2 py-1 text-xs text-white bg-black rounded-full top-2 right-2 bg-opacity-60">
                        {selectedImage + 1}/{images.length}
                    </div>
                )}
            </div>
            
            {/* Thumbnail navigation */}
            {images && images.length > 1 && (
                <div className="flex pb-2 space-x-2 overflow-x-auto scrollbar-hide">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0"
                        >
                            <img
                                src={image}
                                alt={`${title} ${index + 1}`}
                                className={`w-14 h-14 md:w-20 md:h-20 object-cover rounded-lg cursor-pointer border-2 transition-all duration-200 ${
                                    selectedImage === index
                                        ? "border-red-500 shadow-lg scale-105"
                                        : "border-gray-200 hover:border-gray-400 hover:shadow-md"
                                }`}
                                onClick={() => onImageSelect(index)}
                                style={{
                                    imageRendering: 'crisp-edges',
                                }}
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};