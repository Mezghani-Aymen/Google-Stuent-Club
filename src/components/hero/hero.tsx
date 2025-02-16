import { FC, useRef, useState } from 'react';
import './hero.css';
import { SlideItem } from './slideItem';
import { CardHeroItem } from './cardHeroItem';

// Icons
import home from "../../assets/event.png";
import event from "../../assets/event.png";
import glory from "../../assets/glory.png";
import contact from "../../assets/contact.png";
import team from "../../assets/team.png";
import left from "../../assets/angle-small-left.png";
import rigth from "../../assets/angle-small-right.png";

const Hero: FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const slideRef = useRef<HTMLDivElement | null>(null);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % listSlideItems.length);
        if (slideRef.current) {
            const firstItem = slideRef.current.children[0];
            slideRef.current.appendChild(firstItem);
        }
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + listSlideItems.length) % listSlideItems.length);
        if (slideRef.current) {
            const lastItem = slideRef.current.children[slideRef.current.children.length - 1];
            slideRef.current.prepend(lastItem);
        }
    };

    const listSlideItems = [
        {
            logo: home,
            title: "Home",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
            color: "-custom-red",
            button: {
                label: "See More",
                href: "/event"
            }
        },
        {
            logo: event,
            title: "Event",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
            color: "-custom-red",
            button: {
                label: "See More",
                href: "/event"
            }
        },
        {
            logo: glory,
            title: "Glory",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
            color: "-custom-blue",
            button: {
                label: "See More",
                href: "/glory"
            }
        },
        {
            logo: team,
            title: "Team",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
            color: "-custom-yellow",
            button: {
                label: "See More",
                href: "/team"
            }
        },
        {
            logo: contact,
            title: "Contact",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
            color: "-custom-green",
            button: {
                label: "See More",
                href: "/contact"
            }
        }
    ];

    const listCardItems = [
        {
            number: 200,
            title: "Home",
            color: "-custom-red",
        },
        {
            number: 200,
            title: "Home",
            color: "-custom-blue",
        },
        {
            number: 200,
            title: "Home",
            color: "-custom-green",
        },
    ];

    const handleItemClick = (index: number) => {
        if (!(index === activeIndex)) {
            setActiveIndex(index);
            if (slideRef.current) {
                const firstItem = slideRef.current.children[0];
                slideRef.current.appendChild(firstItem);
            }
        }
    }
    return (
        <section className="flex flex-col h-full w-screen md:h-screen">
            <div className="overflow-hidden w-full relative h-screen flex justify-center">
                <div ref={slideRef} className="slide ">
                    {listSlideItems.map((item, index) => (
                        <SlideItem
                            key={index}
                            index={index}
                            activeIndex={activeIndex}
                            image={item.logo}
                            title={item.title}
                            description={item.description}
                            button={item.button}
                            color={item.color}
                            onClick={() => handleItemClick(index)}
                        />
                    ))}
                </div>

                <div className="gap-5 absolute bottom-4 flex justify-center items-center md:hidden py-2">
                    <button onClick={handlePrev} className="prev btn">
                        <img src={left} alt="Previous" />
                    </button>
                    <button onClick={handleNext} className="next btn">
                        <img src={rigth} alt="Next" />
                    </button>
                </div>
            </div>

            {/* Cards */}
            <div className="relative flex justify-center items-center md:items-end flex-col sm:flex-row gap-6 px-6 ">
                {/* Card Item */}
                {listCardItems.map((card, index) => (
                    <CardHeroItem
                        key={index}
                        number={card.number}
                        title={card.title}
                        color={card.color}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
