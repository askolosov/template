import React from 'react';

const CartResizeListener = (CartViewComponent) => {
  class CartResizeListenerComponent extends React.Component {
    constructor(props) {
      super(props);

      this.onResize = this.onResize.bind(this);
      this.state = {
        top: null,
        left: null,
      };
    }

    componentWillMount() {
      window.addEventListener('resize', this.onResize);
    }

    componentDidMount() {
      this.onResize();
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
    }

    onResize() {
      const headerElement = document.querySelector('.HeaderComponentBlock');
      const dropdownElement = document.querySelector('.CartDropdownComponent');
      const headerCoordinates = headerElement.getBoundingClientRect();
      const top = headerCoordinates.top + (headerElement.offsetHeight / 2) + 13;
      const left = headerCoordinates.right - dropdownElement.offsetWidth;
      this.setState({ top, left });
    }

    render() {
      return <CartViewComponent {...this.props} cartPosition={this.state} />;
    }
  }

  return CartResizeListenerComponent;
};

export default CartResizeListener;
