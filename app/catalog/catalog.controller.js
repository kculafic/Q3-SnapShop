class CatalogCtrl {
  constructor(catalogSvc) {
    this.catalogSvc = catalogSvc;
  }

  cameras() {
    return this.catalogSvc.cameras;
  }

  cart() {
    return this.catalogSvc.cart;
  }

  addCamera(title, price) {
    this.catalogSvc.addCamera(title, price);
  }

  subtotal() {
    return this.catalogSvc.subtotal;
  }

  tax() {
    return this.catalogSvc.tax; 
  }

}



CatalogCtrl.$inject = ['CatalogService'];

export default CatalogCtrl;
