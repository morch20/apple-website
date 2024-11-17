import { type ClassValue, clsx } from "clsx";
import { MutableRefObject } from "react";
import { Group, Object3DEventMap } from "three";
import { twMerge } from "tailwind-merge";

/**
 * Merges multiple class names and returns a single combined class name.
 *
 * @param {ClassValue[]} inputs - An array of class names to merge.
 * @return {string} The combined class name.
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Pauses the execution of the code for a specified amount of time.
 *
 * @param {number} [delay=200] - The amount of time (in milliseconds) to pause the execution. Defaults to 200 milliseconds.
 * @return {Promise<void>} A promise that resolves after the specified delay.
 */
export function pause(delay = 200) {
    return new Promise((res) => {
        setTimeout(res, delay);
    });
}

export const animateWithGsapTimeline = (
    timeline: gsap.core.Timeline,
    rotationRef: MutableRefObject<Group<Object3DEventMap>>,
    rotationState: number,
    firstTarget: string,
    secondTarget: string,
    animationProps: object
) => {
    timeline.to(rotationRef.current.rotation, {
        y: rotationState,
        duration: 1,
        ease: "power2.inOut",
    });

    timeline.to(
        firstTarget,
        {
            ...animationProps,
            ease: "power2.inOut",
        },
        "<"
    );

    timeline.to(
        secondTarget,
        {
            ...animationProps,
            ease: "power2.inOut",
        },
        "<"
    );
};
