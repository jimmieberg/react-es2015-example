'use strict';

import React from 'react';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
    }
    onClickButton() {
        alert('You have clicked the button!');
    }
    render() {
        return (
            <button onClick={this.onClickButton.bind(this)}>
                Click me! 
            </button>
        );
    }
};
