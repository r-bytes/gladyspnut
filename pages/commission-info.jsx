import { Commission, GridRegular } from "@components/index";

const CommissionInfo = () => {

    return (
        <>
            <GridRegular
                title={"Commission Info"}
                subTitle={"I’m available for custom artwork, emotes, loyalty badges, animated gifs and branding."}
                intro={`I listed a few popular commissions, but feel free to contact me for other ideas and projects.  \n`}
                rootClass={"container mx-auto lg:flex justify-center gap-16 bg-card backdrop-blur-2xl rounded shadow-2xl px-12 sm:py-24 pt-44 sm:pt-24 sm:mt-24 max-w-4xl shadow-2xl mx-auto mb-16  "}
            />
            <Commission rootClass={"mx-auto max-w-4xl flex flex-col gap-12"} />
        </>
        
    )
};
export default CommissionInfo;
