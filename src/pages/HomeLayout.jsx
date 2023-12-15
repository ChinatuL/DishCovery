import { Outlet } from "react-router-dom";
const HomeLayout = () => {
    return (
        <>
            <h1 className='text-3xl underline font-bold'>Home</h1>
            <Outlet />
        </>
    );
};
export default HomeLayout;
