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
    });
  });
});
