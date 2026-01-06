import React, { useCallback, useState } from "react";
import Carousel from "./carousel/Carousel.jsx";

import food1 from "../assets/Food1.png";
import food2 from "../assets/Food2.jpg";
import food3 from "../assets/Food3.jpg";
import food4 from "../assets/Food4.jpg";

export default function CarouselDisplay() {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
    food1,
    food2,
    food3,
    food4,
    ];
    const sets = [
    "Set 1",
    "Set 2",
    "Set 3",
    "Set 4",
    ];

    const handleIndexChange = useCallback((index) => {
        setActiveIndex(index);
    }, []);
  return (
    <>
        <div className="flex flex-col mt-4 app-container">
            <h1 className="app-heading">
                Kaunter A
            </h1>
            <div className="carousel-wrapper w-1/2 self-center">
                <h1 className="app-heading">
                {sets[activeIndex % sets.length]}
                </h1>
                <Carousel images={images} onIndexChange={handleIndexChange} />
            </div>
            <div className="absolute w-1/5 right-0">
                <div className="border-4 border-gray-300 mt-4 pt-4 text-end text-2xl font-bold">
                    Test
                </div>
            </div>
        </div>
        {/* <script src="js/script.js"></script> */}
    </>
  )
}

