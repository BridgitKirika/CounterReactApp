import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        value: this.props.value  
        // tags : [],
        // imageUrl: "https://picsum.photos/200" 
    };

    styles ={
        fontSize : 10,
        fontWeight : 'bold'
    }

    handleIncrement = (product) => {
        console.log(product);
        this.setState({ value : this.state.value + 1});
    };
    // renderTags () {
    //     if (this.state.tags.length === 0) return <p>There are no tags</p>

    //     return <ul>
    //     {this.state.tags.map( tag => <li key={ tag}>{ tag }</li>)}
    // </ul>
    // }
    render() { 
        return (
        <div>
            {/* <img src={this.state.imageUrl} alt="" /> */}
             <span  style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
        
        <button onClick={ () => this.handleIncrement('product') } 
        
        className="btn btn-secondary btn-sm">Increment</button>
        {/* { this.state.tags.length === 0 && 'please create a new tag!'}
        {this.renderTags ()}
             */}
        </div>
        );
    }
    
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero": value;
    }
}

export default Counter;