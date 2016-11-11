class CartCountCtrl {
  constructor(cartSvc) {
    this.cartSvc = cartSvc;
  }

  cartCount() {
    return this.cartSvc.cart.length;
  }
}

CartCountCtrl.$inject = ['CartService'];

export default CartCountCtrl;
