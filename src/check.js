'use strict';

exports.init = function () {
    Object.prototype.checkContainsKeys = function (keys) {
        if (!(this.constructor === Object || this.constructor === Array)) {
            throw new TypeError('error type');
        }
        var result = true;
        keys.forEach(function (key) {
            if (!this.hasOwnProperty(key)) {
                result = false;
            }
        }, this);
        return result;
    };

    Object.prototype.checkHasKeys = function (keys) {
        if (!(this.constructor === Object || this.constructor === Array)) {
            throw new TypeError('error type');
        }
        var thisKey = Object.keys(this);
        var result = thisKey.filter(function (key) {
            return (keys.indexOf(key) > -1);
        });
        return keys.length === result.length;
    };

    Object.prototype.checkContainsValues = function (values) {
        if (!(this.constructor === Object || this.constructor === Array)) {
            throw new TypeError('error type');
        }
        var value_from_object = Object.keys(this).map(function (key) {
            return this[key];
        }, this);
        var result = true;
        values.forEach(function (value) {
            if (value_from_object.indexOf(value) === -1) {
                result = false;
            }
        });
        return result;
    };

    Object.prototype.checkHasValues = function (values) {
        if (!(this.constructor === Object || this.constructor === Array)) {
            throw new TypeError('error type');
        }
        var value_from_object = Object.keys(this).map(function (key) {
            return this[key];
        }, this);
        var result = values.filter(function (value) {
            return (value_from_object.indexOf(value) > -1);
        });
        return result.length === values.length;
    };

    Object.prototype.checkHasValueType = function (key, type) {
        if (!(this.constructor === Object || this.constructor === Array)) {
            throw new TypeError('error type');
        }
        return typeof this[key] === typeof type();
    };

    Object.prototype.checkHasLength = function (length) {
        if (!(this.constructor === String || this.constructor === Array)) {
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
