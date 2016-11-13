class CatalogService {

  constructor($http) {
    this.$http = $http;
    this.cameras = this.$http.get('/api/cameras')
      .then((response) => {
      this.cameras = response.data;
    })
  }

  cameraList() {
    return this.cameras;
  }
}

CatalogService.$inject = ['$http'];

export default CatalogService;
