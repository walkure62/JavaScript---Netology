'use strict';
class Vector {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  plus (vector) {
    if (!(vector instanceof Vector)) {
      throw new Error('В метод plus передан не вектор.');
    } else {
    	return new Vector(this.x + vector.x, this.y + vector.y);
    }
  }
  times (number) {
    return new Vector(this.x * number, this.y * number);
  }
}
// Пример использования класса Vector
// const start = new Vector(30, 50);
// const moveTo = new Vector(5, 10);
// const finish = start.plus(moveTo.times(2));
//
// console.log(`Исходное расположение: ${start.x}:${start.y}`);
// console.log(`Текущее расположение: ${finish.x}:${finish.y}`);
class  Actor {
  constructor(location = new Vector(), size = new Vector(1,1), speed = new Vector()) {
    if (!(location instanceof Vector) || !(size instanceof Vector) || !(speed instanceof Vector)) {
        throw new Error('В конструктор класса Actor передан не вектор!');
  } else {
    this.pos = location;
    this.size = size;
    this.speed = speed;
    Object.defineProperty(this, "left", {
    value: this.pos.x,
    writable: false
    });
    Object.defineProperty(this, "top", {
    value: this.pos.y,
    writable: false
    });
    Object.defineProperty(this, "right", {
    value:  this.pos.x + this.size.x,
    writable: false
    });
    Object.defineProperty(this, "bottom", {
    value: this.pos.y + this.size.y,
    writable: false
    });
    Object.defineProperty(this, "type", {
    value: "actor",
    writable: false
    });
  }
}
 act() {}
 isIntersect (actor) {
   if (!(actor instanceof Actor)) {
    	throw new Error('В метод isIntersect не передан движущийся объект типа Actor.');
    }
 }
}
