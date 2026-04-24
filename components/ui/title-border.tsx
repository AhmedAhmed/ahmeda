import { cn } from "@/lib/utils";

export default function TitleBorder({ title, className }: { title: string; className?: string }) {
    return (
        <div className="flex w-full items-center gap-2">
            <h1 className={cn(`text-sm font-bold uppercase`, className)}>{title}</h1>
            <span className="flex-1 h-px bg-foreground/10"></span>
        </div>
    );
}

