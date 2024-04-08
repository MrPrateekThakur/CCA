import Player from "../Players/Player.js";
import Banner from "./Banner.js";

export default function Home() {
    return <>
        <div className="container mt-3">
            <Banner />
            <hr id="sectionLine" />
            <Player/>
        </div>
    </>
}
