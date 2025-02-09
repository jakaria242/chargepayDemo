import { Outlet } from "react-router-dom";
// import Navbar from "../component/Navbar";
// import Footer from "../component/Footer";

const Main = () => {
  return (
    <main className="">
      {/* <Navbar /> */}
      <div className={``}>
        <Outlet />
      </div>
      {/* <Footer/> */}
    </main>
  );
};

export default Main;
