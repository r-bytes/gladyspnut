import { GridImage } from "@components/index";
import images from "@images/images.json"

const AnimatedGifs = () => {
    const selectedImages = images.filter(i => i.page === "animatedGifs")

    return (
        <GridImage
            title={"Animated Gifs"}
            images={selectedImages}
        />
    );
};

export default AnimatedGifs;
