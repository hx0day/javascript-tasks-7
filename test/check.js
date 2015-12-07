/*jscs:disable maximumLineLength*/

var check = require('../src/check');
var assert = require('assert');

check.init();

describe('Check', function () {
    var person = {name: 'John', age: 20};
    var numbers = [1, 2, 3];
    var func = function (a, b) {
    };
    var str = 'some string';

    if ({}.check) {
        describe('Extra credit', function () {
            it('should check that target hasKeys', function () {
                assert.ok(person.check.hasKeys(['name', 'age']));
            });

            it('should check that target hasKeys not key', function () {
                assert.strictEqual(person.check.hasKeys(['nickname']), false);
            });

            it('should check that target hasValueType', function () {
                assert.ok(person.check.hasValueType('name', String));
            });

            it('should check that target hasKeys', function () {
                assert.ok(numbers.check.hasKeys(['0', '1', '2']));
            });

            it('should check that target hasLength', function () {
                assert.ok(numbers.check.hasLength(3));
            });

            it('should check that target containsValues', function () {
                assert.ok(numbers.check.containsValues([2, 1]));
            });

            it('should check that target hasParamsCount', function () {
                assert.ok(func.check.hasParamsCount(2));
            });

            it('should check that target hasWordsCount', function () {
                assert.ok(str.check.hasWordsCount(2));
            });
        });
    } else {
        describe('Required tasks', function () {

            it('should not check that target checkContainsKeys', function () {
                assert.ok(person.checkContainsKeys(['name', 'age']));
            });

            it('should check that target checkContainsKeys  not key', function () {
                assert.strictEqual(person.checkContainsKeys(['nickname']), false);
            });

            it('should check that target hasKeys', function () {
                assert.ok(person.checkHasKeys(['name', 'age']));
            });

            it('should check that target hasKeys not key', function () {
                assert.strictEqual(person.checkHasKeys(['nickname']), false);
            });

            it('should check that target hasValueType', function () {
                assert.ok(person.checkHasValueType('name', String));
            });

            it('should check that target hasKeys', function () {
                assert.ok(numbers.checkHasKeys(['0', '1', '2']));
            });

            it('should check that target hasLength', function () {
                assert.ok(numbers.checkHasLength(3));
            });

            it('should check that target hasLength object TypeError', function () {
                assert.throws(function () {
                    person.checkHasLength(3);
                }, TypeError);
            });

            it('should check that target containsValues', function () {
                assert.ok(numbers.checkContainsValues([2, 1]));
            });

            it('should check that target hasParamsCount', function () {
                assert.ok(func.checkHasParamsCount(2));
            });

            it('should check that target hasWordsCount', function () {
                assert.ok(str.checkHasWordsCount(2));
            });

            it('should check that target checkHasValues Array', function () {
                assert.ok(numbers.checkHasValues([1, 2, 3]));
            });


            it('should check that target checkHasValues object', function () {
                assert.ok(person.checkHasValues(['John', 20]));
            });

            it('should check that target checkType object', function () {
                assert.doesNotThrow(function () {
                    person.checkType(Object);
                });
            });

            it('should check that target checkType array', function () {
                assert.doesNotThrow(function () {
                    numbers.checkType(Array);
                });
            });

            it('should check that target checkType with throws', function () {
                assert.throws(function () {
                    person.checkType(Array, String);
                }, TypeError);
            });
        });
    }
});
