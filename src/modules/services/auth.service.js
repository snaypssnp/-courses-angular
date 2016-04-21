export default class AuthService {

  /* @ngInject */
  constructor(FIREBASE_URI, $firebaseAuth) {
    let ref = new Firebase(FIREBASE_URI);
    this._authObj = $firebaseAuth(ref);
  }

  authorize(email, password) {
    return this._authObj.$authWithPassword({
      email,
      password
    });
  }

  isAuthorized() {
    return this._authObj.$getAuth();
  }

  logout() {
    return this._authObj.$unauth();
  }
}
