import React, { useCallback, useState } from "react";
import Carousel from "./carousel/Carousel.jsx";

export default function CarouselDisplay() {
    const [activeIndex, setActiveIndex] = useState(0);

    const food1 = "https://res.cloudinary.com/ddbnfzbgl/image/upload/dailyMenu/set1/Food1";
    const food2 = "https://res.cloudinary.com/ddbnfzbgl/image/upload/dailyMenu/set2/Food2";
    const food3 = "https://res.cloudinary.com/ddbnfzbgl/image/upload/dailyMenu/set3/Food3";
    const food4 = "https://res.cloudinary.com/ddbnfzbgl/image/upload/dailyMenu/set4/Food4";
    const food5 = "https://res.cloudinary.com/ddbnfzbgl/image/upload/dailyMenu/set4/Info";

    const cloudinaryUrl = [
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
                <Carousel images={cloudinaryUrl} onIndexChange={handleIndexChange} />
            </div>
            <div className="absolute w-1/5 right-0">
                <div className="border-4 border-gray-300 mt-4 pt-4 text-end text-2xl font-bold">
                    Test
                </div>
            </div>
        </div>
        <img
            src={cloudinaryUrl[activeIndex % cloudinaryUrl.length]}
            alt="Food"
            onError={(e) => {
                // eslint-disable-next-line no-console
                console.error("Preview image failed to load:", e.currentTarget.src);
            }}
        />
        {/* <img src={cloudinaryUrl} alt="Food" /> */}
    </>
  )
}

