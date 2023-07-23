import Gallery from "../Gallery/Gallery";
import Header from "../Header/Header";
import Research from "../Research/Research";

const Home = () => {
    return (
        <div>
            <Header/>
            <Gallery/> 
            <div className="w-2/3 m-auto">
            <Research/>
            </div>
        </div>
    );
};

export default Home;