import { Calistoga } from "next/font/google";
import Menu, { MenuItemProps } from "../navigation/menu";
import { ModeToggle } from "../ui/mode-toggle";
import GridOutlines from "../grid-outlines";
import Link from "next/link";

const calistoga = Calistoga({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
});

export const menuItems: MenuItemProps[] = [
    { label: "readme", href: "/" },
    { label: "Work", href: "/work" },
];

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <GridOutlines />
            <div className="flex flex-col flex-1">
                <div className="flex sticky top-0 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-sm justify-center border-b border-black/[0.035] dark:border-white/[0.035] z-10">
                    <div className="flex self-center items-center justify-between w-full max-w-7xl bg-white dark:bg-neutral-950/50 px-6">
                        <div className="flex items-center gap-10">
                            <Link href="/" className="flex items-center gap-10">
                                <div className="flex gap-2.5 items-center my-2.5 h-8">
                                    <span className={`${calistoga.className} text-xl`}>Ahmed</span>
                                    <span className={`${calistoga.className} hidden lg:flex text-xl`}>Ahmed</span>
                                </div>
                            </Link>
                        </div>
                        <div className="flex items-center gap-10">
                            <Menu menu={menuItems} />
                            <div className="flex gap-2 py-5">
                                <ModeToggle />
                            </div>
                        </div>
                    </div>
                </div>
                <main className="flex flex-col flex-1 w-full">
                    {children}
                </main>
            </div>
        </>
    )
}
