/* eslint-disable jsx-a11y/anchor-is-valid */
import React , { useState} from 'react';
import styles from '../../Assets/css/CourseDetails/VideoPlayer.module.css';
import "./../../Assets/css/CourseDetails/yt-plyrio.css";
import { Player, BigPlayButton, ControlBar, ReplayControl, VolumeMenuButton, PlaybackRateMenuButton, ClosedCaptionButton } from 'video-react';
// import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
const VideoPlayerSection = () => {

    const [videoType, setVideoType] = useState('youtube');
    
    return (
        <>
            <div className={styles.VideoSideSectionWrap}>
                <div className={styles.VideoPlayerWrap}>

                    {
                        /(youtube)/im.test(videoType) ? (
                            <div className="plyr__video-embed youtube-container" id="player">
                                <iframe
                                    src="https://www.youtube.com/embed/hEqJJjKNpas?showinfo=0&modestbranding=1"
                                    allowFullScreen
                                    allowtransparency="true"
                                    allow="autoplay">
                                </iframe>
                            </div>

                        ) :

                            /vimeo/im.test(videoType) ?
                                (<div className="plyr__video-embed youtube-container" id="player">
                                    <iframe src="https://player.vimeo.com/video/253989945?h=c6db007fe5" style={{
                                        width: '480px',
                                        height: '360px',
                                        paddingTop: 0,
                                        paddingBottom: 0,
                                    }}
                                        frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen=""></iframe>
                                </div>) :
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
                                <Button variant="warning"><BiSkipPrevious /><span>Previous</span></Button>
                                <Button variant="warning"><BiSkipNext /><span>Next</span></Button>
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