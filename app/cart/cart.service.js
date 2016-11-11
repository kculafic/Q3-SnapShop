class CartService {
  constructor($state) {
    this.$state = $state;
    this.cart = [];
    this.subtotal = 0;
    this.tax = 0;
  }

  addCamera(title, price) {
    this.subtotal += price;
    this.cart.push({
      title: title,
      price: price
    })
    console.log('before');
    Materialize.toast(`${title}` + ' has been added!', 4000);
    this.$state.go('')
  }
}

CartService.$inject = ['$state'];
export default CartService;
