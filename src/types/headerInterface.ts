import { ReactNode } from "react";

export interface HeaderProps {
    navLinks: { label: string; href: string }[];
    signupButton: {
        label: string;
        href: string;
    };
    children?: ReactNode;
}