import { GridImage } from "@components/index";
import images from "@images/images.json"

const Branding = () => {
    const selectedImages = images.filter(i => i.page === "branding")

    return (
        <GridImage
            title={"Branding"}
            images={selectedImages}
        />
    );
};

export default Branding;