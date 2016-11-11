class CartCtrl {
  constructor(cartSvc) {
    this.cartSvc = cartSvc;
  }
  cameras() {
    return this.cartSvc.cameras;
  }

  cart() {
    return this.cartSvc.cart;
  }

  addCamera(title, price) {
    this.cartSvc.addCamera(title, price);
  }

  subtotal() {
    return this.cartSvc.subtotal;
  }

  tax() {
    return this.cartSvc.tax;
  }
}

CartCtrl.$inject = ['CartService'];

export default CartCtrl;
