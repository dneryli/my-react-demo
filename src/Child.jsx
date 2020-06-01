import React, { Component } from 'react';
import './Child.css';

class Child extends Component { 
    constructor(props) { 
        super(props);
        this.state = {};
    }
    render() { 
        const { name } = this.props;
        return <div className="Child">{name}</div>
    }   
}
export default Child;