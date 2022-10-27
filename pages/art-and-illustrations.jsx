import { GridImage } from "@components/index";
import images from "@images/images.json"

const Art = () => {
    const selectedImages = images.filter(i => i.page === "art")

    return (
        <GridImage
            title={"Art & Illustrations"}
            images={selectedImages}    
        />
    );
};
export default Art;
