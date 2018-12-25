import React, { Component } from 'react';
import SectionManager from './components/SectionManager';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scroll: {
        sectionName: 'C',
      },
      post: {
        postNumber: 1,
      },
    };
  }

  scrollToSectionA = () => {
    this.setState({
      scroll: {
        sectionName: 'A',
      }
    })
  }

  scrollToSectionC = () => {
    this.setState({
      scroll: {
        sectionName: 'C',
      }
    })
  }

  changeText = () => {
    this.setState(
      (oldState) => ({
        post: {
          postNumber: oldState.post.postNumber + 1,
        }
      })
    )
  }

  scrollToTopAndChangeText = () => {
    this.scrollToSectionA();
    this.changeText();
  }

  render() {
    return (
      <div className="App">
        <div className="controls" >
          <button onClick={this.scrollToSectionA}>Scroll to A</button>
          <button onClick={this.scrollToSectionC}>Scroll to C</button>
          <button onClick={this.changeText}>Fetch new text content</button>
          <button onClick={this.scrollToTopAndChangeText}>Scroll to A and Fetch text</button>
        </div>
        <SectionManager
          {
          ...this.state
          }
        />
      </div>
    );
  }
}

export default App;
