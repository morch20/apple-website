import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import VideoCarousel from "@/components/VideoCarousel";
import Highlights from "@/components/Highlights";
import Model from "@/components/Model";
import { Button } from "@/components/ui/button";
import watchImage from "../../public/assets/images/watch.svg";
import rightImage from "../../public/assets/images/right.svg";

export default function Home() {
    return (
        <>
            <Hero>
                <section className=" container w-full h-[calc(100vh-60px)] relative">
                    <div className="h-5/6 w-full flex items-center justify-center flex-col">
                        <p
                            id="hero"
                            className="text-center font-semibold text-3xl text-muted-foreground opacity-0 max-md:mb-10"
                        >
                            iPhone 15 Pro
                        </p>
                        <div className="md:w-10/12 w-9/12">
                            <video
                                className="pointer-events-none hidden md:block"
                                autoPlay
                                muted
                                playsInline
                                key="/assets/videos/hero.mp4"
                            >
                                <source
                                    src="/assets/videos/hero.mp4"
                                    type="video/mp4"
                                />
                            </video>
                            <video
                                className="pointer-events-none md:hidden"
                                autoPlay
                                muted
                                playsInline
                                key="/assets/videos/smallHero.mp4"
                            >
                                <source
                                    src="/assets/videos/smallHero.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                    </div>
                    <div
                        id="cta"
                        className="flex flex-col items-center opacity-0 translate-y-20"
                    >
                        <Button className="my-5" variant="default">
                            <Link href="#highlights">Buy</Link>
                        </Button>
                        <p className="font-normal text-xl">
                            From $199/month or $999
                        </p>
                    </div>
                </section>
            </Hero>
            <Highlights>
                <section
                    id="highlights"
                    className=" w-full overflow-hidden h-full sm:py-32 py-20 bg-muted"
                >
                    <div>
                        <div className="mb-12 w-full md:flex items-end justify-between container">
                            <h1 id="title" className="section-heading">
                                Get the highlights.
                            </h1>

                            <div className="flex flex-wrap items-end gap-5">
                                <Button
                                    id="link"
                                    variant="link"
                                    className="text-lg opacity-0 translate-y-20"
                                >
                                    Watch the film
                                    <Image
                                        src={watchImage}
                                        alt="watch"
                                        className="ml-2"
                                    />
                                </Button>
                                <Button
                                    id="link"
                                    variant="link"
                                    className="text-lg opacity-0 translate-y-20"
                                >
                                    Watch the event
                                    <Image
                                        src={rightImage}
                                        alt="right"
                                        className="ml-2"
                                    />
                                </Button>
                            </div>
                        </div>

                        <VideoCarousel />
                    </div>
                </section>
            </Highlights>
            <Model>
                <div className="scrim-max-width">
                    <h1 id="modelHeading" className="section-heading">
                        Take a closer look.
                    </h1>
                </div>
            </Model>
            {/* <div>Docs</div> */}
        </>
    );
}
