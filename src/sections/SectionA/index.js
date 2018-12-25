import React, { Component } from 'react';

import '../section.css';

class SectionA extends Component {
  render() {
    return (
      <div className="section" ref={this.props.forwardedRef}>
        <div className="section-text">
          This is section A
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
  return <SectionA {...props} forwardedRef={ref} />;
});
