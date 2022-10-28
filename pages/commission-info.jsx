import { Commission, GridRegular } from "@components/index";

const CommissionInfo = () => {

    return (
        <>
            <GridRegular
                title={"Commission Info"}
                subTitle={"I’m available for custom artwork, emotes, loyalty badges, animated gifs and branding."}
                intro={`I listed a few popular commissions, but feel free to contact me for other ideas and projects.  \n`}
            />
            <Commission />
        </>
        
    )
};
export default CommissionInfo;
