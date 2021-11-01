
import About from '../About/About';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import './Home.css';
import bannerImage from './images/img-1.jpg'



const bannerText = {
    color: "white",
    fontSize: "4em",
}
const Home = () => {
    return (
        <div class="">
            <div className="bannerDoc  ">
                <div className="container d-flex justify-content-start align-items-center h-100 ">

                    <div className="w-25">
                        <h1 style={bannerText}>WelcomeTo<span style={{ color: "#FFB6C1" }}>Tiouper.Com</span></h1>
                        <h3 > <span style={{ color: "#FFB6C1" }}>“Take only memories, leave only footprints”</span> <br /> ~Chief Seattle</h3>
                    </div>
                </div>
            </div>

            <div id="About" className="container my-5  ">
                <About></About>
            </div>
            <div id="Services" className="container my-5">
                <Services></Services>
            </div>
            <div className="mt-5">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;