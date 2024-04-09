import Player from "../Players/Player.js";
import Banner from "./Banner.js";

export default function Home() {
    return <>
        <div className="text-center d-flex flex-column align-items-center gap-4">
            <Banner />
            <div id="container"></div>
            <Players />{/* Players - Pradumya */}
            <div id="container"></div>
            <h3>Teams</h3>
            {/* Team - Ankit */}
            <div id="container"></div>
            <UpcomingEvent />
            <div id="container"></div>
            <h3>About</h3>
            {/* About - Prasang */}
            <div id="container"></div>
            <h3>Contact Us</h3>
            {/* Contact Us - Prasang*/}
        </div>
  </>
}
