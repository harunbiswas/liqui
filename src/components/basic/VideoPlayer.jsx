import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  return (
    <ReactPlayer
      url="https://player.vimeo.com/video/881057694"
      playing={true} // Autoplay
      loop={true}
      controls={false}
      width="100%"
      height="100%"
    />
  );
};

export default VideoPlayer;
