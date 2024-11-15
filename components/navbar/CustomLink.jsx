"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({ path, children }) => {
    const pathname = usePathname();
    const active = pathname.includes(path);

    return (
        <Link className={`${active ? "text-lime-500 font-bold" : ""}`} href={path}>{children}</Link>
    );
};

export default CustomLink;