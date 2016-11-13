class CartController {
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
    // console.log(this.cartSvc.getSubtotal());
    return this.cartSvc.subtotal;
  }

  tax() {
    return this.cartSvc.tax;
  }

  deleteItem(index, price) {
    this.cartSvc.deleteItem(index, price);

  }
}

CartController.$inject = ['CartService'];

export default CartController;
