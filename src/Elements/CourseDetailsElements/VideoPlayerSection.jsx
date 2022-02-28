/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useLayoutEffect, useRef} from 'react';
import styles from '../../Assets/css/CourseDetails/VideoPlayer.module.css';
import "./../../Assets/css/CourseDetails/yt-plyrio.css";
import { Player, BigPlayButton, ControlBar, ReplayControl, VolumeMenuButton, PlaybackRateMenuButton, ClosedCaptionButton } from 'video-react';
// import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import CustomTYPlayer from './CustomYTPlayer';
import { videoHtml, VideoPlyrConfig } from '../../Utilities/VideoConfig';

const VideoPlayerSection = () => {

    const [isScriptLoad, setIsScriptLoad] = useState(true);
    const [videoType, setVideoType] = useState('youtube');
    const [videoId, setVideoId]     = useState('hEqJJjKNpas');
    const videoParentRef = useRef(null)
    let video_id = null;

    const previousVideo = ()=>{
        video_id = 'hEqJJjKNpas';
        setVideoId(video_id);
        videoParentRef.current.innerHTML = videoHtml(video_id);
        VideoPlyrConfig({ video_id, type: videoType, title:"video_title" })
    }


    const nextVideo = ()=>{
        video_id = 'Z-hACIsjv4E';
        setVideoId(video_id);
        videoParentRef.current.innerHTML = videoHtml(video_id);
        VideoPlyrConfig({ video_id, type: videoType, title: "video_title" })
    }


    useLayoutEffect(()=>{

        loadScript('https://cdn.plyr.io/3.6.3/demo.js', () => {
            setIsScriptLoad(true);
        }); 

    })

    function loadScript(src, callback) {
        let
        existingScript = document.getElementById("playerScript");

        if (!existingScript) {

            let playerScript    = document.createElement('script');
            playerScript.src    = src;
            playerScript.type   = "text/javascript";
            playerScript.async  = false;
            playerScript.id     = 'playerScript';
            // document.getElementsByTagName("head")[0].appendChild(playerScript);
            document.body.appendChild(playerScript);

            playerScript.onload = () => {
                if (callback) callback();
            }

        }

        if (existingScript && callback) callback();

    }
    
    return (
        <>
            <div className={styles.VideoSideSectionWrap}>
                <div className={styles.VideoPlayerWrap}>
                    {
                        /youtube|vimeo/im.test(videoType) ? (
                            <div ref={videoParentRef}>
                                <CustomTYPlayer isScriptLoad={isScriptLoad} videoId={videoId} videoType={videoType} src={`https://www.youtube.com/embed/${videoId}?showinfo=0&modestbranding=1&autoplay=1`} />
                            </div>
                        ) :
                        (<Player
                            autoPlay
                            playsInline
                            poster="/assets/poster.png"
                            type="video/mp4"
                            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"

                        >
                            <BigPlayButton position="center" />
                            <ControlBar autoHide={false} className="my-class" >
                                <VolumeMenuButton vertical />
                                <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} />
                                <ClosedCaptionButton order={7} />
                            </ControlBar>
                        </Player>)
                    }


                    <div className="w-100">
                        <div className={styles.controlsWrapper}>
                            <span className={styles.enrollment}><AiOutlineUsergroupAdd /> <span id={styles.enrollmentTitle}>Entrollment :</span> <span id={styles.totalEnrollment}>1000</span></span>
                            <div className={styles.innerWrapper}>
                                <Button variant="warning" onClick={previousVideo}><BiSkipPrevious /><span>Previous</span></Button>
                                <Button variant="warning" onClick={nextVideo}><BiSkipNext /><span>Next</span></Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.VideoInfoWrap}>
                    <h2>React JS | রিডাক্স | ফায়ারবেজ | রিয়েল লাইফ প্রযেক্ট
                        Job Ready Complete Course
                    </h2>
                    <h5>
                        Instructor: <a href="#">Maruf Hussen</a>
                    </h5>
                </div>
            </div>
            
        </>
    );
};

export default VideoPlayerSection;