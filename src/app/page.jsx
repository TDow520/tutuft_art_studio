
import Carousel from "./carousel/carousel";


export default function Home() {
    return (
        <div className="flex flex-col border items-center border-white text-center mx-[.5%] h-[91.25vh] w-full">
            <p>Hello this is the homepage container</p>
            <div>this is for the hours of operation and location</div>
            
            <Carousel />
        </div>
    );
}
