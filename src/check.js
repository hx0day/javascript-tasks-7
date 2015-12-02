'use strict';

exports.init = function () {
    Object.prototype.checkContainsKeys = function (keys) {
        if (!(typeof this === typeof Object() || typeof this === typeof Array())) {
            throw new TypeError('error type');
        }
        var result = true;
        keys.forEach(function (key) {
            if (!this.hasOwnProperty(key)) {
                result = false;
            }
        }, this);
        return true;
    };

    Object.prototype.checkHasKeys = function (keys) {
        if (!(typeof this === typeof Object() || typeof this === typeof Array())) {
            throw new TypeError('error type');
        }
        var thisKey = Object.keys(this);
        var result = thisKey.filter(function (key) {
            return (keys.indexOf(key) > -1);
        });
        return keys.length === result.length;
    };

    Object.prototype.checkContainsValues = function (values) {
        if (!(typeof this === typeof Object() || typeof this === typeof Array())) {
            throw new TypeError('error type');
        }
        var thisValue = Object.keys(this).map(function (key) {
            return this[key];
        }, this);
        var result = true;
        values.forEach(function (value) {
            if (thisValue.indexOf(value) === -1) {
                result = false;
            }
        });
        return result;
    };

    Object.prototype.checkHasValues = function (values) {
        if (!(typeof this === typeof Object() || typeof this === typeof Array())) {
            throw new TypeError('error type');
        }
        var thisValue = Object.keys(this).map(function (key) {
            return this[key];
        }, this);
        var result = values.filter(function (value) {
            return (thisValue.indexOf(value) > -1);
        });
        return result === key.length;
    };

    Object.prototype.checkHasValueType = function (key, type) {
        if (!(typeof this === typeof Object() || typeof this === typeof Array())) {
            throw new TypeError('error type');
        }
        return typeof this[key] === typeof type();
    };

    Object.prototype.checkHasLength = function (length) {
        if (!(typeof this === typeof String() || typeof this === typeof Array())) {
            throw new TypeError('error type');
        }
        return this.length === length;
    };

    Function.prototype.checkHasParamsCount = function (count) {
        return this.length === count;
    };

    String.prototype.checkHasWordsCount = function (count) {
        return this.split(' ').checkHasLength(count);
    };
};
