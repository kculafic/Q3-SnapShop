class CatalogService {

  constructor($http) {
    this.$http = $http;
    this.cameras = this.$http.get('/api/cameras')
      .then((response) => {
      this.cameras = response.data;
    })
  }

  camera() {
    return this.cameras;
  }
}

CatalogService.$inject = ['$http'];

export default CatalogService;
