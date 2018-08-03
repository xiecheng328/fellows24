let a = 5;
let sum = (x, y) => x + y;
let b = 6;
class People{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    showName(){
        console.log(this.name);
    }
}

let p1 = new People('zs', 20);
console.log(p1);
p1.showName();

var aLi = document.querySelectorAll('#nav li');
for(let i=0; i<aLi.length; i++){
    aLi[i].onclick = function(){
        console.log(i);
    };
}