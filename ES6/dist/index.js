'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var a = 5;
var sum = function sum(x, y) {
    return x + y;
};
var b = 6;

var People = function () {
    function People(name, age) {
        _classCallCheck(this, People);

        this.name = name;
        this.age = age;
    }

    _createClass(People, [{
        key: 'showName',
        value: function showName() {
            console.log(this.name);
        }
    }]);

    return People;
}();

var p1 = new People('zs', 20);
console.log(p1);
p1.showName();

var aLi = document.querySelectorAll('#nav li');

var _loop = function _loop(i) {
    aLi[i].onclick = function () {
        console.log(i);
    };
};

for (var i = 0; i < aLi.length; i++) {
    _loop(i);
}