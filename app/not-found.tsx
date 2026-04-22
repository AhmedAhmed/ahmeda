"use client";
import { Particles } from "@/components/particles";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();
    const goBack = () => {
        router.back();
    };
    return (
        <div className="flex flex-col flex-1 items-center justify-center">
            <Particles />
            <div className="flex flex-col items-center gap-8 relative top-40">
                <h1 className="text-4xl">We couldn't find the page you were looking for.</h1>
                <Button onClick={goBack} className="cursor-pointer">Head Back</Button>
            </div>
        </div>
    );
}
