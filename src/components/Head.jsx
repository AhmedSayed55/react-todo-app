import React from "react";
import PropTypes from "prop-types";

class Head extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const{mystyle,text}=this.props;
    return (
     <h1 className={mystyle}>{text}</h1>
    );
  }
}

Head.prototypes={
  mystyle:PropTypes.string.isRequired,
  text1:PropTypes.string.isRequired,
}

export default Head