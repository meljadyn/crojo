import {ThemeToggle} from "@/components/ui/theme-toggle.tsx";

function NavBar() {
    return (
        <div className="fixed w-screen top-0 bg-background h-12 text-cyan-950 flex flex-row border border-border">
            <ThemeToggle />
        </div>
    )
}

export default NavBar