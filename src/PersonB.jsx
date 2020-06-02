import React, { Component } from 'react'

class PersonB extends Component { 
  state = {
    show: false,
  };

  toggleHandler = () => {
    const { show } = this.state;
    this.setState({
      show: !show,
    });
  }

  // render() {
  //   const { show } = this.state;
  //   let person = null;
  //   if (show) {
  //     person = <p>my name is Lucy，i am 18 years old.</p>
  //    }
  //   return(
  //     <div>
  //       <button onClick={this.toggleHandler}>显示/隐藏</button>
  //       {person}
  //     </div>
  //   )
  // }

  render() {
    const { show } = this.state;
    return (
      <div>
        <button onClick={this.toggleHandler}>显示/隐藏</button>
        {show && (<p>my name is Lucy，i am 18 years old.</p>)}
      </div>
    )
  }
}
export default PersonB;