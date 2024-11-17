import Image from "next/image";
import appleImage from "../../../public/assets/images/apple.svg";
import searchImage from "../../../public/assets/images/search.svg";
import bagImage from "../../../public/assets/images/bag.svg";
import { navLists } from "@/lib/constants";

export default function Navbar() {
    return (
        <header className=" container w-full py-5">
            <nav className="flex w-full screen-max-width">
                <Image src={appleImage} alt="apple" className=" w-4 h-5" />

                <ul className="flex flex-1 justify-center max-sm:hidden">
                    {navLists.map((link) => (
                        <li
                            className="px-5 text-sm cursor-pointer text-muted-foreground hover:text-inherit transition-all"
                            key={link}
                        >
                            {link}
                        </li>
                    ))}
                </ul>

                <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
                    <Image src={searchImage} alt="search" className=" size-5" />
                    <Image src={bagImage} alt="bag" className=" size-5" />
                </div>
            </nav>
        </header>
    );
}
