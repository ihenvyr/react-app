import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import Welcome from './Welcome';

function setup(propOverrides={}) {
  let props = Object.assign({}, propOverrides);
  return ReactTestUtils.renderIntoDocument(<Welcome {...props} />);
}

describe('component', () => {
  describe('Welcome', () => {
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

      const label = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'label');
      expect(label.textContent).to.equal('checkbox');
    });

    it("should handle checkbox on change", () => {
      const component = setup();
      const checkbox = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'input');

      expect(component.state.checked).to.equal(false);
      ReactTestUtils.Simulate.change(checkbox);
      expect(component.state.checked).to.equal(true);
      ReactTestUtils.Simulate.change(checkbox);
      expect(component.state.checked).to.equal(false);
    });
  });
});

// Simulate
// renderIntoDocument()
// mockComponent()
// isElement()
// isElementOfType()
// isDOMComponent()
// isCompositeComponent()
// isCompositeComponentWithType()
// findAllInRenderedTree()
// scryRenderedDOMComponentsWithClass()
// findRenderedDOMComponentWithClass()
// scryRenderedDOMComponentsWithTag()
// findRenderedDOMComponentWithTag()
// scryRenderedComponentsWithType()
// findRenderedComponentWithType()
