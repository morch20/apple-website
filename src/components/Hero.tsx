"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero({ children }: { children: React.ReactNode }) {
    useGSAP(() => {
        gsap.to("#hero", { opacity: 1, delay: 2 });
        gsap.to("#cta", { opacity: 1, y: -50, delay: 2 });
    }, []);

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
}
