(function () {
  this.AmaniParser = function () {
    let title = window.document.getElementById("post-title");
    let content = window.document.getElementById("post-content").textContent;
    let audioPlayer = console.log(title);
    console.log(content);
    const TTS_API_URL =
      "https://dtxqnhjgdj.execute-api.ap-southeast-1.amazonaws.com/Prod";
    console.log(TTS_API_URL + "/tts/snippet");
    fetch(TTS_API_URL + "/tts/snippet", {
      method: "POST",
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify({ content: content }),
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => {
        console.log("Got response");
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const audio = document.createElement("audio");
        audio.setAttribute("controls", "controls");
        const source = document.createElement("SOURCE");
        source.setAttribute("src", data.data.audioUrl);
        source.setAttribute("type", "audio/mpeg");
        audio.appendChild(source);

        // audio.autoplay = true;
        // audio.load();
        // audio.addEventListener(
        //   "load",
        //   function () {
        //     audio.play();
        //   },
        //   true
        // );
        // audio.src = data.data.audioUrl;
        window.document.getElementById("audio-player").appendChild(audio);
      });
  };
  var amaniParser = new AmaniParser();
})();
