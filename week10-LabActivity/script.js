// Challenge 1
class Car
{
    constructor(make,speed){
        this.make=make;
        this.speed=speed;
    }
    get make()
    {
         return this.make;
    }
    get speed()
    {
        return this.speed;
    }

    accelerate(speed)
    {
        speed=speed+10;
        this.speed=speed;
        return speed;
    }

    breake(speed)
    {
        speed=speed-5;
        this.speed=speed;
        return speed;
    }


}


const car1=new Car('BMW',120);
const car2 = new Car('Mercedes',95);

console.log(car1.accelerate(car1.speed()));
console.log(car2.accelerate(car2.speed()));


