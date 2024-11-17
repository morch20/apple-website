"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";
import { hightlightsSlides } from "@/lib/constants";
import Play from "./ui/Play";
import { cn } from "@/lib/utils";

// gsap.registerPlugin(ScrollTrigger);

export default function VideoCarousel() {
    const WAITING_TIME = 2;

    const [play, setPlay] = useState(true);
    const videoRefs = useRef<HTMLVideoElement[]>([]);
    const spanRefs = useRef<HTMLSpanElement[]>([]);
    const spanAnimationRef = useRef<gsap.core.Tween>();
    const [currentVideoId, setCurrentVideoId] = useState(
        hightlightsSlides[0].id
    );

    const handleVideoEnds = async () => {
        setCurrentVideoId((prev) => {
            const nextId = prev + 1;
            return nextId > hightlightsSlides[hightlightsSlides.length - 1].id
                ? hightlightsSlides[0].id
                : nextId;
        });
    };

    const handlePlay = () =>
        setPlay((prev) => {
            const next = !prev;
            if (next) {
                videoRefs.current[currentVideoId].play();
                spanAnimationRef.current?.play();
            } else {
                videoRefs.current[currentVideoId].pause();
                spanAnimationRef.current?.pause();
            }
            return next;
        });

    useGSAP(() => {
        const childSpan = spanRefs.current[currentVideoId];

        spanAnimationRef.current = gsap.to(childSpan, {
            duration: hightlightsSlides[currentVideoId - 1].videoDuration,
            width: "3rem",
            paused: true,
            onComplete: () => {
                spanRefs.current[currentVideoId].style.width = "0rem";
            },
        });

        gsap.to("#slider", {
            transform: `translateX(${-100 * (currentVideoId - 1)}%)`,
            duration: WAITING_TIME,
            ease: "power2.inOut", // show visualizer https://gsap.com/docs/v3/Eases
            onComplete: () => {
                if (play) {
                    videoRefs.current[currentVideoId].play();
                    spanAnimationRef.current?.play();
                }
            },
        });

        // gsap.to("#video", {
        //     scrollTrigger: {
        //         trigger: "#video",
        //     },
        //     onComplete: () => {
        //         if (play) {
        //             videoRefs.current[currentVideoId].play();
        //             spanAnimationRef.current?.play();
        //         }
        //     },
        // });
    }, [currentVideoId]);

    return (
        <>
            <div className="flex items-center">
                {hightlightsSlides.map((list) => (
                    <div
                        key={list.id}
                        id="slider"
                        className="sm:pr-20 pr-10 translate-x-[100%]"
                    >
                        <div className="video-carousel_container container">
                            <div className="w-full h-full flex items-center justify-center rounded-3xl overflow-hidden bg-black">
                                <video
                                    id="video"
                                    playsInline
                                    className="pointer-events-none"
                                    preload="auto"
                                    muted
                                    ref={(videoRef) => {
                                        // eslint-disable-next-line no-param-reassign
                                        videoRefs.current[list.id] = videoRef!;
                                    }}
                                    onEnded={handleVideoEnds}
                                >
                                    <source src={list.video} type="video/mp4" />
                                </video>
                            </div>

                            <div className="absolute top-12 left-12 z-10">
                                {list.textLists.map((text) => (
                                    <p
                                        key={`${text} textLists`}
                                        className="md:text-2xl sm:text-xl text-lg font-medium"
                                    >
                                        {text}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="relative flex items-center justify-center mt-10">
                <div className="flex items-center justify-center py-5 px-7 bg-zinc-900 backdrop-blur rounded-full">
                    {hightlightsSlides.map((spanVideo) => (
                        <span
                            key={`${spanVideo.id}span`}
                            className={cn({
                                "mx-2 w-3 h-3 bg-muted-foreground  transition-all ease-in rounded-full relative":
                                    true,
                                "scale-span": currentVideoId === spanVideo.id,
                            })}
                        >
                            <span
                                id="spanGrow"
                                style={{
                                    width: "0rem",
                                }}
                                className="absolute left-0 top-0 z-20 h-full bg-white rounded-full"
                                ref={(el) => {
                                    spanRefs.current[spanVideo.id] = el!;
                                }}
                            />
                        </span>
                    ))}
                </div>

                <button
                    type="button"
                    className=" ml-4 size-14 flex items-center justify-center rounded-full hover bg-zinc-900 backdrop-blur group"
                    onClick={handlePlay}
                >
                    <Play state={play} />
                </button>
            </div>
        </>
    );
}
