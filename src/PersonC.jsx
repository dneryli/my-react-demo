import React, { Component } from 'react'
import './PersonC.css';

class PersonC extends Component { 
  state = {
    classes: ['red'],
  };

  addClasses = () => {
    let { classes } = this.state;
    if (classes.length < 2) {
      classes.push('bold');
      this.setState({
        classes,
      });
    }
  }
  
  render() {
    const { classes } = this.state;
    const style = {
      backgroundColor: 'green',
      border: '1px solid blue',
      color: 'white'
    };
    return (
      <div>
        <button style={style} onClick={this.addClasses}>更改样式状态</button>
        <p style={{ fontSize: '16px' }} className={classes.join("")} >my name is Lucy，i am 18 years old.</p>
      </div>
    )
  }
}
export default PersonC;