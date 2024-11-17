import { cn } from "@/lib/utils";

export default function Play({ state }: { state: boolean }) {
    return (
        <div className="w-4/6 h-4/6 rounded-full cursor-pointer flex flex-col items-center justify-center">
            <div
                className={cn({
                    "w-[50%] h-[2px] bg-muted-foreground group-hover:bg-primary-foreground rounded-sm transition-all duration-300 origin-center rotate-90 -translate-x-[0.3rem] translate-y-[0.1rem]":
                        true,
                    "translate-y-[0.1rem]": !state,
                })}
            />
            <div
                className={cn({
                    "w-[50%] h-[2px] bg-muted-foreground group-hover:bg-primary-foreground  rounded-md transition-all duration-300 origin-center rotate-90 translate-x-[0.3rem] -translate-y-[0.05rem]":
                        true,
                    "rotate-[-30deg] translate-y-[0.22rem] translate-x-[0.15rem]":
                        !state,
                })}
            />
            <div
                className={cn({
                    "w-[50%] h-[2px] bg-muted-foreground group-hover:bg-primary-foreground rounded-md transition-all duration-300 origin-center rotate-90 translate-x-[0.3rem] -translate-y-[0.16rem]":
                        true,
                    "rotate-[30deg] translate-y-[-0.4rem] translate-x-[0.15rem]":
                        !state,
                })}
            />
        </div>
    );
}
