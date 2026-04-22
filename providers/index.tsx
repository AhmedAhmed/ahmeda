import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./theme-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <TooltipProvider>
            <ThemeProvider
                attribute="class"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
        </TooltipProvider>
    );
}