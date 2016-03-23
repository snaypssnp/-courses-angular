export default class UsersService {

    /* @ngInject */
    constructor(FIREBASE_URI, $firebaseArray) {
        let ref = new Firebase(FIREBASE_URI).child('users');
        this._list = $firebaseArray(ref);
    }

    getAll() {
        return this._list.$loaded((result) => {
            return result;
        });
    }

    getItem(index) {
        return this.getAll().then((result) => {
            return result[index];
        })
    }

    add(user) {
        return this._list.$add(user).then((ref) => {
            let key = ref.key();
            let index = this._list.$indexFor(key);
            return this._list[index];
        });
    }

    remove(user) {
        return this._list.$remove(user).then((ref) => {
            return user.$id;
        });
    }

    update(index) {
        return this._list.$save(index).then((ref) => {
            return this._list[index];
        });
    }
}
