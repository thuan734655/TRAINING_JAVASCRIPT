let map = {
    one: true,
    two: true,
    hasOwnProperty: true
  };
  
  console.log(Object.prototype.hasOwnProperty.call(map, "one")); 
  console.log(Object.prototype.hasOwnProperty.call(map, "two")); 
  console.log(Object.prototype.hasOwnProperty.call(map, "hasOwnProperty")); 
  console.log(Object.prototype.hasOwnProperty.call(map, "three")); 
  