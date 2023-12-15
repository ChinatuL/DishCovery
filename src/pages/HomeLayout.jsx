import { Outlet } from "react-router-dom"
const HomeLayout = () => {
  return (
    <>
      <h1>Home</h1>
          <Outlet />
      </>
  );
}
export default HomeLayout