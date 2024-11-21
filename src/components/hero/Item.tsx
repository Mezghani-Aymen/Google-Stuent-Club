import { FC } from "react"
import { ItemProps } from "./itemInterface"

export const Item: FC<ItemProps> = ({ title, description, image, button, bgColor }) => {
    return (
        <div className="item">
            <div className={`w-full rounded-[20px] flex justify-evenly items-center gap-6 flex-col backdrop-filter backdrop-blur-lg bg-opacity-30 ref ${bgColor}`}>
                <img src={image} alt="icon" className='w-24' />
                <h1 className='text-4xl text-gray-400'>{title}</h1>
            </div>
            <div className="content">
                <div className="name">{title}</div>
                <div className="des">{description}</div>
                <a href={button.href} className="mt-2 py-1 px-4 bg-white text-black rounded hover:bg-gray-200">{button.label}</a>
            </div>
        </div >
    )
}

