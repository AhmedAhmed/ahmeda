"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface MenuItemProps {
    label: string;
    href: string;
}

function MenuItem({
    label,
    href,
}: MenuItemProps) {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <li className="flex gap-2">
            <Link href={href ? href : "/"} className={cn(`text-sm uppercase hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-lg px-2.5 py-1`, {
                "bg-emerald-700 hover:bg-emerald-800 text-white dark:bg-emerald-700 dark:hover:bg-emerald-600 dark:text-white": isActive,
            })}>
                {label}
            </Link>
        </li>
    );
}

interface MenuProps {
    menu: MenuItemProps[];
}

export default function Menu({ menu }: MenuProps) {
    return (
        <ul className="flex gap-2.5 my-5">
            {menu.map((item, index) => (
                <MenuItem key={index} {...item} />
            ))}
        </ul>
    );
}
