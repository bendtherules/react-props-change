import React, { Component, createRef } from 'react';
import SectionA from '../../sections/SectionA';
import SectionB from '../../sections/SectionB';
import SectionC from '../../sections/SectionC';

export default class SectionManager extends Component {
  static placeHolderURL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(props) {
    super(props);

    this.state = {
      sectionBody: undefined,
    };

    this.sectionRefs = {
      'A': createRef(),
      'B': createRef(),
      'C': createRef(),
    }
  }

  componentWillReceiveProps(nextProps) {
    const { scroll: scrollProps, post: postProps } = nextProps;
    const { scroll: oldScrollProps, post: oldPostProps } = this.props;

    if (scrollProps.sectionName !== oldScrollProps.sectionName) {
      this.scrollToSection(scrollProps.sectionName)
    }

    if (postProps.postNumber !== oldPostProps.postNumber) {
      this.updateSectionBody(postProps.postNumber);
    }
  }

  componentDidMount() {
    this.updateSectionBody(this.props.post.postNumber);

    setTimeout(() => { this.scrollToSection(this.props.scroll.sectionName); }, 500);

  }

  updateSectionBody(postNumber) {
    this.setState({
      sectionBody: undefined,
    })

    fetch(`${SectionManager.placeHolderURL}/${postNumber}`)
      .then((responseString) => {
        return responseString.json();
      })
      .then((responseObject) => {
        this.setState({
          sectionBody: responseObject.body,
        });
      });

  }

  scrollToSection(sectionName) {
    const sectionRef = this.sectionRefs[sectionName];
    console.log(sectionRef.current, sectionRef.current !== null);

    if (
      (sectionRef !== undefined) &&
      (sectionRef.current !== null)
    ) {
      sectionRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  render() {
    return (
      <div>
        <SectionA ref={this.sectionRefs.A} body={this.state.sectionBody} />
        <SectionB ref={this.sectionRefs.B} body={this.state.sectionBody} />
        <SectionC ref={this.sectionRefs.C} body={this.state.sectionBody} />
      </div>
    );
  }
}