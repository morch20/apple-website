"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Highlights({
    children,
}: {
    children: React.ReactNode;
}) {
    useGSAP(() => {
        gsap.to("#title", { opacity: 1, y: 0 });
        gsap.to("#link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
    }, []);

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <div className="relative">{children}</div>;
}
