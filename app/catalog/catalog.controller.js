class CatalogCtrl {
  constructor(catalogSvc, cartSvc) {
    this.catalogSvc = catalogSvc;
    this.cartSvc = cartSvc;
    this.cameras = [];
  }

  cameraList() {
    return this.catalogSvc.cameraList();
  }

  addCamera(title, price) {
    this.cartSvc.addCamera(title, price);
  }
}


CatalogCtrl.$inject = ['CatalogService', 'CartService'];

export default CatalogCtrl;
