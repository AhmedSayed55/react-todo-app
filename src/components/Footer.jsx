import React from "react";
import PropTypes from "prop-types";


class Footer extends React.Component {
    constructor(props) {
        super(props);
      }
  render() {
    const{mystyle,text1,text2}=this.props;
    return (
    <div>
     <p className={mystyle}>{text1}<br/>{text2}
     </p>
    </div>
    );
  }
}

  Footer.prototypes={
    mystyle:PropTypes.string.isRequired,
    text1:PropTypes.string.isRequired,
    text2:PropTypes.string.isRequired,
  }


export default Footer

