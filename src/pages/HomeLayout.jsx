import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components";
const HomeLayout = () => {
    return (
        <>
            <header className='fixed z-20 w-full flex justify-between items-center py-1 px-4 md:py-2 lg:px-20 bg-white text-zinc-950 '>
                <Navbar />
            </header>
            <main className='py-16'>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};
export default HomeLayout;
