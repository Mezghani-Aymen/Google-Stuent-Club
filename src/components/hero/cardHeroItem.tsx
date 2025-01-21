import { FC, useEffect, useState } from "react";
import { CardItemProps } from "./types/cardItemInterface";

export const CardHeroItem: FC<CardItemProps> = ({ number, title, color }) => {
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, [scroll])
    return (
        <div className={` ${scroll === 0 ? 'rounded-[0px]' : null} rounded-[20px] sm:rounded-t-[20px] md:rounded-t-[20px] w-40 h-40 px-6 py-0 text-2xl flex flex-col justify-evenly items-center sm:gap-6 sm:py-5 md:justify-start ${'bg' + color} backdrop-filter backdrop-blur-lg bg-opacity-30 `}>
            <span>{number}</span>
            <span>{title}</span>
        </div>
    );
};