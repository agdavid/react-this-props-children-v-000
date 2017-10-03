import React, { Component, Children, cloneElement } from 'react';

export default class ThemedDecoration extends Component {
  render() {
    const childrenWithClassNameDiv = Children.map(this.props.children, child => cloneElement(child, {
        className: this.props.theme;
    })
  );

    return(
      <div>
        {childrenWithClassNameDiv}
      </div>
    );
  }
}
