import React from "react";
import PropTypes from "prop-types";

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activityName:"",date:null,isDone:false,key:0,isFav:false};
    this.handleTextChange=this.handleTextChange.bind(this); 
  }
  handleTextChange(element,keyElement) {
    const obj={ isDone:false,isFav:false};
      obj[keyElement]= (keyElement==='isDone')?element.target.checked:element.target.value;
    this.setState(obj);
  }

  render() {
    const { myStyle, hint1, hint3, getValue, text } = this.props;
    return (
      <div className={myStyle} onMouseLeave={()=>getValue(this.state)} >
          <h3>{text}</h3>
      <input
       type="text"
        placeholder={hint1}
        onChange={(e) => this.handleTextChange(e,'activityName')}
        className="input-container"
      />
      <br/>
      <input
        type="date"
        placeholder={hint3}
        onChange={(e) => this.handleTextChange(e,'date')}
        className="input-container"
      />
      <br/>
      <label>
   is done?
      <input
        type="checkbox"
        name="is done"
        onChange={(e) => this.handleTextChange(e,'isDone')}
      />
      </label>
      <br/>
</div>
    );
  }
}

TodoInput.propTypes = {
  myStyle:PropTypes.string.isRequired,
  hint1:PropTypes.string.isRequired,
  hint3:PropTypes.string.isRequired,
  text:PropTypes.string.isRequired,
  getValue: PropTypes.func.isRequired,
};

export default TodoInput;