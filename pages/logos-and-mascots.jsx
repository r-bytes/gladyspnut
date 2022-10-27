import { GridImage } from "@components/index";
import images from "@images/images.json"

const Logos = () => {
    const selectedImages = images.filter(i => i.page === "logos")

    return (
        <GridImage 
            title={"Logos"} 
            images={selectedImages}     
        />
    );
};
export default Logos;