import { FC } from 'react';
import event from "../../assets/Layer_1.png";
import left from "../../assets/angle-small-left (1).png";
import rigth from "../../assets/angle-small-right.png";
import './hero.css';
import { Item } from './Item';

const Hero: FC = () => {

    const enum BgColor {
        red = 'bg-custom-red',
        green = 'bg-custom-green',
        blue = 'bg-custom-blue',
        yellow = 'bg-custom-yellow',
    }

    const listItems = [
        {
            logo: event,
            title: "Event",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
            bgColor: BgColor.red,
            button: {
                label: "See More",
                href: "/event"
            }
        }
    ];

    return (
        <section className="flex flex-col h-full w-screen md:h-screen">
            <div className="overflow-hidden w-full relative h-screen flex justify-center">
                <div className="slide">
                    {/* Main Item */}
                    <div className="item">
                        <div className="w-full rounded-[20px] flex justify-evenly items-center gap-6 flex-col bg-red-500 backdrop-filter backdrop-blur-lg bg-opacity-30 ref">
                            <img src={event} alt="icon" className="w-24" />
                            <h1 className="text-4xl text-gray-400">Events</h1>
                        </div>

                        <div className="content">
                            <div className="name text-5xl font-bold my-3">
                                <span className="text-custom-red">H</span>
                                <span className="text-custom-blue">o</span>
                                <span className="text-custom-green">m</span>
                                <span className="text-custom-yellow">e</span>
                            </div>
                            <div className="des text-lg text-white">
                                The most secure marketplace for buying and selling unique crypto assets.
                            </div>
                            <a
                                href="#"
                                className="flex justify-center items-center w-auto bg-white text-gray-900 font-semibold py-2 px-6 mb-3 rounded-full hover:bg-gray-200"
                            >
                                See MORE
                            </a>
                        </div>
                    </div>

                    {/* List Items */}
                    {listItems.map((item, index) => (
                        <Item
                            key={index}
                            image={item.logo}
                            title={item.title}
                            description={item.description}
                            button={item.button}
                            bgColor={item.bgColor}
                        />
                    ))}
                </div>

                <div className="gap-5 absolute bottom-4 flex justify-center items-center md:hidden py-2">
                    <span className="prev btn">
                        <img src={left} alt="" />
                    </span>
                    <span className="next btn">
                        <img src={rigth} alt="" />
                    </span>
                </div>
            </div>

            {/* Cards */}
            <div className="relative flex justify-center items-center md:items-end flex-col sm:flex-row gap-6 px-6">
                {/* Card Item */}
                <div className="bg-custom-green h-32 flex justify-evenly md:justify-start items-center flex-col py-3 text-2xl p-6">
                    <h1>200</h1>
                    <h1>Number</h1>
                </div>
                {/* Card Item */}
                <div className="bg-custom-blue h-32 flex justify-evenly md:justify-start items-center flex-col py-3 text-2xl p-6">
                    <h1>200</h1>
                    <h1>Number</h1>
                </div>
                {/* Card Item */}
                <div className="bg-custom-red h-32 flex justify-evenly md:justify-start items-center flex-col py-3 text-2xl p-6">
                    <h1>200</h1>
                    <h1>Number</h1>
                </div>
            </div>
        </section>
    );
};

export default Hero;
