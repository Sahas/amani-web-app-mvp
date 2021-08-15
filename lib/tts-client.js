import axios from "axios";

class TtsClient {
  constructor() {
    this.TTS_SERVER_URL = process.env.NEXT_PUBLIC_TTS_API_URL;
    this.TTS_API = "/tts/snippet";
  }

  getAudioLinkForTextUrl = async (textUrl) => {
    const responseBody = await axios.post(
      this.TTS_SERVER_URL + this.TTS_API,
      JSON.stringify({ url: textUrl }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(responseBody);
    const {
      data: {
        data: { audioUrl },
      },
    } = responseBody;
    console.log(audioUrl);
    return audioUrl;
  };
}

export default new TtsClient();
