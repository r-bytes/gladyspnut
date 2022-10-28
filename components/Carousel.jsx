import Image from "next/image";
import { createRef, useState } from "react";

const Carousel = ({ images }) => {

    const [currentImage, setCurrentImage] = useState(0);

    const refs = images?.items?.reduce((acc, val, i) => {
        acc[i] = createRef();
        return acc;
    }, {});

    const arrowStyle = "absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center";

    const scrollToImage = i => {
        setCurrentImage(i);
    
        refs[i].current?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start',
        });
    };

    const totalImages = images.items.length;
  
    const nextImage = () => {
        if (currentImage >= totalImages - 1) {
            scrollToImage(0);
        } else {
            scrollToImage(currentImage + 1);
        }
    };

    const previousImage = () => {
        if (currentImage === 0) {
            scrollToImage(totalImages - 1);
        } else {
            scrollToImage(currentImage - 1);
        }
    };

  const sliderControl = isLeft => (
        <button
            type="button"
            onClick={isLeft ? previousImage : nextImage}
            className={`${arrowStyle} ${isLeft ? 'left-2' : 'right-2'}`}
            style={{ top: '40%' }}
        >
            <span role="img" aria-label={`Arrow ${isLeft ? 'left' : 'right'}`}> {isLeft ? '◀' : '▶'} </span>
        </button>
  );


    return (
        <div className="flex justify-center w-64 h-64 items-center text-center">
            <div className="relative w-full">
                <div className="carousel">
                    {sliderControl(true)}
                        {images?.items.map((img, i) => (
                            <div className="w-full flex-shrink-0 left-0 right-0" key={img.id} ref={refs[i]}>
                                <Image src={img.imageUrl} className="w-full object-contain" width={250} height={250} alt="#" />
                            </div>
                        ))}
                    {sliderControl()}
                </div>
            </div>
        </div>
    )
}

export default Carousel