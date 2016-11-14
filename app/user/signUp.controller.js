class SignUpCtrl {
  constructor(signUpSrc) {
    this.signUpSrc = signUpSrc;
  }

  addUser(firstName, lastName, email, password) {
    this.signUpSrc.addUser(firstName, lastName, email, password);
  }
}

SignUpCtrl.$inject = ['SignUpService'];

export default SignUpCtrl;
