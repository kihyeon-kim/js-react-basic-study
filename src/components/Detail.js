import React from "react";

class Detail extends React.Component {

  componentDidMount() {
    const {location, history} = this.props;

    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const {location} = this.props;

    return location.state ? <div>{location.state.title}</div> : null;
  }
}

export default Detail;
