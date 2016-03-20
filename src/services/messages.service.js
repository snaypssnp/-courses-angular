/* @ngInject */
export default function MessagesService(FIREBASE_URI, $firebaseArray) {

    let ref = new Firebase(FIREBASE_URI).child('messages');
    let list = $firebaseArray(ref);

    return {
        getAll: getAll,
        getItem: getItem,
        add: add,
        remove: remove
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

    function add(message) {
        console.log('message: ', message);
        return list.$add(message).then((ref) => {
            let key = ref.key();
            let index = list.$indexFor(key);
            return list[index];
        });
    }

    function remove(message) {
        return list.$remove(message).then((ref) => {
            return message.$id;
        });
    }
}
