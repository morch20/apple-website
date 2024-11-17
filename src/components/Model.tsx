/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import ModelView from "./ModelView";
import { models, sizes } from "@/lib/constants";
import { animateWithGsapTimeline } from "@/lib/utils";

export default function Model({ children }: { children: React.ReactNode }) {
    const [isMounted, setIsMounted] = useState(false);
    const [size, setSize] = useState("small");
    const [model, setModel] = useState({
        title: "iPhone 15 Pro in Natural Titanium",
        color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
        // img: yellowImg,
        img: "/assets/images/yellow.jpg",
    });

    // camera control for the model view
    const cameraControlSmall = useRef();
    const cameraControlLarge = useRef();

    // model
    const small = useRef(new THREE.Group());
    const large = useRef(new THREE.Group());

    // rotation
    const [smallRotation, setSmallRotation] = useState(0);
    const [largeRotation, setLargeRotation] = useState(0);

    const tl = gsap.timeline();

    useEffect(() => {
        if (size === "large") {
            animateWithGsapTimeline(
                tl,
                small,
                smallRotation,
                "#view1",
                "#view2",
                {
                    transform: "translateX(-100%)",
                    duration: 2,
                }
            );
        }

        if (size === "small") {
            animateWithGsapTimeline(
                tl,
                large,
                largeRotation,
                "#view2",
                "#view1",
                {
                    transform: "translateX(0)",
                    duration: 2,
                }
            );
        }
    }, [size]);

    useGSAP(() => {
        gsap.to("#modelHeading", { y: 0, opacity: 1 });
    }, []);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <section className=" common-padding">
            {children}{" "}
            <div className="flex flex-col items-center mt-5">
                <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
                    <ModelView
                        index={1}
                        groupRef={small}
                        gsapType="view1"
                        controlRef={cameraControlSmall}
                        setRotationState={setSmallRotation}
                        item={model}
                        size={size}
                    />

                    <ModelView
                        index={2}
                        groupRef={large}
                        gsapType="view2"
                        controlRef={cameraControlLarge}
                        setRotationState={setLargeRotation}
                        item={model}
                        size={size}
                    />

                    {isMounted && (
                        <Canvas
                            className="w-full h-full"
                            style={{
                                position: "absolute",
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                overflow: "hidden",
                            }}
                            // className="w-full h-full fixed top-0 left-0 overflow-hidden"
                            eventSource={document.getElementById("root")!}
                        >
                            <View.Port />
                        </Canvas>
                    )}
                </div>
                <div className="mx-auto w-full">
                    <p className="text-sm font-light text-center mb-5">
                        {model.title}
                    </p>
                    <div className="flex justify-center items-center">
                        <ul className="color-container bg-zinc-900">
                            {models.map((item) => (
                                <li key={`${item.id}model`} className="w-fit">
                                    <button
                                        aria-label="Select Color"
                                        type="button"
                                        className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                                        style={{
                                            backgroundColor: item.color[0],
                                        }}
                                        onClick={() => setModel(item)}
                                    />
                                </li>
                            ))}
                        </ul>

                        <button
                            type="button"
                            className="flex items-center justify-center p-1 rounded-full bg-zinc-900 backdrop-blur ml-3 gap-1"
                        >
                            {sizes.map(({ label, value }) => (
                                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                                <span
                                    key={label}
                                    className="size-btn"
                                    style={{
                                        backgroundColor:
                                            size === value
                                                ? "white"
                                                : "transparent",
                                        color:
                                            size === value ? "black" : "white",
                                    }}
                                    onClick={() => setSize(value)}
                                >
                                    {label}
                                </span>
                            ))}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
