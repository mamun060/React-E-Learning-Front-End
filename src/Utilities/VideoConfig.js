import Plyr from "plyr";


const VideoPlyrConfig = ({ video_id, type, title }) => {
    new Plyr('#player', {
        sources: [{
            src: video_id,
            type,
            title,
        }],
        src: video_id,
    }).on('ready', function (e) {
        console.log('ready ...');
    });
}



const videoHtml = (video_id = null) => {
    return `<div className="plyr__video-embed youtube-container" id="player">
    <iframe
        src="https://www.youtube.com/embed/${video_id}?showinfo=0&modestbranding=1&autoplay=1&iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
        allowFullScreen
        allowtransparency="true"
        allow="autoplay"
        frameBorder="0" 
    ></iframe>
    </div>`;
}


export { VideoPlyrConfig, videoHtml }
