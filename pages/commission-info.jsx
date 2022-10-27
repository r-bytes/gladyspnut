import { GridRegular } from "@components/index";
import images from "@images/images.json"


const Commission = () => {
    const selectedImages = images.filter(i => i.page === "commissionInfo")

    return (
        <GridRegular
            title={"Commission Info"}
            subTitle={"I’m available for custom artwork, emotes, loyalty badges, animated gifs and branding."}
            intro={`I listed a few popular commissions, but feel free to contact me for other ideas and projects.  \n`}
            images={selectedImages}
        />
        
    )
};
export default Commission;
