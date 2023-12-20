import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
const HomeLayout = () => {
    return (
        <>
            <header className='fixed w-full flex justify-between items-center py-1 px-4 md:py-2 lg:px-20 bg-white text-zinc-950 '>
                <Navbar />
            </header>

            <Outlet />
        </>
    );
};
export default HomeLayout;
