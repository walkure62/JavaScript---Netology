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
  constructor(location = new Vector(0,0), size = new Vector(1,1), speed = new Vector(0,0)) {
    if (!(location instanceof Vector) || !(size instanceof Vector) || !(speed instanceof Vector)) {
        throw new Error('В конструктор класса Actor передан не вектор!');
  } else {
    this.pos = location;
    this.size = size;
    this.speed = speed;
    Object.defineProperty(this, "left", {
		get: function() {
			return this.pos.x;
			}
	});
    Object.defineProperty(this, "top", {
		get: function() {
			return this.pos.y;
			}
	});
    Object.defineProperty(this, "right", {
		get: function() {
			return this.pos.x + this.size.x;
			}
	});
    Object.defineProperty(this, "bottom", {
		get: function() {
			return this.pos.y + this.size.y;
			}
	});
    Object.defineProperty(this, "type", {
    value: "actor",
    writable: false
    });
  }
}
 act() {}
 isIntersect (actor) {
   if (!(actor instanceof Actor) ) {
    	throw new Error('В метод isIntersect не передан движущийся объект типа Actor!');
    }
 }
}
//Пример использования класса Actor
//const items = new Map();
//const player = new Actor();
//items.set('Игрок', player);
//items.set('Первая монета', new Actor(new Vector(10, 10)));
//items.set('Вторая монета', new Actor(new Vector(15, 5)));

//function position(item) {
//  return ['left', 'top', 'right', 'bottom']
//    .map(side => `${side}: ${item[side]}`)
//    .join(', ');
//}

//function movePlayer(x, y) {
//  player.pos = player.pos.plus(new Vector(x, y));
//}

//function status(item, title) {
//  console.log(`${title}: ${position(item)}`);
//  if (player.isIntersect(item)) {
//    console.log(`Игрок подобрал ${title}`);
//  }
//}

//items.forEach(status);
// movePlayer(10, 10);
// items.forEach(status);
// movePlayer(5, -5);
// items.forEach(status);const items = new Map();
// const player = new Actor();
// items.set('Игрок', player);
// items.set('Первая монета', new Actor(new Vector(10, 10)));
// items.set('Вторая монета', new Actor(new Vector(15, 5)));

// function position(item) {
//   return ['left', 'top', 'right', 'bottom']
//     .map(side => `${side}: ${item[side]}`)
//     .join(', ');
// }

// function movePlayer(x, y) {
//   player.pos = player.pos.plus(new Vector(x, y));
// }

// function status(item, title) {
//   console.log(`${title}: ${position(item)}`);
//   if (player.isIntersect(item)) {
//     console.log(`Игрок подобрал ${title}`);
//   }
// }

// items.forEach(status);
// movePlayer(10, 10);
// items.forEach(status);
// movePlayer(5, -5);
// items.forEach(status);
