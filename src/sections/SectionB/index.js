import React, { Component } from 'react';

import '../section.css';

class SectionB extends Component {
  render() {
    return (
      <div className="section" ref={this.props.forwardedRef}>
        <div className="section-text">
          This is section B
        <br />
          {
            this.props.body
          }
        </div>
      </div>
    )
  }
};

export default React.forwardRef((props, ref) => {
  return <SectionB {...props} forwardedRef={ref} />;
});
