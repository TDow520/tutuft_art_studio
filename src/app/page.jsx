// Importing necessary components
import Carousel from "./carousel/carousel"; // Carousel component for slides

// Home page component
export default function Home() {
    return (
        <div className="flex flex-col items-center text-center mx-[.5%] h-[91.25%] w-full">
            {/* Home page content */}
            <h1 className="text-[250%] phone:text-[150%] text-emerald-700 font-bold underline text-center mb-[2%]">
                Transform Your Weekend Nights at TuTuft Art Studio!
            </h1>
            <h2 className="text-[175%] phone:text-[100%] text-forestgreen-900 font-bold tablet:text-left phone:text-justify text-left mb-[5%]">
                Forget the usual club scene and discover the joy of creativity
                at TuTuft! Our diverse range of craft classes offers something
                for everyone, from the relaxing ambiance of wine and painting to
                the hands-on fun of rug tufting. Or manybe you want to delve into the delicate
                art of candle or perfume making? We have you covered. At TuTuft,
                we cater to all skill levels and interests, ensuring an
                enriching and enjoyable experience. Our skilled instructors are
                here to guide you through both the basics and more advanced
                techniques, all in a welcoming and inspiring environment.
            </h2>
            {/* Carousel component */}
            <Carousel />
        </div>
    );
}
