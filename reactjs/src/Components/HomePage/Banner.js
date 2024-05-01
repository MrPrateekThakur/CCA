import { useEffect, useState } from 'react';
import './homePage.css';

export default function Banner() {

    // return <>
    //     <div id="banner">
    //         <div id="headingLine">
    //             <span id="todays-match" >Todays Match</span>
    //             <div id="sectionLine"></div>
    //         </div>
    //         <img src="assets/banner.png" alt="bannerImage" id="bannerImage" />
    //         <div id="headingLine">
    //             <span id="highlights-1">Highlights</span>
    //             <div id="sectionLine"></div>
    //         </div>
    //         <div className='card-group mt-3 gap-5'>
    //             <div className="card text-white col-sm-4" id='highlightCard'>
    //                 <ReactPlayer url='https://youtu.be/-2O7meAtv-U?si=jx9GGIDTk0aArwBxj' volume={10} className="react-player" width='100%' controls={true} />
    //             </div>
    //             <div className="card text-white col-sm-4" id='highlightCard'>
    //                 <ReactPlayer url='https://youtu.be/-2O7meAtv-U?si=jx9GGIDTk0aArwBxj' muted volume={0.8} className="react-player" width='100%' controls={true} />
    //             </div>
    //             <div className="card text-white col-sm-4" id='highlightCard'>
    //                 <ReactPlayer url='https://youtu.be/-2O7meAtv-U?si=jx9GGIDTk0aArwBxj' muted volume={0.8} className="react-player" width='100%' controls={true} />
    //             </div>
    //             <div className="card text-white col-sm-4" id='highlightCard'>
    //                 <ReactPlayer url='https://youtu.be/-2O7meAtv-U?si=jx9GGIDTk0aArwBxj' muted volume={0.8} className="react-player" width='100%' controls={true} />
    //             </div>
    //         </div>
    //     </div>
    // </>
    // State to manage slider index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Define slider items
    const sliderItems = [
        {
            imgSrc: "https://media.istockphoto.com/id/1733455091/photo/closeup-shot-of-a-young-indian-woman-celebrating-the-indian-cricket-teams-victory-watching-a.jpg?s=612x612&w=0&k=20&c=8gDbXjYzXicYVZsZUUPcNm0OtL78I_fJPCghPC5Ma9E=",
            author: "LUNDEV",
            title: "DESIGN SLIDER",
            topic: "ANIMAL",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
        },
        {
            imgSrc: "https://spin.axiomthemes.com/wp-content/uploads/2023/09/post12-copyright.jpg",
            author: "LUNDEV",
            title: "DESIGN SLIDER",
            topic: "ANIMAL",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
        },
        {
            imgSrc: "https://spin.axiomthemes.com/wp-content/uploads/2023/09/post2-copyright-1536x1178.jpg",
            author: "LUNDEV",
            title: "DESIGN SLIDER",
            topic: "ANIMAL",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
        },
        {
            imgSrc: "https://spin.axiomthemes.com/wp-content/uploads/2023/09/post8-copyright-1290x725.jpg",
            author: "LUNDEV",
            title: "DESIGN SLIDER",
            topic: "ANIMAL",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
        }
    ];

    // Function to handle next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
    };

    // Function to handle previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderItems.length) % sliderItems.length);
    };

    // Effect for automatic sliding
    useEffect(() => {
        const autoSlideInterval = setInterval(nextSlide, 7000);

        // Clear interval on component unmount
        return () => clearInterval(autoSlideInterval);
    }, []);

    return <>
        <div className="carousel">
            <div className="list">
                {sliderItems.map((item, index) => (
                    <div className={index === currentIndex ? "item active" : "item"} key={index}>
                        <img src={sliderItems[currentIndex].imgSrc} alt={`Slide ${index}`} />
                        <div className="content">
                            <div className="author">{item.author}</div>
                            <div className="title">{item.title}</div>
                            <div className="topic">{item.topic}</div>
                            <div className="des">{item.description}</div>
                            <div className="buttons">
                                <button className='text-dark'>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="thumbnail">
                {sliderItems.map((item, index) => (
                    <div className="item" key={index}>
                        <img src={item.imgSrc} alt={`Thumbnail ${index}`} />
                        <div className="content">
                            <div className="title">Name Slider</div>
                            <div className="description">Description</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="arrows">
                <button id="prev" onClick={prevSlide}>&#8592;</button>
                <button id="next" onClick={nextSlide}>&#8594;</button>
            </div>
            <div className="time"></div>
        </div>
    </>
}