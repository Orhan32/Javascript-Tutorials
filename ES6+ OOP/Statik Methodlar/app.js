// Static Methods

class Matematik {
    sqrt(x) {
        console.log(x * x);
    }
    static cube(x) {
        console.log(x * x * x);
    }

}


console.log(Matematik.cube(3)); // Staticler için obje oluşturulmaz

const math = new Matematik(); // Static Olmayan
math.sqrt(144);

console.log(Math.sqrt(144));