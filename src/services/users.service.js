/* @ngInject */
export default function UsersService(FIREBASE_URI, $firebaseArray) {
    let ref = new Firebase(FIREBASE_URI).child('users');
    let list = $firebaseArray(ref);

    return {
        getAll: getAll,
    }

    ///////////

    function getAll() {
        //return Promise
        return list.$loaded(function(result) {
            return result;
        })
    }
}
