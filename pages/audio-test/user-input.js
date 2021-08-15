import React from "react";
import TtsClient from "../../lib/tts-client.js";
import ReactAudioPlayer from "react-audio-player";

class UserInputPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textSourceUrl: "",
      audioUrl: "",
      status: "PAGE_LOADED",
      statusMessage: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  updateResponseData = (responseBody) => {
    console.log(responseBody);
    const { audioUrl } = responseBody.data;
    this.setState({
      audioUrl: audioUrl,
      status: "AUDIO_URL_RECEIVED",
    });
  };

  updateProcessedState = (audioUrl) => {
    this.setState({
      audioUrl: audioUrl,
      status: "AUDIO_URL_RECEIVED",
      statusMessage: "Success",
    });
  };

  updateProcessedErrorState = (error) => {
    this.setState({
      status: "SERVER_ERROR",
      statusMessage: "Sorry, we had a bug",
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      status: "PROCESSING",
      statusMessage: "Processing..",
    });

    let audioUrl;
    TtsClient.getAudioLinkForTextUrl(this.state.textSourceUrl).then(
      (response) => {
        console.log("Response " + response);
        audioUrl = response;
        this.updateProcessedState(audioUrl);
      },
      (error) => {
        console.log("Error " + error);
        this.updateProcessedErrorState(error);
      }
    );
    // const TTS_API_URL = process.env.NEXT_PUBLIC_TTS_API_URL;
    // console.log(TTS_API_URL + "/tts/snippet");
    // console.log(this.state);
    // console.log(JSON.stringify(this.state));
    // fetch(TTS_API_URL + "/tts/snippet", {
    //   method: "POST",
    //   // We convert the React state to JSON and send it as the POST body
    //   body: JSON.stringify({ url: this.state.textSourceUrl }),
    //   headers: {
    //     "Content-Type": "application/json",
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => this.updateResponseData(data));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            Enter URL :
            <input
              type="text"
              name="textSourceUrl"
              placeholder="url"
              onChange={this.handleChange}
              width="800"
            />
          </div>
          <div>
            <button type="submit">Convert to Speech!</button>
          </div>
        </form>
        <div>{this.state.statusMessage}</div>
        <div>
          {this.state.status == "AUDIO_URL_RECEIVED" && (
            <ReactAudioPlayer src={this.state.audioUrl} autoPlay controls />
          )}
        </div>
      </div>
    );
  }
}

export default UserInputPage;
