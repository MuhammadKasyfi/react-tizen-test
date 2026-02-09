import React, { useCallback, useState, useEffect } from "react";
import Carousel from "./carousel/Carousel.jsx";
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import supabase from '../utils/supabase.js'
import { set } from "@cloudinary/url-gen/actions/variable";

export default function CarouselDisplay() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [menuList , setMenuList] = useState([])
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
    const { data, error } = await supabase.from("FoodMenu").select("*");
    if (error) {
        console.log("Error fetching menu:", error);
    } else {
        setMenuList(data);
    }
    }


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
        <div className="menu-container">
            <h1 className="app-heading">
                Kaunter A
            </h1>
            <div className="carousel-wrapper">
                <h1 className="app-heading">
                {sets[activeIndex % sets.length]}
                </h1>
                <Carousel images={cloudinaryUrl} onIndexChange={handleIndexChange} />
            </div>
            <div className="menu-note-container font-bold">
                <ul>
                    {menuList.map((menu) => (
                        <li key={menu.id}>
                            <p> {menu.set_name} </p>
                            <p> Set {menu.set_num} </p>
                        </li>  
                    ))}
                </ul>
            </div>
        </div>
    </>
  )
}

