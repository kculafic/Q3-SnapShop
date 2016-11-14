class SignUpService {
  constructor($http) {
    this.$http = $http;
  }

  addUser(firstName, lastName, email, password) {
    this.$http.post('/api/users', { firstName, lastName, email, password })
    .then((res) => {
      console.log(res);
      Materialize.toast('Sign up Successful!', 4000);
    })
    .catch((err) => {
      console.error(err);
    })
  }
}

SignUpService.$inject = ['$http'];

export default SignUpService;
