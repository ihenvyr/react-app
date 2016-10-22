import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import App from './App';

function setup(propOverrides={}) {
  let props = Object.assign({}, propOverrides);
  return ReactTestUtils.renderIntoDocument(<App {...props} />);
}

describe('component', () => {
  describe('App', () => {
    it("should render correctly", () => {
      const component = setup();

      const node = ReactDOM.findDOMNode(component);
      expect(node.tagName).to.equal('DIV');

      const h1 = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'h1');
      expect(h1.tagName).to.equal('H1');
      expect(h1.textContent).to.equal('Welcome to React App');

      const span = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'bold-green-text');
      expect(span.tagName).to.equal('SPAN');
      expect(span.textContent).to.equal('simple');
    });
  });
});
