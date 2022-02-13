/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from '../../Assets/css/CourseDetails/VideoPlayer.module.css';
import { Player } from 'video-react';

const VideoPlayerSection = () => {
    return (
        <>
            <div className={styles.VideoSideSectionWrap}>
                <div className={styles.VideoPlayerWrap}>
                    <Player
                        playsInline
                        poster="/assets/poster.png"
                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                    />
                </div>
                <div className={styles.VideoInfoWrap}>
                    <h2>React JS | রিডাক্স | ফায়ারবেজ | রিয়েল লাইফ প্রযেক্ট 
                        Job Ready Complete Course
                    </h2>
                    <p>
                        Instructor: <a href="#">Maruf Hussen</a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default VideoPlayerSection;