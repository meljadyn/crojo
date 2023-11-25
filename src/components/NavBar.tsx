import ThemeToggle from "./ThemeToggle.tsx";

function NavBar() {
    return (
        <div className="w-screen mt-0 bg-white h-12 text-cyan-950">
            <ThemeToggle />
        </div>
    )
}

export default NavBar