import { Commission, Wrapper } from "@components/index";
import { sanityClient } from "sanity";

const CommissionInfo = ({ commission: { _id, title, subtitle, intro } }) => {
    return (
        <>
            <Wrapper
                title={title}
                subTitle={subtitle}
                intro={intro}
                rootClass={"mx-4 lg:mx-auto lg:flex justify-center bg-secondary backdrop-blur-2xl rounded shadow-2xl p-12 mt-24 max-w-4xl shadow-2xl mx-auto mb-16"}
            />
            <Commission rootClass={"mx-auto max-w-4xl flex flex-col gap-12"} />
        </>
        
    )
};
export default CommissionInfo;

export const getServerSideProps = async () => {
    const query = `
        *[_type == "grid" && title == "Commission" ][0] {
            _id,
            title,
            subtitle,
            author -> {
                name,
                image
            },
            intro
        }
    `;
    const commission = await sanityClient.fetch(query)

    return {
        props: {
            commission,
        },
    }
}