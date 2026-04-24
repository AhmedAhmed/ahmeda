import ExperienceItem from "@/components/resume/experience-item";
import { ExperienceItems } from "@/components/resume/constants";
import { Geist_Mono } from "next/font/google";
import { MapPinIcon } from "lucide-react";
import TitleBorder from "@/components/ui/title-border";

const geist_mono = Geist_Mono({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className="flex flex-1 w-full flex-col items-center p-5">
            <div className="flex flex-col lg:flex-row w-full max-w-7xl gap-5 px-6">
                <div className="flex flex-col self-center lg:self-start lg:sticky lg:top-[93px] bg-neutral-200 dark:bg-neutral-900 rounded-full w-[150px] h-[150px]">
                    <img
                        src="https://urjgzvscdikmyccb.public.blob.vercel-storage.com/ahmed-mini-3270803f-3c79-4ff4-ad00-69cdeea6a6a5.png"
                        alt="Profile Picture"
                        className="rounded-full"
                    />
                    <div className="hidden lg:flex text-sm text-amber-600 dark:text-neutral-400 items-center gap-2 mt-5">
                        <MapPinIcon className="h-4 w-4" />
                        <span className="text-sm">Toronto, Ontario</span>
                    </div>
                </div>
                <div className="flex flex-col flex-1 gap-5">
                    <div className="flex flex-col flex-1 gap-5">
                        <TitleBorder title="README" className={geist_mono.className} />
                        <div className="flex flex-col w-full gap-2 text-sm">
                            <p>
                                👋 Hey, I'm Ahmed. I build fast, accessible web and mobile experiences.
                                I'm a frontend software engineer with 8+ years of experience designing, developing, and maintaining
                                large-scale Single Page Applications and client-facing portals. At Prizmsol, I've led the design and
                                development of a suite of products that help organizations manage their data and workflows more effectively.
                            </p>
                            <p>
                                I specialize in React, Next.js, and TypeScript, with a strong foundation in modern web technologies like
                                HTML5, CSS3, and JavaScript, along with experience in jQuery, Bootstrap, Backbone.js, and REST API integrations
                                (JSON/XML). I'm comfortable owning projects end-to-end—from architecture and technical documentation to risk
                                assessment and QA/UAT.
                            </p>
                            <p>
                                I'm passionate about building intuitive, user-friendly interfaces that are accessible to everyone, with a strong
                                focus on WCAG 2.x AA, AODA, and WAI-ARIA standards across web and mobile platforms.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 gap-5">
                        <TitleBorder title="Experience" className={geist_mono.className} />
                        <div className="flex flex-col w-full gap-10">
                            {ExperienceItems.map((item, index) => (
                                <ExperienceItem key={index} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
