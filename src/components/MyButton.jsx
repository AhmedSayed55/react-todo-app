import React from "react";
import PropTypes from "prop-types";

class MyButton extends React.Component {

  render() {
    const { text, myStyle, handleClick} = this.props;
    return (
      <button className={myStyle} onClick={handleClick}>
        {" "}
        {text}
      </button>
    );
  }
}

MyButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  myStyle:PropTypes.string.isRequired,
};

export default MyButton;
