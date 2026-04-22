"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge } from "../ui/badge";

export interface MenuItemProps {
    label: string;
    href: string;
    soon?: boolean;
}

function MenuItem({
    label,
    href,
    soon,
}: MenuItemProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    const onClick = (evt: any) => {
        if (soon) {
           evt.preventDefault();
        }
    }

    return (
        <li className="flex gap-2">
            <Link href={href ? href : "/"} onClick={onClick} aria-disabled={soon} className={cn(`flex gap-2 text-sm uppercase hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-lg px-2.5 py-1`, {
                "bg-emerald-700 hover:bg-emerald-800 text-white dark:bg-emerald-700 dark:hover:bg-emerald-600 dark:text-white": isActive,
                "hover:bg-neutral-50 hover:dark:bg-neutral-950": soon
            })}>
                <span className={cn({
                    "text-neutral-500": soon
                })}>{label}</span>
                {soon && <Badge variant="destructive">Coming Soon</Badge>}
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
