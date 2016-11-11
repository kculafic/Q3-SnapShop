class CatalogCtrl {
  constructor(catalogSvc, cartSvc) {
    this.catalogSvc = catalogSvc;
    this.cartSvc = cartSvc;
  }

  cameras() {
    return this.catalogSvc.cameras;
  }

  addCamera(title, price) {
    this.cartSvc.addCamera(title, price);
  }
}


CatalogCtrl.$inject = ['CatalogService', 'CartService'];

export default CatalogCtrl;
