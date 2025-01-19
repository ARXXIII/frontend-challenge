import { Nav } from "./nav"

export const Header = () => {
    return (
        <header className="flex justify-between items-center 2xl:px-56 w-full bg-[#2196F3] shadow">
            <Nav />
        </header>
    )
}