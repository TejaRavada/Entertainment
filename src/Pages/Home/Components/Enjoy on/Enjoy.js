import React from 'react'
import '../Enjoy on/Enjoy.css'
// import video from '../../../../Assets/ntfimages/vediok.mp4'
import Tv from '../../../../Assets/ntfimages/tv.png'
const Enjoy = () => {
    return (
        <>
            <div className="container_border">
                <div className="container">

                    <div className="enjoytext">
                        <h2 className='heading' >Enjoy on your TV</h2>
                        <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>

                    <div className="enjoyVideo">
                        <div className="enjoyImg">
                            <img src={Tv} alt="" />
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/asyMQ26ttuI?start=1196"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="YouTube video"
                            ></iframe>
                            {/* <video src={video} autoPlay loop muted></video> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Enjoy;