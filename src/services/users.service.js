/* @ngInject */
export default function UsersService(FIREBASE_URI, $firebaseArray) {

    let ref = new Firebase(FIREBASE_URI).child('users');
    let list = $firebaseArray(ref);

    return {
        getAll: getAll,
        getItem: getItem,
        add: add,
        remove: remove,
        update: update,
    }

    ///////////

    function getAll() {
        return list.$loaded((result) => {
            return result;
        });
    }

    function getItem(index) {
        return getAll().then((result) => {
            return result[index];
        })
    }

    function add(user) {
        return list.$add(user).then((ref) => {
            let key = ref.key();
            let index = list.$indexFor(key);
            return list[index];
        });
    }

    function remove(user) {
        return list.$remove(user).then((ref) => {
            return user.$id;
        });
    }

    function update(index) {
        return list.$save(index).then((ref) => {
            return list[index];
        });
    }
}
