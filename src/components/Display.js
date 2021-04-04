import React, { Component } from 'react';
import './css/style.css';

class Display extends Component {
    render() {
        return(
            <div className="display text-info">
               Calculation = {this.props.display}
            </div>
        );

    }
}

export default Display;