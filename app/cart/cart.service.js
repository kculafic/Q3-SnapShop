class CartService {
  constructor($state) {
    this.$state = $state;
    this.cart = [];
    this.subtotal = 0;
    this.tax = 0;
  }

  addCamera(title, price) {
    this.subtotal += parseInt(price);
    this.cart.push({
      title: title,
      price: price
    })

    Materialize.toast(`${title}` + ' has been added!', 4000);
    this.$state.go('')
  }

  deleteItem(index, price){
    this.cart.splice(index, 1);
    this.subtotal -= parseInt(price);
  }
}

CartService.$inject = ['$state'];
export default CartService;
