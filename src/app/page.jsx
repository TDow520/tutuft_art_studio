// Importing necessary components
import Carousel from "./carousel/carousel"; // Carousel component for slides

// Home page component
export default function Home() {
    return (
        <div className="flex flex-col border items-center border-white text-center mx-[.5%] h-[91.25%] w-full">
            {/* Home page content */}
            <p>Hello this is the homepage container</p>
            {/* Carousel component */}
            <Carousel />
        </div>
    );
}
