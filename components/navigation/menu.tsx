"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge } from "../ui/badge";

export interface MenuItemProps {
    label: string;
    href: string;
    soon?: boolean;
    className?: string;
}

function MenuItem({
    label,
    href,
    soon,
    className
}: MenuItemProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    const onClick = (evt: any) => {
        if (soon) {
            evt.preventDefault();
        }
    }

    return (
        <li className={cn("flex gap-2", className)}>
            <Link href={href ? href : "/"} onClick={onClick} aria-disabled={soon} className={cn(`flex w-full gap-2 text-sm uppercase hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-lg px-2.5 py-1`, {
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
    direction?: "row" | "column";
}

export default function Menu({ menu, direction = "row" }: MenuProps) {
    return (
        <div className="flex px-5">
            <ul className={cn("flex gap-2.5 my-5", {
                "flex-row": direction === "row",
                "flex-col w-full": direction === "column"
            })}>
                {menu.map((item, index) => (
                    <MenuItem className={cn({
                        "w-full": direction === "column"
                    })} key={index} {...item} />
                ))}
            </ul>
        </div>
    );
}
