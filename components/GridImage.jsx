import { GridImageItem } from ".";

const GridImage = ({ filteredImages }) => {

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
        <div className="py-56 min-h-fit">
            <h1 className="text-5xl font-bold mb-16 mt-12 text-center"> {filteredImages[0]?.pageInfo.displayname} </h1>
            <div className="mx-auto max-w-4xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl bg-card shadow-2xl backdrop-blur-2xl rounded= sm:p-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {cardImages}
            </div>
            
        </div>
    );
}
export default GridImage