export interface SlideItemProps {
    index: number,
    activeIndex: number,
    title: string;
    description: string;
    image: string;
    button: {
        label: string;
        href: string;
    };
    color: string,
    onClick: () => void;
}