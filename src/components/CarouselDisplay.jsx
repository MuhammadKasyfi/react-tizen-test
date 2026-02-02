import React, { useCallback, useState } from "react";
import Carousel from "./carousel/Carousel.jsx";
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

export default function CarouselDisplay() {
    const [activeIndex, setActiveIndex] = useState(0);

    const food1 = "https://res.cloudinary.com/ddbnfzbgl/image/upload/set1/Food1";
    const food2 = "https://res.cloudinary.com/ddbnfzbgl/image/upload/set2/Food2";
    const food3 = "https://res.cloudinary.com/ddbnfzbgl/image/upload/set3/Food3";
    const food4 = "https://res.cloudinary.com/ddbnfzbgl/image/upload/set4/Food4";

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
        console.log("Current image is at url:", cloudinaryUrl[index % cloudinaryUrl.length]);
    }, []);
    

  return (
    <>
        <div className="MenuContainer">
            <h1 className="app-heading">
                Kaunter A
            </h1>
            <div className="carousel-wrapper CarouselWrapper">
                <h1 className="app-heading">
                {sets[activeIndex % sets.length]}
                </h1>
                <Carousel images={cloudinaryUrl} onIndexChange={handleIndexChange} />
            </div>
            <div className="MenuNoteContainer">
                <div className="NoteBox FontBold">
                    Test
                </div>
            </div>
        </div>
    </>
  )
}

