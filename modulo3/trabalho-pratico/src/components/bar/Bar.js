import React, { Component } from 'react';

export default class Bar extends Component {
  render() {
    const { value, color = 'black', border } = this.props;

    return (
      <div
        style={{
          width: value + '%',
          height: '35px',
          backgroundColor: color,
          borderRadius: border,
        }}
      />
    );
  }
}