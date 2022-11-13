import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { GridImageItem } from ".";

const GridImage = ({ filteredImages, home }) => {
    const navigateTo = useRouter()

    const cardImages = filteredImages?.map(({ _id, title, stackInfo, mainImage }) => (
        <GridImageItem
            key={_id}
            _id={_id}
            title={title}
            mainImage={mainImage}
            stackInfo={stackInfo}
        />
    ))
        
    return (
        <div className="py-56">
            <h1 className="text-6xl font-bold mb-16 mt-12 text-center"> {home ? "My Work" : filteredImages[0]?.pageInfo.displayname} </h1>
            <div className="flex flex-col justify-between items-center mx-4 lg:mx-auto max-w-4xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl bg-secondary shadow-2xl backdrop-blur-2xl rounded p-12">
                {/* grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    {cardImages}
                </div>
                {home ? (
                    <Button
                        className="mt-12 text-secondary rounded uppercase font-bold tracking-widest py-2 px-8 border hover:bg-secondaryAccent bg-button border-none"
                        onClick={() => navigateTo.push("/art-and-illustrations")}
                    > 
                        See more ...
                    </Button>
                ) : ""}
            </div>
        </div>
    );
}
export default GridImage