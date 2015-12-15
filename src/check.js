'use strict';

exports.init = function () {
    //Проверяет, что цель содержит указанные ключи.
    Object.prototype.checkContainsKeys = function (keys) {
        this.checkType(Object, Array);
        var result = true;
        keys.forEach(function (key) {
            if (!this.hasOwnProperty(key)) {
                result = false;
            }
        }, this);
        return result;
    };
    //Проверяет, что цель содержит только указанные ключи.
    Object.prototype.checkHasKeys = function (keys) {
        this.checkType(Object, Array);
        var thisKey = Object.keys(this);
        var result = thisKey.filter(function (key) {
            return (keys.indexOf(key) > -1);
        });
        result = thisKey.length === result.length && thisKey.length === keys.length;
        return result;
    };

    Object.prototype.checkContainsValues = function (values) {
        this.checkType(Object, Array);
        var val_from_object = Object.keys(this).map(function (key) {
            return this[key];
        }, this);
        var result = true;
        values.forEach(function (value) {
            if (val_from_object.indexOf(value) === -1) {
                result = false;
            }
        });
        return result;
    };

    //Проверяет, что цель содержит только указанные значения.
    Object.prototype.checkHasValues = function (values) {
        this.checkType(Object, Array);
        var val_from_object = Object.keys(this).map(function (key) {
            return this[key];
        }, this);
        var values_result = values.filter(function (value) {
            return (val_from_object.indexOf(value) > -1);
        });

        var result = val_from_object.length === values_result.length;
        result = result && val_from_object.length === values.length;
        return result;
    };

    Object.prototype.checkHasValueType = function (key, type) {
        this.checkType(Object, Array);
        return typeof this[key] === typeof type();
    };

    Object.prototype.checkHasLength = function (length) {
        this.checkType(String, Array);
        return this.length === length;
    };

    Function.prototype.checkHasParamsCount = function (count) {
        return this.length === count;
    };

    String.prototype.checkHasWordsCount = function (count) {
        return this.split(' ').checkHasLength(count);
    };

    Object.prototype.checkType = function () {
        var result = [];
        var args = Array.prototype.slice.call(arguments);
        args.forEach(function (argument) {
            if (this.constructor === argument) {
                result.push(true);
            }
        }, this);
        if (!result.length) {
            throw new TypeError('error type');
        }
    };
};
