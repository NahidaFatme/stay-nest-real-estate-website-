import Banner from "./Banner";
import Footer from "./Footer";
import Login from "./Login";
import { useEffect } from "react";
const Home = () => {
    useEffect(() => {
        document.title = "Home";
    }, []);
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;