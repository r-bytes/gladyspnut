import { useRouter } from "next/router";

const Work = () => {
    const router = useRouter();
    const { id } = router.query;

    console.log(router);
    return <div>{id}</div>;
};
export default Work;
