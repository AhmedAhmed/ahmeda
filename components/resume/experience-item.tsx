import { GlobeIcon } from "lucide-react";
import { Geist_Mono } from "next/font/google";

const geist_mono = Geist_Mono({ subsets: ["latin"] });

interface ExperienceItemProps {
    title: string;
    description: string;
    url?: string;
    location: string;
    date: string;
    role: string;
    type: string;
    bullets: string[];
}

const ExperienceItem = ({ title, description, location, date, role, type, bullets, url}: ExperienceItemProps) => {
    return (
        <div className="flex flex-col gap-2.5">
            <div className="flex justify-between">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2">
                    <h2 className="text-md font-bold uppercase">{title}</h2>
                    <span className={`${geist_mono.className} text-balance text-xs text-neutral-600 dark:text-neutral-400 uppercase`}>{role}</span>
                    <span className={`${geist_mono.className} text-xs text-amber-600 dark:text-amber-400 uppercase`}>{type}</span>
                    {url && (
                        <a href={url} target="_blank" rel="noreferrer" className="flex hover:underline items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 uppercase">
                            <GlobeIcon className="inline-block h-3 w-3" />
                            <span>View Site</span>
                        </a>
                    )}
                </div>
                <div className="flex flex-col lg:flex-row items-end lg:items-center gap-2">
                    <h3 className="text-sm text-neutral-600 dark:text-neutral-400">{location}</h3>
                    <span className="text-right text-sm font-bold text-balance">{date}</span>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-sm text-neutral-800 dark:text-neutral-300">{description}</p>
                <ul className="ml-5 text-sm list-disc list-inside">
                    {bullets.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ExperienceItem;
