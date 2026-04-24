import { ArrowUpRightIcon } from "lucide-react";
import { Geist_Mono } from "next/font/google";
import Link from "next/link";

const geist_mono = Geist_Mono({ subsets: ["latin"] });

export default async function RepoList(){
    const getRepos = async () => {
        const response = await fetch("https://api.github.com/users/ahmedahmed/repos");
        const data = await response.json();
        return data;
    }

    const repos = await getRepos();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {repos.map((repo: any, index: number) => (
                <Link key={repo.id} href={repo.html_url} target="_blank" className={`${geist_mono.className} cursor-pointer group/card flex flex-col hover:bg-emerald-50/50 hover:dark:bg-emerald-950/50 border border-neutral-200 hover:border-emerald-300 dark:border-neutral-900 dark:hover:border-emerald-700 p-2.5`}>
                    <div className="flex flex-col gap-2.5">
                        <div className="flex justify-between">
                            <span className="text-xs text-neutral-500 group-hover/card:text-emerald-700 dark:group-hover/card:text-emerald-300">{(index + 1).toString().padStart(2, "0")}</span>
                            <ArrowUpRightIcon className="h-4 w-4 text-neutral-500 hidden group-hover/card:flex group-hover/card:text-emerald-700 dark:group-hover/card:text-emerald-300" />
                        </div>
                        <h2 className="text-md group-hover/card:text-emerald-700 dark:group-hover/card:text-emerald-300 font-bold uppercase">{repo.name}</h2>
                        <p className="text-sm text-neutral-500 group-hover/card:text-emerald-700 dark:group-hover/card:text-emerald-300">
                            {repo.description}
                        </p>
                        <span className="text-xs text-amber-500 group-hover/card:text-emerald-700 dark:group-hover/card:text-emerald-300 uppercase">{repo.language}</span>
                    </div>
                </Link>
            ))}
        </div>
    );
}
