const Hero = ({ heading, message }) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen mb-[10rem]">
            <div className="p-5">
                <h2 className="text-5xl font-bold"> {heading} </h2>
                <p className="py-5 text-xl"> {message} </p>
                <button className="py-2 px-8 border"> book </button>
            </div>
        </div>
    )
}
export default Hero