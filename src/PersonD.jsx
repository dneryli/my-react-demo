import React, { Component } from 'react'

class PersonD extends Component {
  constructor(props) { 
    super(props);
    console.log('constructor...');
  }

  componentWillMount() { 
    console.log('componentWillMount....');
  }

  componentDidMount() { 
    console.log('componentDidMount....');
  }

  componentWillReceiveProps(nextProps) { 
    console.log('componentWillReceiveProps....', "nextProps=" + nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate....', "nextProps=" + nextProps, "nextState=" + nextState);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate....', "nextProps=" + nextProps, "nextState=" + nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate....', "prevProps=" + prevProps, "prevState=" + prevState);
  }

  componentwillUmount() { 
    console.log('componentwillUmount....');
  }

  render() {
    console.log('render....');
    return (
      <div>
        <p>my name is Lucy，i am 18 years old.</p>
        <p>my name is Lily, i am 20 years old.</p>
      </div>
    )
  }
}
export default PersonD;