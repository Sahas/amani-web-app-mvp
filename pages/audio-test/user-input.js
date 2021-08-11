import React from "react";

class UserInputPage extends React.Component {
  state = {
    url: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    console.log(this.state);
    console.log(JSON.stringify(this.state));
    fetch("http://localhost:7000/tts/snippet", {
      method: "POST",
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(function (response) {
      let data = response.json();
      console.log(data);
      return data;
    });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <div> </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            Enter URL :
            <input
              type="text"
              name="url"
              placeholder="url"
              onChange={this.handleChange}
              width="800"
            />
          </div>
          <div>
            <button type="submit">Convert to Speech!</button>
          </div>
        </form>
      </div>
    );
  }
}

export default UserInputPage;
