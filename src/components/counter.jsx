import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: 1,
       
    };
    render() { 
        React.createElement('div')
        return (
        <div>
            <spam>{this.state.count}</spam>
            <button>Increment</button>
        </div>
        );
    }
}
 
export default Counter;
