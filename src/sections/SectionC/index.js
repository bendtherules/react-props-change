import React, { Component } from 'react';

import '../section.css';

class SectionC extends Component {
  render() {
    return (
      <div className="section" ref={this.props.forwardedRef}>
        <div className="section-text">
          This is section C
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
  return <SectionC {...props} forwardedRef={ref} />;
});
