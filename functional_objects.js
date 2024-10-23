//functional programming treat functions as values (a data type)

const car = {
    location:0,
    speed: 5,
    drive: (car)=> this.location += car.speed
};

console.log(car.location)
car.drive(car)
car.drive(car)
car.drive(car)
car.drive(car)
console.log(car.location)

