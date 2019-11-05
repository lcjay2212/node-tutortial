/* var person = {
  firstNanem: "Cjay",
  lastName: "Sotto",
  age: 28,
};

console.log(person); */

/* var printBacon = function() {
  console.log("Bacon is healthy");
};
printBacon();

setTimeout(printBacon, 5000); */

/* function placeAnOrder(orderNumber) {
  console.log("Customer order:", orderNumber);

  cookAndDeliverFood(function() {
    console.log("Delivered food order:", orderNumber);
  });
}

function cookAndDeliverFood(callback) {
  setTimeout(callback, 5000);
}

placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);
 */

/* var Bucky = {
  favFood: "Bacon",
  favMovie: "Chappie",
};

var Person = Bucky;
Person.favFood = "Salad";
console.log(Bucky.favFood);
console.log(Bucky.favMovie);
 */

function User() {
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer) {
        targetPlayer.life += 1;
        console.log(this.name + "gave 1 life to " + targetPlayer.name);
    };
}

var Bucky = new User();
var Wendy = new User();
Bucky.name = "Bucky";
Wendy.name = "Wendy";

Bucky.giveLife(Wendy);
console.log("Bucky" + Bucky.life);
console.log("Wendy" + Wendy.life);

User.prototype.uppercut = function uppercut(targetPlayer) {
    targetPlayer.life -= 3;
    console.log(this.name + " just uppercut " + targetPlayer.name);
};

Wendy.uppercut(Bucky);
console.log("Bucky" + Bucky.life);
console.log("Wendy" + Wendy.life);