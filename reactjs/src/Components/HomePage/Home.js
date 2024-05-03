import About from "./About.js";
import Banner from "./Banner.js";
import ContactUs from "./ContactUs.js";
import Players from "./Player.js";
import UpcomingEvent from "./UpcomingEvents.js";
import Header from '../Header.js';
import Footer from '../Footer.js';

export default function Home() {
    return <>
        <Header />
        <div className="d-flex flex-column align-items-center gap-4">
            <Banner />
            <div id="sectionLine"></div>
            <Players />
            <div id="sectionLine"></div>
            <UpcomingEvent />
            <div id="sectionLine"></div>
            <About />
            <div id="sectionLine"></div>
            <ContactUs />
            <div id="sectionLine"></div>
        </div>
        <Footer />
    </>
}

// https://cricket.sportmonks.com/api/v2.0/players?api_token=PinCoryvGKxL0aaJdX8Z0zPKRxWYF1okRObrLL0dEO1XiaHSy9tMVgv2Dgh5