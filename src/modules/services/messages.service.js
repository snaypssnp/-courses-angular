export default class MessagesService {

    /* @ngInject */
    constructor (FIREBASE_URI, $firebaseArray) {
        let ref = new Firebase(FIREBASE_URI).child('messages');
        this._list = $firebaseArray(ref);
    }

    getAll(type) {
        return this._list.$loaded((result) => {
            result.forEach((item, index) => {
                item.index = index;
            });
            return result;
        });
    }

    getItem(index) {
        return this.getAll().then((result) => {
            return result[index];
        })
    }

    add(message) {
        return this._list.$add(message).then((ref) => {
            let key = ref.key();
            let index = this._list.$indexFor(key);
            return this._list[index];
        });
    }

    remove(message) {
        return this._list.$remove(message).then((ref) => {
            return message.$id;
        });
    }
}
