import { FC } from "react";
import { SlideItemProps } from "./slideItemInterface";

export const SlideItem: FC<SlideItemProps> = ({ title, description, image, button, color, onClick, index }) => {
    return (
        <div className="item" onClick={onClick}>
            <div className={`w-full rounded-[20px] flex justify-evenly items-center gap-6 flex-col backdrop-filter backdrop-blur-lg bg-opacity-30 ref ${'bg'+color}`}>
                <img src={image} alt="icon" className='w-24' />
                <h1 className='text-4xl text-white'>{title}</h1>
            </div>
            <div className="content">
                <div className={`name text-5xl font-bold my-3 `}>
                    {index === 0 ? (
                        <>
                            <span className="text-custom-red">H</span>
                            <span className="text-custom-blue">o</span>
                            <span className="text-custom-green">m</span>
                            <span className="text-custom-yellow">e</span>
                        </>
                    ) : (
                        title
                    )}
                </div>
                <div className="des text-lg text-white my-6">{description}</div>
                <a href={button.href} className={`flex justify-center items-center w-auto  font-semibold py-2 px-6 mb-3 rounded-full hover:bg-gray-200  ${index === 0 ? 'bg-white  text-black' : 'bg' + color}`}>
                    {button.label}
                </a>
            </div>
        </div >
    );
};