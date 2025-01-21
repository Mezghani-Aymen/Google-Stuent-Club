import { FC } from "react";
import logo from "../assets/logo.png";

const Loading: FC = () => {

    return (
        <section className="relative flex h-screen justify-center items-center backdrop-filter backdrop-blur-lg bg-gray-600 bg-opacity-20">
            <img src={logo} className="" />
        </section>
    );
};

export default Loading;
