import Banner from "./Banner";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Login from "./Login";
const Home = () => {
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;