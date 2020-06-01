import React, { Component } from 'react';
import Child from './Child';
import './Parent.css';

class Parent extends Component { 
    constructor(props) { 
        super(props);
        this.state = {};
    }
    render() { 
        return <div className="Parent">父组件
         <Child name="react" />
        </div>
    }   
}
export default Parent;