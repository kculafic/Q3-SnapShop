class AuthService {
  constructor($http) {
    this.$http = $http;
    this.signedIn = false;
    this.email = '';

    this.$http.get('/api/token')
      .then((res) => {
        this.signedIn = res.data;
      })
      .catch(() => {
        // There was some error
      });
  }

  // isSignedIn(email) {
  //   console.log(this.email);
  //   this.email;
  // }

  signIn(email, password) {
    return this.$http.post('/api/token', { email, password })
      .then((res) => {
        this.signedIn = true;
        Materialize.toast('Welcome back, ' + `${email}` + '!' , 4000);
      })
      .catch((err) => {
        Materialize.toast('Login Failed', 4000);
      });
  }

  signOut() {
    return this.$http.delete('/api/token')
      .then(() => {
        this.signedIn = false;
        Materialize.toast('Goodbye', 4000);
      })
      .catch((err) => {
        Materialize.toast('Logout Failed', 4000);

      });
  }
}

AuthService.$inject = ['$http'];

export default AuthService;
