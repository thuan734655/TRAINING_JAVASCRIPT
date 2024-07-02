class Vec {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    plus(other) {
      return new Vec(this.x + other.x, this.y + other.y);
    }
  
    minus(other) {
      return new Vec(this.x - other.x, this.y - other.y);
    }
  
    get length() {
      return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
  }
  
  const vec1 = new Vec(3, 4);
  const vec2 = new Vec(1, 2);
  
  const sumVec = vec1.plus(vec2);  
  const diffVec = vec1.minus(vec2);  
  const vecLength = vec1.length;
  
  console.log(`Sum of vec1 and vec2: (${sumVec.x}, ${sumVec.y})`);
  console.log(`Difference of vec1 and vec2: (${diffVec.x}, ${diffVec.y})`);
  console.log(`Length of vec1: ${vecLength}`);
  