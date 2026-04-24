import { Geist_Mono } from "next/font/google";
import RepoList from "./repo-list";
import TitleBorder from "@/components/ui/title-border";

const geist_mono = Geist_Mono({ subsets: ["latin"] })

export default function WorkPage() {
    return (
        <div className="flex flex-col flex-1 w-full items-center my-5">
            <div className="flex flex-col w-full max-w-7xl px-4 gap-5">
                <TitleBorder title="Github" className={geist_mono.className} />
                <RepoList />
            </div>
        </div>
    );
}

