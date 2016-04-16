import './messages.service';
describe('Calc', function() {
    beforeEach(angular.mock.module('app'));
    describe('service', function() {

        //angular.mock.inject
        it('should do sum', function() {
            expect(7).toBe(7);
        });
    });
})



