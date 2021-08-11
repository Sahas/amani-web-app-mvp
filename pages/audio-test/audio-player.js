import ReactAudioPlayer from "react-audio-player";

export default function audioPlayer() {
  return (
    <ReactAudioPlayer
      src="https://res.cloudinary.com/amani-test/video/upload/v1628680403/audios/speech_lp0h3u.wav"
      autoPlay
      controls
    />
  );
}
