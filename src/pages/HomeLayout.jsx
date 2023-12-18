import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
const HomeLayout = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            
            <Outlet />
        </>
    );
};
export default HomeLayout;
