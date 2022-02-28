/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef} from 'react';
import { VideoPlyrConfig } from '../../Utilities/VideoConfig';

const CustomTYPlayer = ({ isScriptLoad, videoId, videoType, src}) => {

    const [isReady, setIsReady] = useState({isScriptLoad})

    useEffect(()=>{
        VideoPlyrConfig({ video_id: videoId, type: videoType, title: "video_title" })
    },[])

    return (
        <>
            {
                isReady ?  
                (   /(youtube)/im.test(videoType) ? (

                        <div className="plyr__video-embed youtube-container" id="player">
                        <iframe
                            src={src +'?iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1'}
                            allowFullScreen
                            allowtransparency="true"
                            allow="autoplay"
                            frameBorder="0" 
                        ></iframe>
                        </div>
                    ) :

                    /vimeo/im.test(videoType) ?
                    (<div className="plyr__video-embed youtube-container" id="player">
                            <iframe src={`https://player.vimeo.com/video/${videoId}?h=c6db007fe5`} style={{
                            width: '480px',
                            height: '360px',
                            paddingTop: 0,
                            paddingBottom: 0,
                        }}
                            frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen=""></iframe>
                    </div>
                    ):null

                ) : null
            }
            
        </>
    );
};

export default CustomTYPlayer;