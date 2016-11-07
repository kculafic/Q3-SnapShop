class CartCtrl {
  constructor(peopleSvc) {
    this.peopleSvc = peopleSvc;
  }

  constructor() {
    this.messToAdd = '';
    this.messages = [];
  }
  peopleCount() {
    return this.peopleSvc.people.length;
  }
}

CartCtrl.$inject = ['PeopleService'];

export default CartCtrl;
