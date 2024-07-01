let array = [[1,2,3],[4,5],[6],[8,9,10,11]];

let result = array.reduce((result,data) => {
    return result.concat(data);
}, []);

console.log(result);